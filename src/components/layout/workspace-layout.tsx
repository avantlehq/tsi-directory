'use client';

import React from 'react';
import { useAppStore } from '@/store/app-store';
import { Header } from './header';
import { NavigationSidebar } from './navigation-sidebar';
import { ContextPanel } from './context-panel';
import { cn } from '@/lib/utils';

interface WorkspaceLayoutProps {
  children: React.ReactNode;
}

export function WorkspaceLayout({ children }: WorkspaceLayoutProps) {
  const { sidebarCollapsed, contextPanelCollapsed } = useAppStore();

  return (
    <div className="h-screen flex flex-col bg-gray-50 dark:bg-gray-950">
      {/* Header */}
      <Header />
      
      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Navigation Sidebar */}
        <NavigationSidebar className={cn(
          "transition-all duration-300 flex-shrink-0",
          sidebarCollapsed && "lg:flex hidden" // Hide on mobile when collapsed, show on desktop
        )} />
        
        {/* Main Workspace */}
        <main className={cn(
          "flex-1 flex flex-col min-w-0 bg-white dark:bg-gray-900",
          "transition-all duration-300"
        )}>
          <div className="flex-1 flex overflow-hidden">
            {/* Dynamic Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden">
              {children}
            </div>
            
            {/* Context Panel */}
            {!contextPanelCollapsed && (
              <ContextPanel className="hidden xl:flex flex-shrink-0" />
            )}
          </div>
        </main>
      </div>
      
      {/* Mobile Context Panel Overlay */}
      {!contextPanelCollapsed && (
        <div className="xl:hidden fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" 
             onClick={() => useAppStore.getState().toggleContextPanel()}>
          <div className="absolute right-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-xl"
               onClick={(e) => e.stopPropagation()}>
            <ContextPanel />
          </div>
        </div>
      )}
      
      {/* Mobile Sidebar Overlay */}
      {!sidebarCollapsed && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
             onClick={() => useAppStore.getState().toggleSidebar()}>
          <div className="absolute left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white dark:bg-gray-900 shadow-xl"
               onClick={(e) => e.stopPropagation()}>
            <NavigationSidebar />
          </div>
        </div>
      )}
    </div>
  );
}