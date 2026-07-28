import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//components have the following rules
//It must start with a capital letter
//it is anormal function
//returns only a react fragment or a single html element

function MyComponent(){
  return null;//valid jsc
}

function MyComponent2(){
  return(
<div>
  <h1>I am the best developer in the world</h1>
</div>
  )
}

//when adding multiple html elements we use fragments
//<></> tose are fragments and they are added to enclose html elements which are many in number

function ReactFragment(){
  return(
<>
<div>
<h1>This is my second component</h1>

</div>
<div>

</div>

</>

  )
}

function ParentComponent(){
  return(
    <div>
<h1>This is the parent component</h1>
    <MyComponent/>
    <MyComponent2/>
    <ReactFragment/>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  //if not using the react strictmode you can then use the react fragments in its stead.
  //it will also be ised to render the react fragments rather than the react strictmode
  <StrictMode>

    <h1>My first react app</h1>
    
    <ParentComponent></ParentComponent>
    
    </StrictMode>,
);
//How to render components-->rendering is displaying components
//self closing & opening and closing tags
//opening and closing components are used when expecting the component to have children
//you can decide to only render the parent component leaving out the children components
    