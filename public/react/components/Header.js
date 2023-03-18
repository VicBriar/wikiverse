import React from "react";
import { NavBar } from "./NavBar";

export function Header({handleHomeClick,handleNewPostClick,handleSearchClick}) {
return (<div className="header">
    <h1 className="title">WikiVerse</h1>
    <NavBar handleHomeClick={handleHomeClick} handleNewPostClick={handleNewPostClick} handleSearchClick={handleSearchClick} />
</div>);
};