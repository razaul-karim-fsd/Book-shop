


function SearchBar() {
  return (
    <div className="flex justify-center mt-11">
      <div className="relative w-full max-w-md">
        {/* Search Icon */}
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 4a7 7 0 11-7 7 7 7 0 017-7zm0 0h.01M20 20l-4-4"
            />
          </svg>
        </span>
        {/* Search Input */}
        <input
          type="text"
          placeholder="Quick search..."
          className="w-full pl-10 py-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}

export default SearchBar;
