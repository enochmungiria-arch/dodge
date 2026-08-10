import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//when importing  default export you can give it anyname and then use the path it follows
//import <anynamefor the default export> from <path-->must begin with a ./before the relative path
//when you import without using the ./ then js automatically assumes that the export is in the node.modules automatically



import GitHubProject from "./GitHubProject/index.jsx"
//components have the following rules
//It must start with a capital letter
//it is anormal function
//returns only a react fragment or a single html element
createRoot(document.getElementById("root")).render(

  <StrictMode>
   <GitHubProject/>
  </StrictMode>
);
//How to render components-->rendering is displaying components
//self closing & opening and closing tags
//opening and closing components are used when expecting the component to have children
//you can decide to only render the parent component leaving out the children components
    