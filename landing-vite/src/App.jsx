import Categorias from "./components/Categorias/Categorias"
import { CategoriasWrapper } from "./components/Categorias/CategoriasStyles"
import Hero from "./components/Hero/Hero"
import Layout from "./components/Layout/Layout"
import Navbar from "./components/Navbar/Navbar"
import CardsProductos from "./components/Productos/CardsProductos"
import Footer from "./components/footer/Footer"

function App() {

  return (
    <>
      <Navbar/>
      <Layout>
        <Hero/>
        <Categorias/>
        <CardsProductos/>
      </Layout>
      <Footer/>
    </>
  )
}

export default App
