import {BrowserRouter, Route, Routes} from "react-router"
import Home from "./Home";
import CrazyRoute from "./CrazyRoute";
import About from "./About"
import Page404 from "./404"

function Routing(){
    return(
        <BrowserRouter>
        <Routes>
            
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="crazy/route/23333" element={<CrazyRoute/>}/>
            <Route path="*" element={<Page404/>}/>

        </Routes>
        </BrowserRouter>
    )
};
export default Routing;