export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">Tailwind CSS Test</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Card 1</h2>
            <p className="text-gray-600 dark:text-gray-300">This is a test card to verify Tailwind CSS is working.</p>
            <button className="btn-primary mt-4">Primary Button</button>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Card 2</h2>
            <p className="text-gray-600 dark:text-gray-300">Another test card with different content.</p>
            <button className="btn-secondary mt-4">Secondary Button</button>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Card 3</h2>
            <p className="text-gray-600 dark:text-gray-300">Third test card to complete the grid.</p>
            <span className="metric-badge mt-4">Test Badge</span>
          </div>
        </div>
        
        <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">Status</h3>
          <p className="text-blue-700 dark:text-blue-300">
            If you can see this styled properly, Tailwind CSS is working correctly!
          </p>
        </div>
      </div>
    </div>
  );
}