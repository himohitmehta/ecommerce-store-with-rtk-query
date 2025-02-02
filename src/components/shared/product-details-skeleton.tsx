export default function ProductDetailSkeleton() {
    return (
      <div className="grid md:grid-cols-2 gap-8 animate-pulse">
        <div className="w-full h-[500px] bg-gray-300 rounded-lg"></div>
        <div>
          <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
          <div className="h-6 bg-gray-300 rounded w-1/4 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-6"></div>
          <div className="h-10 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
    )
  }
  
  