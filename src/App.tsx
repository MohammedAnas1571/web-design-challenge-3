
import { BrowserRouter } from 'react-router-dom'
import './App.css'

import { Hero } from './component/Hero'
import Products from './component/Products'
import Banner from './component/Banner'
import BannerText from './component/BannerText'
import Blogs from './component/Blog'
import FAQ from './component/FAQ'
import Footer from './component/Footer'

function App() {
  

  return (
    <BrowserRouter>
    <main className='overflow-x-hidden '>
     <Hero/>
     <Products/>
     <Banner/>
     <BannerText/>
      <Blogs/>
      <FAQ/>
      <Footer/>
    </main>
    </BrowserRouter>
       
  )
}

export default App
