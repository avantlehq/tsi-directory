'use client';

import React from 'react';
import { WorkspaceLayout } from '@/components/layout/workspace-layout';
import { useAppStore } from '@/store/app-store';
import { 
  RotateCcw, 
  CheckCircle, 
  Database, 
  FileEdit, 
  Search, 
  ArrowRight,
  Zap,
  Shield,
  Globe,
  Users,
  Train
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  const { setActiveModule } = useAppStore();

  const services = [
    {
      id: 'convert' as const,
      icon: RotateCcw,
      title: 'TSI Conversion Service',
      description: 'Convert transport data between JSON and standardized formats',
      color: 'bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800',
      iconColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      id: 'validate' as const,
      icon: CheckCircle,
      title: 'TSI Validation Service',
      description: 'Validate transport data against XSD schemas and business rules',
      color: 'bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800',
      iconColor: 'text-green-600 dark:text-green-400'
    },
    {
      id: 'registry' as const,
      icon: Database,
      title: 'TSI Registry Service',
      description: 'Browse TSI messages, codes, and metadata',
      color: 'bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800',
      iconColor: 'text-purple-600 dark:text-purple-400'
    },
    {
      id: 'author' as const,
      icon: FileEdit,
      title: 'TSI Authoring & Test',
      description: 'Create and test TSI messages with sandbox environment',
      color: 'bg-orange-50 dark:bg-orange-950 border-orange-200 dark:border-orange-800',
      iconColor: 'text-orange-600 dark:text-orange-400'
    },
    {
      id: 'search' as const,
      icon: Search,
      title: 'TSI Search & Glossary',
      description: 'Search TSI standards, definitions, and documentation',
      color: 'bg-indigo-50 dark:bg-indigo-950 border-indigo-200 dark:border-indigo-800',
      iconColor: 'text-indigo-600 dark:text-indigo-400'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Convert large datasets in seconds with our optimized processing engine'
    },
    {
      icon: Shield,
      title: 'Standards Compliant',
      description: 'Fully compliant with TSI, ERA, and UIC railway interoperability standards'
    },
    {
      icon: Globe,
      title: 'Multi-Language',
      description: 'Available in English, German, and Slovak for European railway operators'
    },
    {
      icon: Users,
      title: 'Professional Support',
      description: 'Expert support for railway data conversion and validation needs'
    }
  ];

  return (
    <WorkspaceLayout>
      <div className="flex-1 overflow-y-auto railway-scroll">
        {/* Hero Section */}
        <section className="px-6 py-12 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 railway-gradient rounded-xl flex items-center justify-center">
                <Train className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              European Railway
              <span className="block railway-gradient bg-clip-text text-transparent">
                Interoperability Platform
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Transform, validate, and manage railway transport data with our comprehensive 
              TSI interoperability platform designed for European operators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="gap-2"
                onClick={() => setActiveModule('convert')}
              >
                Start Converting Data
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                View Documentation
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Complete TSI Service Platform
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Everything you need for railway data interoperability
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    className={`p-6 rounded-xl border transition-all duration-200 hover:shadow-lg cursor-pointer group ${service.color}`}
                    onClick={() => setActiveModule(service.id)}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm group-hover:scale-110 transition-transform duration-200">
                        <Icon className={`h-6 w-6 ${service.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          {service.description}
                        </p>
                        <div className="flex items-center text-sm text-blue-600 dark:text-blue-400 font-medium">
                          Try now
                          <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-6 py-16 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Why Choose TSI Directory
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Professional-grade platform trusted by European railway operators
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 railway-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: '50+', label: 'Railway Operators' },
                { number: '100K+', label: 'Files Processed' },
                { number: '99.9%', label: 'Uptime' },
                { number: '24/7', label: 'Support' }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-16 bg-blue-600 dark:bg-blue-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Railway Data?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join European railway operators using TSI Directory for seamless interoperability
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="gap-2"
              onClick={() => setActiveModule('convert')}
            >
              Get Started Today
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </section>
      </div>
    </WorkspaceLayout>
  );
}