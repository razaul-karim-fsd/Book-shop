
import getImage from "../../../utils/getImage";
import { MdOutlineFavoriteBorder } from "react-icons/md";




export default function GalleryItem({ gallery }) {


  return (
    <>
      {/* Image */}
      <img src={getImage(`../assets/book_images/${gallery.image}`)} alt="" />

      {/* Name */}
      <h2 className="font-bold whitespace-nowrap overflow-hidden text-ellipsis">
        {gallery.name}
      </h2>

      {/* author */}
      <span className="font-semibold">
        {gallery.author}
      </span>

      {/* Rating */}
      <p className="font-bold text-xl my-3 text-green-600">
        {"★".repeat(gallery.rating)}
      </p>

      <div className="flex items-center mt-4">

        {/* Price and Actions */}
        <p className="py-2 px-5 mr-5 font-bold bg-green-600 hover:bg-green-600  hover:text-white cursor-pointer rounded-md">
          ${gallery.price} | Add to cart
        </p>

        {/* Favorite */}
        <span className="p-3 border border-gray-500 rounded-md  hover:bg-green-600">
          <MdOutlineFavoriteBorder />
        </span>

      </div>
    </>
  )
}
