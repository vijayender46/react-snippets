import React, { useState } from "react";
import reactDom from "react-dom";

export const ClickCounter = () => {
    let styles = {
        color :'green',
    }
     const [count, setCount] = React.useState(0);
    
    return(
        <div className="section" data-test-id="counter-wrapper">
            <h1 data-test-id="count-display">Counter is at &nbsp;
                <span style={styles} data-test-id="count">{count}</span>
            </h1>
            <button
            onClick={() => setCount(count + 1)}
            data-test-id="count-button">Click</button>
        </div> 
    )
} 