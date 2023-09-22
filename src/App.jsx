import { Route, Routes } from "react-router-dom"
import { NavBar } from "./components/Navbar"
import { Home } from "./routes/Home"
import { About } from "./routes/About"
import { Products } from "./routes/Products"
import { Agenda } from "./routes/Agenda"
import { Blog } from "./routes/Blog"
import { ProductDetail } from "./routes/ProductDetail"
import { Footer } from "./components/Footer"


function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/proyecto4/" element={<Home />} />
        <Route path="/proyecto4/about" element={<About />} />
        <Route path="/proyecto4/products" element={<Products />} />
        <Route path="/proyecto4/agenda" element={<Agenda />} />
        <Route path="/proyecto4/blog" element={<Blog />} />
        <Route path="/proyecto4/products/:sku" element={<ProductDetail />} />
      </Routes>
      <Footer/>
    </>

  )
}

export default App
