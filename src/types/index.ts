export type TSIModule = 'convert' | 'validate' | 'registry' | 'author' | 'search';

export interface ConversionJob {
  id: string;
  name: string;
  inputFormat: string;
  outputFormat: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  createdAt: Date;
  completedAt?: Date;
  progress: number;
  fileSize?: number;
  results?: {
    originalRecords: number;
    convertedRecords: number;
    validationErrors: number;
    warnings: number;
  };
}

export interface SavedItem {
  id: string;
  type: 'conversion' | 'validation' | 'search' | 'registry';
  name: string;
  description?: string;
  data: any;
  createdAt: Date;
  tags: string[];
}

export interface LayoutState {
  sidebarCollapsed: boolean;
  contextPanelCollapsed: boolean;
  activeModule: TSIModule;
}

export interface ValidationResult {
  type: 'error' | 'warning' | 'info';
  code: string;
  message: string;
  field?: string;
  line?: number;
  column?: number;
}

export interface RegistryItem {
  id: string;
  type: 'message' | 'code' | 'standard';
  name: string;
  version: string;
  description: string;
  standard: 'TSI' | 'ERA' | 'UIC';
  lastModified: Date;
  metadata: Record<string, any>;
}

export interface SearchResult {
  id: string;
  type: 'standard' | 'definition' | 'code' | 'message';
  title: string;
  description: string;
  source: string;
  url?: string;
  relevance: number;
}