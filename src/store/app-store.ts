import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TSIModule, ConversionJob, SavedItem, LayoutState } from '@/types';

interface AppState extends LayoutState {
  recentJobs: ConversionJob[];
  savedItems: SavedItem[];
  
  // Actions
  setActiveModule: (module: TSIModule) => void;
  toggleSidebar: () => void;
  toggleContextPanel: () => void;
  
  addRecentJob: (job: ConversionJob) => void;
  updateJobStatus: (jobId: string, updates: Partial<ConversionJob>) => void;
  
  addSavedItem: (item: SavedItem) => void;
  removeSavedItem: (itemId: string) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Initial state
      sidebarCollapsed: false,
      contextPanelCollapsed: false,
      activeModule: 'convert',
      recentJobs: [],
      savedItems: [],
      
      // Layout actions
      setActiveModule: (module) => set({ activeModule: module }),
      toggleSidebar: () => set((state) => ({ 
        sidebarCollapsed: !state.sidebarCollapsed 
      })),
      toggleContextPanel: () => set((state) => ({ 
        contextPanelCollapsed: !state.contextPanelCollapsed 
      })),
      
      // Job actions
      addRecentJob: (job) => set((state) => ({
        recentJobs: [job, ...state.recentJobs.slice(0, 9)] // Keep last 10 jobs
      })),
      
      updateJobStatus: (jobId, updates) => set((state) => ({
        recentJobs: state.recentJobs.map(job => 
          job.id === jobId ? { ...job, ...updates } : job
        )
      })),
      
      // Saved items actions
      addSavedItem: (item) => set((state) => ({
        savedItems: [item, ...state.savedItems]
      })),
      
      removeSavedItem: (itemId) => set((state) => ({
        savedItems: state.savedItems.filter(item => item.id !== itemId)
      })),
    }),
    {
      name: 'tsi-app-storage',
      partialize: (state) => ({
        sidebarCollapsed: state.sidebarCollapsed,
        contextPanelCollapsed: state.contextPanelCollapsed,
        activeModule: state.activeModule,
        recentJobs: state.recentJobs,
        savedItems: state.savedItems,
      }),
    }
  )
);