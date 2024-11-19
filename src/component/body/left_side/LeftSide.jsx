import { FaFire } from "react-icons/fa";
import { MdCreateNewFolder } from "react-icons/md";
import { FaRunning } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import SearchBar from "./SearchBar";


function LeftSide() {
  return (
    <div className="border-r pr-8 border-gray-500">
      <ul className="space-y-4">
        <SearchBar />

        {/* Trending */}
        <li className="flex items-center text-md font-bold hover:bg-green-600  hover:text-white cursor-pointer p-2 rounded-md">
          <FaFire className="mr-2" />
          Trending
        </li>

        {/* New Releases */}
        <li className="flex items-center text-md font-bold hover:bg-green-600  hover:text-white cursor-pointer p-2 rounded-md">
          <MdCreateNewFolder className="mr-2" />
          New Releases
        </li>

        {/* Coming Soon */}
        <li className="flex items-center text-md font-bold hover:bg-green-600  hover:text-white cursor-pointer p-2 rounded-md">
          <FaRunning className="mr-2" />
          Coming Soon
        </li>

        {/* Favorites */}
        <li className="flex items-center text-md font-bold hover:bg-green-600  hover:text-white cursor-pointer p-2 rounded-md">
          <GrFavorite className="mr-2" />
          Favorites
        </li>
      </ul>
    </div>
  )
}

export default LeftSide