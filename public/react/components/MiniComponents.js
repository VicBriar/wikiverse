import React from "react";

export function HomeButton({handleHomeClick}){
   return (<button className="navButton" onClick={handleHomeClick}>Home</button>);
};

export function ClearButton({handleClearClick}){
   return(<button className="editButton" onClick={handleClearClick} formNoValidate >Clear</button>);
}

export function DeleteButton({handleDeleteClick}){
   return(<button className="editbutton" onClick={handleDeleteClick}>Delete Article</button>);
}