'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { 
  X, 
  Info, 
  BookOpen, 
  ExternalLink,
  FileText,
  AlertCircle,
  CheckCircle,
  Clock,
  HelpCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppStore } from '@/store/app-store';
import { cn } from '@/lib/utils';

interface ContextPanelProps {
  className?: string;
}

export function ContextPanel({ className }: ContextPanelProps) {
  const t = useTranslations();
  const { 
    contextPanelCollapsed, 
    toggleContextPanel,
    activeModule 
  } = useAppStore();

  if (contextPanelCollapsed) return null;

  const getContextContent = () => {
    switch (activeModule) {
      case 'convert':
        return {
          title: 'Conversion Help',
          icon: Info,
          content: (
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-1">
                      Supported Formats
                    </h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      Upload JSON, XML, or CSV files to convert to EDIFACT or GTFS formats.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h5 className="font-medium text-gray-900 dark:text-white">Output Formats</h5>
                <div className="space-y-2">
                  <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="font-medium text-sm">SKDUPD</div>
                    <div className="text-xs text-gray-500">Slovak railway data exchange</div>
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="font-medium text-sm">TSDUPD</div>
                    <div className="text-xs text-gray-500">European station data</div>
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="font-medium text-sm">GTFS</div>
                    <div className="text-xs text-gray-500">General Transit Feed</div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h5 className="font-medium text-gray-900 dark:text-white">Quick Links</h5>
                <a 
                  href="#" 
                  className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <BookOpen className="h-4 w-4" />
                  Conversion Documentation
                  <ExternalLink className="h-3 w-3" />
                </a>
                <a 
                  href="#" 
                  className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <FileText className="h-4 w-4" />
                  Sample Data Files
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          )
        };

      case 'validate':
        return {
          title: 'Validation Rules',
          icon: CheckCircle,
          content: (
            <div className="space-y-4">
              <div className="space-y-3">
                <h5 className="font-medium text-gray-900 dark:text-white">Validation Types</h5>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-3 bg-red-50 dark:bg-red-950 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                    <div>
                      <div className="font-medium text-sm text-red-900 dark:text-red-100">Errors</div>
                      <div className="text-xs text-red-700 dark:text-red-300">Critical issues that prevent processing</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                    <div>
                      <div className="font-medium text-sm text-yellow-900 dark:text-yellow-100">Warnings</div>
                      <div className="text-xs text-yellow-700 dark:text-yellow-300">Issues that should be reviewed</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <div>
                      <div className="font-medium text-sm text-blue-900 dark:text-blue-100">Info</div>
                      <div className="text-xs text-blue-700 dark:text-blue-300">Recommendations and tips</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">Validation Rules</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• XSD Schema compliance</li>
                  <li>• ERA business rules</li>
                  <li>• Data consistency checks</li>
                  <li>• Format-specific requirements</li>
                </ul>
              </div>
            </div>
          )
        };

      case 'registry':
        return {
          title: 'Registry Browser',
          icon: BookOpen,
          content: (
            <div className="space-y-4">
              <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                <h5 className="font-medium text-purple-900 dark:text-purple-100 mb-2">
                  TSI Standards Registry
                </h5>
                <p className="text-sm text-purple-700 dark:text-purple-300">
                  Browse official TSI messages, code lists, and metadata definitions.
                </p>
              </div>

              <div className="space-y-3">
                <h5 className="font-medium text-gray-900 dark:text-white">Categories</h5>
                <div className="space-y-2">
                  {[
                    { name: 'TSI Messages', count: 42 },
                    { name: 'Code Lists', count: 156 },
                    { name: 'ERA Standards', count: 23 },
                    { name: 'UIC References', count: 89 },
                  ].map((category, index) => (
                    <div key={index} className="flex justify-between items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer">
                      <span className="text-sm">{category.name}</span>
                      <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <a 
                  href="#" 
                  className="flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400 hover:underline"
                >
                  <ExternalLink className="h-4 w-4" />
                  Official ERA Documentation
                </a>
              </div>
            </div>
          )
        };

      case 'author':
        return {
          title: 'Authoring Guide',
          icon: FileText,
          content: (
            <div className="space-y-4">
              <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                <h5 className="font-medium text-orange-900 dark:text-orange-100 mb-2">
                  Message Authoring
                </h5>
                <p className="text-sm text-orange-700 dark:text-orange-300">
                  Create and test TSI messages with our step-by-step wizard.
                </p>
              </div>

              <div className="space-y-3">
                <h5 className="font-medium text-gray-900 dark:text-white">Wizard Steps</h5>
                <div className="space-y-2">
                  {[
                    { step: 1, name: 'Upload Data', status: 'active' },
                    { step: 2, name: 'Validate Structure', status: 'pending' },
                    { step: 3, name: 'Test Exchange', status: 'pending' },
                    { step: 4, name: 'Export Results', status: 'pending' },
                  ].map((item) => (
                    <div key={item.step} className="flex items-center gap-3">
                      <div className={cn(
                        "w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium",
                        item.status === 'active' 
                          ? "bg-orange-600 text-white"
                          : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                      )}>
                        {item.step}
                      </div>
                      <span className="text-sm">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <div className="flex items-start gap-2">
                  <HelpCircle className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5" />
                  <div className="text-sm">
                    <div className="font-medium text-blue-900 dark:text-blue-100">Tip</div>
                    <div className="text-blue-700 dark:text-blue-300">
                      Use the sandbox to test message exchanges safely.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        };

      case 'search':
        return {
          title: 'Search Help',
          icon: HelpCircle,
          content: (
            <div className="space-y-4">
              <div className="p-4 bg-indigo-50 dark:bg-indigo-950 rounded-lg">
                <h5 className="font-medium text-indigo-900 dark:text-indigo-100 mb-2">
                  Search & Glossary
                </h5>
                <p className="text-sm text-indigo-700 dark:text-indigo-300">
                  Find definitions, standards, and documentation across TSI ecosystem.
                </p>
              </div>

              <div className="space-y-3">
                <h5 className="font-medium text-gray-900 dark:text-white">Search Tips</h5>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <div>• Use quotes for exact phrases</div>
                  <div>• Filter by standard (TSI, ERA, UIC)</div>
                  <div>• Search in multiple languages</div>
                  <div>• Use wildcards (*) for partial matches</div>
                </div>
              </div>

              <div className="space-y-3">
                <h5 className="font-medium text-gray-900 dark:text-white">Popular Searches</h5>
                <div className="space-y-1">
                  {[
                    'SKDUPD format',
                    'ERA standards',
                    'Station codes',
                    'TSI validation rules'
                  ].map((search, index) => (
                    <button
                      key={index}
                      className="block w-full text-left p-2 text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 rounded"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )
        };

      default:
        return {
          title: 'Context Panel',
          icon: Info,
          content: (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              <Info className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p>Select a service to see contextual help</p>
            </div>
          )
        };
    }
  };

  const { title, icon: Icon, content } = getContextContent();

  return (
    <aside className={cn(
      "w-80 xl:w-96 h-full bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700 flex flex-col railway-glass",
      className
    )}>
      {/* Context Panel Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2">
          <Icon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          <h3 className="font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleContextPanel}
          className="h-8 w-8"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Context Panel Content */}
      <div className="flex-1 p-4 railway-scroll overflow-y-auto">
        {content}
      </div>

      {/* Context Panel Footer */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
          Need more help?{' '}
          <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
            View documentation
          </a>
        </div>
      </div>
    </aside>
  );
}