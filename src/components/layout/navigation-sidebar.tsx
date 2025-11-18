'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { 
  RotateCcw, 
  CheckCircle, 
  Database, 
  FileEdit, 
  Search,
  Clock,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Zap,
  Shield,
  Archive,
  PenTool,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppStore } from '@/store/app-store';
import { TSIModule } from '@/types';
import { cn } from '@/lib/utils';

const moduleIcons = {
  convert: RotateCcw,
  validate: CheckCircle, 
  registry: Database,
  author: FileEdit,
  search: Search,
};

const moduleColors = {
  convert: 'text-blue-600 dark:text-blue-400',
  validate: 'text-green-600 dark:text-green-400',
  registry: 'text-purple-600 dark:text-purple-400', 
  author: 'text-orange-600 dark:text-orange-400',
  search: 'text-indigo-600 dark:text-indigo-400',
};

interface NavigationSidebarProps {
  className?: string;
}

export function NavigationSidebar({ className }: NavigationSidebarProps) {
  const t = useTranslations('navigation');
  const { 
    activeModule, 
    setActiveModule, 
    sidebarCollapsed, 
    toggleSidebar,
    recentJobs,
    savedItems 
  } = useAppStore();

  const modules: { id: TSIModule; label: string; description: string }[] = [
    { 
      id: 'convert', 
      label: t('convert'),
      description: 'Transform data formats'
    },
    { 
      id: 'validate', 
      label: t('validate'),
      description: 'Check data quality'
    },
    { 
      id: 'registry', 
      label: t('registry'),
      description: 'Browse TSI standards'
    },
    { 
      id: 'author', 
      label: t('author'),
      description: 'Create TSI messages'
    },
    { 
      id: 'search', 
      label: t('search'),
      description: 'Find documentation'
    },
  ];

  return (
    <aside className={cn(
      "h-full bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 flex flex-col railway-glass transition-all duration-300",
      sidebarCollapsed ? "w-16" : "w-64 lg:w-80",
      className
    )}>
      {/* Sidebar Toggle */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="ml-auto"
        >
          {sidebarCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Module Navigation */}
      <div className="p-4">
        {!sidebarCollapsed && (
          <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
            Services
          </h3>
        )}
        <nav className="space-y-1">
          {modules.map((module) => {
            const Icon = moduleIcons[module.id];
            const isActive = activeModule === module.id;
            
            return (
              <button
                key={module.id}
                onClick={() => setActiveModule(module.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200",
                  isActive 
                    ? "bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800" 
                    : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                )}
                title={sidebarCollapsed ? module.label : undefined}
              >
                <Icon className={cn(
                  "h-5 w-5 flex-shrink-0",
                  isActive ? "text-blue-600 dark:text-blue-400" : moduleColors[module.id]
                )} />
                {!sidebarCollapsed && (
                  <div className="flex-1 min-w-0">
                    <div className="font-medium">{module.label}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                      {module.description}
                    </div>
                  </div>
                )}
                {!sidebarCollapsed && isActive && (
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full flex-shrink-0" />
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Recent Jobs */}
      {!sidebarCollapsed && (
        <div className="flex-1 p-4 overflow-hidden">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              {t('recentJobs')}
            </h3>
          </div>
          
          <div className="space-y-2 railway-scroll overflow-y-auto max-h-48">
            {recentJobs.slice(0, 5).map((job) => (
              <div
                key={job.id}
                className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium truncate">{job.name}</span>
                  <span className={cn(
                    "text-xs px-2 py-0.5 rounded-full",
                    job.status === 'completed' ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300" :
                    job.status === 'processing' ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300" :
                    job.status === 'failed' ? "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300" :
                    "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                  )}>
                    {job.status}
                  </span>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {job.inputFormat} → {job.outputFormat}
                </div>
              </div>
            ))}
            
            {recentJobs.length === 0 && (
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                <Clock className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">No recent jobs</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Saved Items */}
      {!sidebarCollapsed && (
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 mb-3">
            <Bookmark className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              {t('savedItems')}
            </h3>
          </div>
          
          <div className="space-y-2 railway-scroll overflow-y-auto max-h-32">
            {savedItems.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="p-2 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors"
              >
                <div className="text-sm font-medium truncate">{item.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                  {item.type}
                </div>
              </div>
            ))}
            
            {savedItems.length === 0 && (
              <div className="text-center py-4 text-gray-500 dark:text-gray-400">
                <Bookmark className="h-6 w-6 mx-auto mb-1 opacity-50" />
                <p className="text-xs">No saved items</p>
              </div>
            )}
          </div>
        </div>
      )}
    </aside>
  );
}