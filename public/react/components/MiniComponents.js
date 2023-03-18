import React from "react";

export function HomeButton({handleHomeClick}){
   return (<button className="HomeButton" onClick={handleHomeClick}>Home</button>);
};

export function ClearButton({handleClearClick}){
   return(<button className="HomeButton" onClick={handleClearClick} formNoValidate >Clear</button>);
}