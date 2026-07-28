
//it should have the top navigation page on the application
/*
How to import assets:
1 first wrire import <name> from "<relative path>"
ensure that it is in the src directory before importing

*/ 
import amazon from "./assets/amazon.png";

function Navigation(){
    return(
    <div>

       <h2>Navigation section</h2>

    </div>
    )
}
/* since you might want to render it to main.jsx then 
you have to export it .
 Export it so that any other file can import it
 */
//default export

export default Navigation ;