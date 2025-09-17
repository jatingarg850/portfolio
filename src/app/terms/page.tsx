import { FileText, Scale, AlertTriangle, CheckCircle } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium mb-6">
            <Scale className="w-4 h-4 mr-2" />
            Legal Terms
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Terms of Service
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            These terms govern your use of DataVidhi services. Please read them carefully.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <CheckCircle className="w-6 h-6 mr-3 text-green-600" />
              Acceptance of Terms
            </h2>
            <p>
              By accessing and using DataVidhi services, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-blue-600" />
              Services Description
            </h2>
            <p className="mb-4">DataVidhi provides:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Web and mobile application development</li>
              <li>AI/ML and data engineering solutions</li>
              <li>IoT project development</li>
              <li>Startup technology consulting</li>
              <li>UI/UX design services</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <AlertTriangle className="w-6 h-6 mr-3 text-yellow-600" />
              Limitations
            </h2>
            <p className="mb-4">Our services are provided "as is" without warranties of any kind. We are not liable for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Indirect or consequential damages</li>
              <li>Loss of data or business interruption</li>
              <li>Third-party service failures</li>
              <li>Force majeure events</li>
            </ul>
          </div>

          <div className="text-center mt-8 text-sm text-gray-500 dark:text-gray-400">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p>For questions about these terms, contact us at datavidhics@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}