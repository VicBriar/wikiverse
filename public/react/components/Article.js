import React, {useState} from "react";
import { DeleteButton, HomeButton } from "./MiniComponents";

export function Article({view,handleHomeClick,handleDeleteClick}) {
console.log("from article, view is", view)
let article = view.article;

    return(
    <div>
        <header>
          <h2>{article.title}</h2>
          <h3>{article.author.name}</h3>
          <h3>{new Date(article.createdAt).toString()}</h3>
          <p>{article.tags.map((tagObj,index)=> article.tags.length-1 <= index ?  "#" + tagObj.name : "#" + tagObj.name + ", ")}</p>
        </header>
        <article>
          <p>{article.content}</p>
        </article>
        <DeleteButton id="articleDeleteButton" handleDeleteClick={handleDeleteClick}/>
        <HomeButton id="articleHomeButton" handleHomeClick={handleHomeClick}/>
    </div>);
}