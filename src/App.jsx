import { Route, Routes } from "react-router-dom"
import MainHeader from "./Components/MainHeader"
import TopHeader from "./Components/TopHeader"
import Home from "./Page/Home"
import Collection from "./Page/Collection"
import Watches from "./Page/Watches"
import Quick from "./Page/Quick"
import Pages from "./Page/pages"
import Footer from "./Components/Footer"
import Cart from "./Page/Cart"

function App(){
  return <div className="flex justify-between min-h-screen flex-col">
    <TopHeader/>
    <MainHeader/>

    <div className="flex-1">
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Collection" element={<Collection/>}/> 
        <Route path="/Watches" element={<Watches/>}/>   
        <Route path="/Quick" element={<Quick/>}/> 
        <Route path="/Pages" element={<Pages/>}/>
         <Route path="/cart" element={<Cart/>}/>   
      </Routes>
    </div>

    <Footer />
  </div>
}
export default App