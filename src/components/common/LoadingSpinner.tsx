const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-cream">
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="h-16 w-16 rounded-full border-t-4 border-b-4 border-secondary-500 animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-8 w-8 rounded-full bg-primary-400"></div>
          </div>
        </div>
        <p className="mt-4 text-gray-700 font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;