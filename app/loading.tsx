export default function Loading() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="relative">
        {/* Outer rotating circle */}
        <div className="w-16 h-16 rounded-full border-t-2 border-r-2 border-purple-500 animate-spin" />
        
        {/* Inner rotating circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-t-2 border-l-2 border-cyan-500 animate-spin-reverse" />
        </div>

        {/* Center dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
} 