
import { RiNotification2Fill } from "react-icons/ri";
import { MdOutlineLightMode } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";


function Header() {
  return (
    <>
      <div className="border-b border-gray-500">
        <div className="container mx-auto py-4 flex justify-between items-center">

          {/* ************** Logo Section ************88 */}

          <div className="font-bold text-lg cursor-pointer">Rezaul Karim</div>

          {/* ************* Icon Section ************** */}

          <div>
            <ul className="flex space-x-4 justify-center items-center text-2xl text-gray-700 cursor-pointer">
              <li className="p-2 border border-gray-500 rounded-md  hover:bg-green-600 hover:text-white">
                <RiNotification2Fill />
              </li>
              <li className="p-2 border border-gray-500 rounded-md  hover:bg-green-600 hover:text-white">
                <MdOutlineLightMode />
              </li>
              <li  className="p-2 border border-gray-500 rounded-md  hover:bg-green-600 hover:text-white">
                <IoCartOutline />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header