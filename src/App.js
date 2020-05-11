import React from 'react';
import logo from './logo.svg';
import './App.css';
import FbComponent from'./component/FbComponent'
import fbobjectone from'./component/fbobjectone'


function App(props) {
 
let fbMain = fbobjectone.map(function(n,index){
    return <FbComponent
    key={index}
    vivek={n}

><h2>vggyh</h2></FbComponent>
  })
 
 
  return (
    <div>
      
    {fbMain}
    
    
    </div>
  );
}

export default App;
