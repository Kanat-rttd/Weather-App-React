import { Dispatch } from "react";

interface InputProps {
    search: string;
    setSearch: Dispatch<React.SetStateAction<string>>;
    handleSearch: () => void;
}

function Input({search, setSearch, handleSearch} : InputProps) {
    return(
        <div className="flex items-center mb-6">
            <input
                className="p-2 mr-4 text-white rounded-lg outline-none border border-solid border-gray-600 
              hover:border-blue-400 focus:border-purple-500 transition-colors duration-500 ease-in-out 
                flex-grow"  
                type="text" 
                name="search" 
                id="search"
                placeholder="Search city..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e)=> {
                    if (e.key === 'Enter') {
                        handleSearch();
                    }
                }}
            />
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleSearch}
                >
                Search
            </button>
        </div>
    )
}

export default Input;