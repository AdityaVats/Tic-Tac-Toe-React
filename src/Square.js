import React, { Component } from 'react';


function Square(props){
 
  

    return (
        <button className="square" onClick={() => props.onClick({value: 'X'}) } >
        {props.value}
        </button>
        
    );

  
}
export default Square;