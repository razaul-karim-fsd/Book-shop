
import Header from "../component/header/Header";
import LeftSide from "../component/body/left_side/LeftSide";
import RightSide from "../component/body/right_side/RightSide";
import Footer from "../component/footer/Footer";
import BookGallery from "../component/body/book_gallery/BookGallery";

function Layout() {




  return (
    <>
      <Header />
      <div className="container mx-auto flex justify-between">
        <LeftSide />
        <BookGallery />
        <RightSide />
      </div>

      <Footer />
    
    </>
  )
}

export default Layout
