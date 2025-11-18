export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-xl mb-8">
            <span className="text-3xl text-white">🚂</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            TSI Directory
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            European Railway Interoperability Platform
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Transform, validate, and manage railway transport data with our comprehensive 
            TSI interoperability platform designed for European operators.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Start Converting Data
            </button>
            <button className="px-8 py-3 border border-gray-300 text-gray-700 dark:text-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              View Documentation
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: 'TSI Conversion Service',
              description: 'Convert transport data between JSON and standardized formats',
              icon: '🔄',
              color: 'bg-blue-50 border-blue-200'
            },
            {
              title: 'TSI Validation Service', 
              description: 'Validate transport data against XSD schemas and business rules',
              icon: '✅',
              color: 'bg-green-50 border-green-200'
            },
            {
              title: 'TSI Registry Service',
              description: 'Browse TSI messages, codes, and metadata',
              icon: '📊', 
              color: 'bg-purple-50 border-purple-200'
            },
            {
              title: 'TSI Authoring & Test',
              description: 'Create and test TSI messages with sandbox environment',
              icon: '✏️',
              color: 'bg-orange-50 border-orange-200'
            },
            {
              title: 'TSI Search & Glossary',
              description: 'Search TSI standards, definitions, and documentation',
              icon: '🔍',
              color: 'bg-indigo-50 border-indigo-200'
            }
          ].map((service, index) => (
            <div key={index} className={`p-6 rounded-xl border ${service.color} hover:shadow-lg transition-shadow cursor-pointer`}>
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{service.description}</p>
              <div className="text-blue-600 font-medium text-sm">
                Try now →
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {[
            { title: 'Fast Processing', desc: 'Convert large datasets in seconds', icon: '⚡' },
            { title: 'Standards Compliant', desc: 'Fully compliant with TSI, ERA, and UIC standards', icon: '🛡️' },
            { title: 'Multi-Language', desc: 'Available in English, German, and Slovak', icon: '🌍' },
            { title: 'Professional Support', desc: 'Expert support for railway data conversion', icon: '👥' }
          ].map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-blue-600 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Railway Data?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join European railway operators using TSI Directory for seamless interoperability
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition-colors font-semibold">
            Get Started Today →
          </button>
        </div>
      </div>
    </div>
  );
}