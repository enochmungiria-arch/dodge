
function Mapping(){

    function singleColour(c,i){
        return(<div>
            for index <b>{i}</b> color is <b>{c}</b>
        </div>)
    }

const colors =["green", "yellow", "blue","black"]

   return (
    <div>
        <h1>Mapping colors</h1>
        <h4>Using arrow function</h4>
        {colors.map((color, index)=>{
            return(
            <div>
                for index <b>{index}</b>color is <b>{color}</b>

            </div>
            );
       })}
       <h4>Using direct arrow function</h4>
       {colors.map((c,i) =>(
        <div>
            for index <b>{i}</b> color is <b>{c}</b>
        </div>
       ))};


       <h5>Referencing the function</h5>
       {colors.map(singleColour)}
    </div>
   );
   }

   function singleColourComponent(props){
    const[c,i]= props
    return(
       <div>
            for index <b>{i}</b> color is <b>{c}</b>
        </div>
    )
   }
export default Mapping
