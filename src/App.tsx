
import { BrowserRouter } from 'react-router-dom'
import './App.css'

import { Hero } from './component/Hero'
import Products from './component/Products'
import Banner from './component/Banner'
import BannerText from './component/BannerText'

function App() {
  

  return (
    <BrowserRouter>
    <main className='overflow-x-hidden '>
     <Hero/>
     <Products/>
     <Banner/>
     <BannerText/>
    </main>
    </BrowserRouter>
       
  )
}

export default App
