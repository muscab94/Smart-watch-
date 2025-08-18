import { Route, Routes } from "react-router-dom"
import MainHeader from "./Components/MainHeader"
import TopHeader from "./Components/TopHeader"
import Home from "./Page/Home"
import Watches from "./Page/Watches"
import Quick from "./Page/Quick"
import Pages from "./Page/pages"
import Footer from "./Components/Footer"
import Cart from "./Page/Cart"
import Sports from "./Page/Sports"
import Bestsellers from "./Page/Bestsellers"
import Modern from "./Page/Modern"
import Classic from "./Page/Classic"
import Custom from "./Page/Custom"
import More from "./Page/More"
import Gold from "./Page/Gold"
import Black from "./Page/Black"
import Men from "./Page/Men"
import Red from "./Page/Red"
import Navy from "./Page/Navy"
import Blog from "./Page/Blog"
import About from "./Page/About"
import FAQ from "./Page/FAQ"
import WishList from "./Page/WishList"
import MyAccount from "./Page/MyAccount"
import TrackingOrders from "./Page/Tracking Orders"
import ItemsCompare from "./Page/Items Compare"
import Dropdown from "./Page/Dropdown"
import SmartWatch1 from "./Page/smartWatch1"
import SmartWatch2 from "./Page/smartWatch2"
import SmartWatch3 from "./Page/smartWatch3"
import SmartWatch4 from "./Page/smartWatch4"
import SmartWatch5 from "./Page/smartWatch5"
import CheckNow1 from "./Page/CheckNow1"
import CheckNow2 from "./Page/CheckNow2"
import CheckNow3 from "./Page/CheckNow3"
import CheckNow4 from "./Page/CheckNow4"
import CheckNow5 from "./Page/CheckNow5"


function App(){
  return <div className="flex justify-between min-h-screen flex-col">
    <TopHeader/>
    <MainHeader/>

    <div className="flex-1">
       <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/Watches" element={<Watches/>}/>   
        <Route path="/Quick" element={<Quick/>}/> 
        <Route path="/Pages" element={<Pages/>}/>
         <Route path="/cart" element={<Cart/>}/> 
          {/*left  */}
         <Route path="/Sports" element={<Sports/>}/> 
         <Route path="/Bestsellers" element={<Bestsellers/>}/> 
         <Route path="/Modern" element={<Modern/>}/> 
         <Route path="/Classic" element={<Classic/>}/> 
         <Route path="/Custom" element={<Custom/>}/> 
         <Route path="/More" element={<More/>}/>
         <Route path="/Gold" element={<Gold/>}/>  
         <Route path="/Black" element={<Black/>}/> 
         <Route path="/Men" element={<Men/>}/> 
         <Route path="/Red" element={<Red/>}/> 
         <Route path="/Navy" element={<Navy/>}/> 
         {/* right */}
         <Route path="/Blog" element={<Blog/>}/> 
         <Route path="/About" element={<About/>}/> 
         <Route path="/FAQ" element={<FAQ/>}/> 
         <Route path="/WishList" element={<WishList/>}/> 
         <Route path="/MyAccount" element={<MyAccount/>}/> 
         <Route path="/Tracking-Orders" element={<TrackingOrders/>}/> 
         <Route path="/Items-Compare" element={<ItemsCompare/>}/> 
         <Route path="/Dropdown" element={<Dropdown/>}/> 
         {/* SMArt */}
         <Route path="/SmartWatch1" element={<SmartWatch1/>}/> 
         <Route path="/SmartWatch2" element={<SmartWatch2/>}/> 
         <Route path="/SmartWatch3" element={<SmartWatch3/>}/> 
         <Route path="/SmartWatch4" element={<SmartWatch4/>}/>
         <Route path="/SmartWatch5" element={<SmartWatch5/>}/> 
         {/* check */}
         <Route path="/CheckNow1" element={<CheckNow1/>}/> 
         <Route path="/CheckNow2" element={<CheckNow2/>}/> 
         <Route path="/CheckNow3" element={<CheckNow3/>}/>
         <Route path="/CheckNow4" element={<CheckNow4/>}/>  
         <Route path="/CheckNow5" element={<CheckNow5/>}/> 

      </Routes>
      
    </div>

    <Footer />
  </div>
}
export default App