function Parent(){
    const str="hello World"
    const amount=2000
    const isOk=true
    const notSet=null;
    //use of an object
    const car = {
        model: "Renault truck",
        manufacturer: "Renault",
        engine: {
        cc: 2500,
        },
    }
    const colors =["blue","green","yellow"];  
    

    return(
        <div>
            <h1>I am the parent component</h1>
            <Child1 str={str} amountInNumber={amount} isOk={isOk} notSet={notSet}/>
            <Child2 str={str} 
            amountInNumber={amount}
            isOk={isOk}
            notSet={notSet}
            car={car}
            colors={colors}
            obj={{name:"",value:""}}
            />
            <Child3 str={str} amountInNumber={amount} isOk={isOk} notSet={notSet}/>
            
        </div>
    
    )
}

function Child1(props){
    console.log(props)
    
    return(
        <div>
            <h1>I am the child 1 component</h1>
            <ul>
                <li>              
                  favourite string <b>{props.str}</b>
                </li>
                <li>              
                  amount <b>{props.amountInNumber}</b>
                </li>
                <li>              
                  isOk <b>{String(props.isOk)}</b>{""}
                </li>
                <li>              
                  isOk <b>{props.str}</b>
                </li>
                <li>
                    notSet<b>{props.notSet}</b>
                </li>
                <li>
                    car<b>{props.car}</b>
                </li>
                <li>
                    colors<b>{props.colors}</b>
                </li>
                <li>
                    obj<b> {props.obj}</b>
                </li>
            </ul>


        </div>
        
    )

}
//It is the main destructuring method
function Child2(props){

const{str, amountInNumber, isOk,notSet, car, colors }= props
return(
        <div>
            <h1>I am the child 2 component</h1>
            <ul>
                <li>              
                  favourite string <b>{str}</b>
                </li>
                <li>              
                  amount <b>{amountInNumber}</b>
                </li>
                <li>              
                  isOk <b>{String(isOk)}</b>{""}
                </li>
                <li>              
                  isOk <b>{isOk}</b>
                </li>
                <li>
                    notSet<b>{notSet}</b>
                </li>
                <li>
                    car Model <b>{car.model}</b>
                </li>
                <li>
                    manufacturer <b>{car["manufacturer"]}</b>
                </li>
                <li>
                    engine<b>{car.engine.cc}</b>
                </li>
                <li>
                    color <b>{colors [0]}</b>
                </li>
                <li>
                    color <b>{colors [1]}</b>
                </li>
                <li>
                    color <b>{colors [2]}</b>
                </li>
            </ul>


        </div>
        
    )

}

//direct destructuring=>destructured directly in the argument section

function Child3({str, amountInNumber, isOk,notSet }){


return(
        <div>
            <h1>I am the child 3 component</h1>
            <ul>
                <li>              
                  favourite string <b>{str}</b>
                </li>
                <li>              
                  amount <b>{amountInNumber}</b>
                </li>
                <li>              
                  isOk <b>{String(isOk)}</b>{""}
                </li>
                <li>              
                  isOk <b>{isOk}</b>
                </li>
                <li>
                    notSet<b>{notSet}</b>
                </li>
            </ul>


        </div>
        
    )

}
export default Parent