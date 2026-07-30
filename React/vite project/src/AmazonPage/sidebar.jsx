
import FilterList from "./filterlist"
function SideBar(){
return(
    <div
    style={{
        display:"flex",
        width:"400px",
        flexDirection:"column",
    }}
    >
        <FileList/>
        <FileList/>
        <FileList/>
        <FileList/>
        <FileList/>

    </div>
)
}
export default SideBar;