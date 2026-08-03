
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
        <FilterList title={"Condition"} options={["New", "Renewed", "Used"]} />
        <FilterList title={"Material"} options={["Plastic", "Rubber", "Aluminium"]} />
        <FilterList title={"Brand"} options={["Brand A", "Brand B", "Brand C"]} />
        <FilterList title={"Customer Reviews"} options={["4+ Stars", "3+ Stars", "2+ Stars"]} />
        <FilterList title={"Uses"} options={["Speed", "Endurance", "Body Building", "martial arts"]} />

    </div>
)
}
export default SideBar;