import { Route, Routes } from "react-router-dom"
import MainHeader from "./Components/MainHeader"
import TopHeader from "./Components/TopHeader"
import Home from "./Page/Home"
import Collection from "./Page/Collection"
import Watches from "./Page/Watches"
import Quick from "./Page/Quick"
import Pages from "./Page/pages"

function App(){
  return <div>
    <TopHeader/>
    <MainHeader/>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Collection" element={<Collection/>}/> 
      <Route path="/Watches" element={<Watches/>}/>   
      <Route path="/Quick" element={<Quick/>}/> 
      <Route path="/Pages" element={<Pages/>}/>   
    </Routes>
    
  </div>
}
export default App