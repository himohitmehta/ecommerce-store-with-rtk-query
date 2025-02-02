export default function ProductListSkeleton() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(12)].map((_, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-md animate-pulse">
            <div className="w-full h-48 bg-gray-300 mb-4 rounded"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
            <div className="h-8 bg-gray-300 rounded w-full"></div>
          </div>
        ))}
      </div>
    )
  }
  
  