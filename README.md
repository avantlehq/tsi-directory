# TSI.Directory - European Railway Interoperability Platform

## Overview

TSI.Directory is a comprehensive platform for European railway data interoperability, providing conversion, validation, registry, authoring, and search capabilities for TSI (Technical Specifications for Interoperability) data.

## Features

### 🎯 **5 Core Services**
1. **TSI Conversion Service** - Transform data between JSON and standardized formats (SKDUPD/TSDUPD/GTFS)
2. **TSI Validation Service** - Validate data against XSD schemas and ERA business rules  
3. **TSI Registry Service** - Browse TSI messages, codes, and metadata
4. **TSI Authoring & Test** - Create and test TSI messages with sandbox environment
5. **TSI Search & Glossary** - Search standards, definitions, and documentation

### 🏗️ **Architecture**
- **3-column responsive layout** with adaptive workspace
- **Professional railway UI** using shadcn/ui + Tailwind CSS
- **Multi-language support** (EN/DE/SK) with next-intl
- **Dark/light theme** support
- **Global state management** with Zustand
- **Mobile-responsive** design with drawer behavior

## Technology Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS + shadcn/ui components
- **State**: Zustand with persistence
- **i18n**: next-intl (planned)
- **Theme**: next-themes
- **Icons**: Lucide React
- **Deployment**: Vercel

## Development

### Prerequisites
- Node.js 18+
- pnpm 8+

### Setup
```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Type checking
pnpm type-check
```

### Project Structure
```
src/
├── app/                    # Next.js app directory
├── components/
│   ├── layout/            # 3-column layout system
│   └── ui/                # shadcn/ui components
├── store/                 # Global state management
├── types/                 # TypeScript definitions
└── lib/                   # Utilities and helpers
```

## Current Status

### ✅ **Completed (MVP Foundation)**
- 3-column responsive layout system
- Navigation sidebar with module switching
- Professional header with language/theme controls
- Context panel with dynamic help content
- Global state management with Zustand
- Professional railway industry styling
- Homepage with service overview

### 🚧 **In Development**
- Module 1 (Conversion Service) full implementation
- API integration with tsi-avantle-ai backend
- File upload/download functionality
- Real-time conversion status tracking

### 📋 **Planned**
- Modules 2-5 implementation (Validation, Registry, Author, Search)
- Multi-language support (EN/DE/SK)
- User authentication and workspace management
- Production deployment optimizations

## Integration

This platform integrates with the internal `tsi-avantle-ai` service for actual data conversion processing. The public-facing platform provides the user interface while the backend service handles the conversion logic.

## Contributing

This project follows railway industry standards and TSI compliance requirements. All contributions should maintain professional quality and adhere to European interoperability specifications.

---

© 2024 TSI Directory. Powered by Avantle Technology.