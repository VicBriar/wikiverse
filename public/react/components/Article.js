import React, {useState} from "react";

export function Article({view,handleHomeClick}) {
console.log("from article, view is", view)
let article = view.article;
console.log("tags are ", article.tags)

    return(
    <main>
        <div>
          <h2>{article.title}</h2>
          <h3>{article.author.name}</h3>
          <h3>{new Date(article.createdAt).toString()}</h3>
          <p>{article.tags.map((tagObj,index)=> article.tags.length-1 <= index ?  "#" + tagObj.name : "#" + tagObj.name + ", ")}</p>
        </div>
        <article>
          <p>{article.content}</p>
        </article>
        <button id="home" onClick={handleHomeClick}>Home</button>
    </main>);
}