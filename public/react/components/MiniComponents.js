import React from "react";

export function HomeButton({handleHomeClick, className}){
   return (<button className={className}onClick={handleHomeClick}>Home</button>);
};

export function ClearButton({handleClearClick}){
   return(<button onClick={handleClearClick} formNoValidate >Clear</button>);
}

export function DeleteButton({handleDeleteClick}){
   return(<button onClick={handleDeleteClick}>Delete Article</button>);
}

export function PostButton({handleNewPostClick, className}){
   return(
      <button className={className} onClick={handleNewPostClick}>NewPost</button>
   );
}

export function Search({handleSearchClick}){
   return(
      <form className="navItem" onSubmit={handleSearchClick} >
         <label className="hide-element" htmlFor="search">SearchBar:</label>
         <input className="srchItem" type="text" name="search" ></input>
         <input className="srchItem" id="searchButtn"  type="submit"></input>
      </form>
   );
}