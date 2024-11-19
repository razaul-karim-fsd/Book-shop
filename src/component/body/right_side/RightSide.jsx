import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

function RightSide() {
    return (
        <div className="border-l border-gray-500">
            <div className="mt-11 pl-8">
                <span className="text-xl font-bold whitespace-nowrap">Filter On Page</span>
                <ul className="my-3">
                    <li className="my-3">
                        <a href="#" className="flex items-center hover:border-4 hover:border-green-500 hover:font-bold hover:p-2 transition-all duration-200 rounded-md">
                            <MdOutlineKeyboardDoubleArrowRight className="mr-1" />
                            By Name
                        </a>
                    </li>
                    <li className="my-3">
                        <a href="#" className="flex items-center hover:border-4 hover:border-green-500 hover:font-bold hover:p-2 transition-all duration-200 rounded-md">
                            <MdOutlineKeyboardDoubleArrowRight className="mr-1" />
                            By Rating
                        </a>
                    </li>
                    <li className="my-3">
                        <a href="#" className="flex items-center hover:border-4 hover:border-green-500 hover:font-bold hover:p-2 transition-all duration-200 rounded-md">
                            <MdOutlineKeyboardDoubleArrowRight className="mr-1" />
                            By Price
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default RightSide