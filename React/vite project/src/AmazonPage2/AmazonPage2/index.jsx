import Navigation from "./Navigation";
import MainSection from "./mainsection";
import SideBar from "./sidebar";

function AmazonPage(){
    return(
        <div>
            <Navigation/>
            <div style={{display:"flex"}}>
                <SideBar/>
                <MainSection/>
            </div>
        </div>
    )
}
export default AmazonPage