
import { initialBookData } from "../../../assets/data/initialBookData";
import GalleryItem from "./GalleryItem";



function BookGallery() {
  const book = initialBookData();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-11 px-8">
      {book.map((gallery) => (
        <div key={gallery.id} className="border border-gray-300 rounded-lg p-4">
          <GalleryItem gallery={gallery} />
        </div>
      ))}
    </div>
  )
}

export default BookGallery