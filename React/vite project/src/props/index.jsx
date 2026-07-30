function Parent(){
    const str="hello World"
    const amount=2000
    const isOk=true
    const notSet=null;

    return(
        <div>
            <h1>I am the parent component</h1>
            <Child1 str={str} amountInNumber={amount} isOk={isOk} notSet={notSet}/>
            

        </div>
    
    )
}
function Child1(props){
    console.log(props)
    return(
        <div>
            <h1>I am the child component</h1>
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
            </ul>


        </div>
        
    )

}
export default Parent