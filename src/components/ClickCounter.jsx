import React from "react";

export const ClickCounter = () => {
     
    // const [count, setCount] = React.useState(0);
    
    return(
        <div className="section" data-test-id="counter-wrapper">
            <h1 data-test-id="count-display">0</h1>
            <button data-test-id="count-button">Click</button>
        </div> 
    )
} 