
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import ProductView from "./component/ProductView";
import Articles from "./component/Articles"
import Recommendations from "./component/Recommendations"
import About from "./component/About"
import Footer from "./component/Footer"

export default function Home() {
  return (
    <div className="w-screen h-full mx-0 px-0">
      <Header/>
      <Navbar/>
      <ProductView/>
      <Articles/>
      <Recommendations/>
      <About/>
      <Footer/>
    </div>
  );
}
