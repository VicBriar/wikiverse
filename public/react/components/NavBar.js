import React from "react";
import { HomeButton,PostButton, Search } from "./MiniComponents";

export function NavBar({handleHomeClick,handleNewPostClick,handleSearchClick}) {
return (<nav id="navBar">
        <HomeButton handleHomeClick={handleHomeClick} className="navButtn navItem"/>
        <PostButton handleNewPostClick={handleNewPostClick} className="navButtn navItem" />
        <Search handleSearchClick={handleSearchClick} />
</nav>);
}