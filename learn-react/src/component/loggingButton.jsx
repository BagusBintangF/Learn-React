import React from "react";

class LoggingButton extends React.Component{
    handleClick(){
        console.log('this is :'.this);
    }

    render(){
        return(
            <button onClick={() => this.handleClick()}> click me </button>
        );
    }
}

export default LoggingButton;