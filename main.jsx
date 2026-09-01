import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


function MyComponent(){
  return null;//valid jsc
}

function MyComponent2(){
  <>
<div>
  <h1>I am the best developer in the world</h1>
</div>
</>
}

function MyComponent3(){
  <>
  <div>
    <h2>Naeku wins Topscorebrand</h2>
    </div>
  </>  
}
function ParentComponent(){
  <h1>This is my Parent component</h1>
<MyComponent/>
<MyComponent2/>
<MyComponent3/>
}





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>My first react app</h1>
    <ParentComponent/>
  </StrictMode>,
);
