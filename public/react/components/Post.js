import React, {useState} from "react";
import { HomeButton, ClearButton } from "./MiniComponents";


export function Post({view,setView,handleSubmit,handleHomeClick}){
    
    function handleClearClick(evnt){
      evnt.preventDefault()
      setView({
        ...view,
        articleDraft: 
          {title: "",
			    content: "",
			    name: "",
			    email: "",
			    tags: ""}
      })
    }

    console.log('Post, view.articleDraft is', view.articleDraft);

    return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="title">
          <label className="hide-element" for="title"> Article Title: </label>
          <input
            value={view.articleDraft.title}
            onChange={
              (evnt) => setView(
                {...view, articleDraft: 
                  {...view.articleDraft, title: evnt.target.value}
                }
              )
            }
            type="text"
            name="title"
            id="titleInput"
            placeholder="Article Title"
            required
          ></input>
        </div>
        
        
        <div className="details">
          <label className="hide-element" for="name">Your Name: </label>
          <input
            value={view.articleDraft.name}
            onChange={
              (evnt) => setView(
                {...view, articleDraft: 
                  {...view.articleDraft, name: evnt.target.value}
                }
              )
            }
            type="text"
            name="name" id="nameInput"
            placeholder="Author's Name"
            required
          ></input>

          <label className="hide-element"  for="email" minlength="4" maxLength="50">Your Email: </label>
          <input
            value={view.articleDraft.email}
            onChange={
              (evnt) => setView(
                {...view, articleDraft: 
                  {...view.articleDraft, email: evnt.target.value}
                }
              )
            }
            type="email"
            name="email"
            id="nameInput"
            placeholder="Author's email"
            required
          ></input>
        </div>


        <div className="tags">
          <label className="hide-element"  for="tags">Your article's tags: </label>
          <textarea
            value={view.articleDraft.tags}
            onChange={
              (evnt) => setView(
                {...view, articleDraft: 
                  {...view.articleDraft, tags: evnt.target.value}
                }
              )
            }
            name="tags"
            id="tagsInput"
            rows="2" cols="45"
            placeholder="firstTag newtag ect.."
            spellCheck="false"
          ></textarea>
        </div>


        <div className="article">
          <label className="hide-element"  for="content">Type your post here:</label>
          <br></br>
          <textarea
            value={view.articleDraft.content}
            onChange={
              (evnt) => setView(
                {...view, articleDraft: 
                  {...view.articleDraft, content: evnt.target.value}
                }
              )
            }
            name="content"
            minLength="4"
            id="contentInput"
            rows="25" cols="60"
            placeholder="Write something..."
            required
          ></textarea>
        </div>


        <div className="buttonsContainer">
          <input type="submit" value="post article" />
          <ClearButton handleClearClick={handleClearClick} />
        </div>
      </form>
      <HomeButton handleHomeClick={handleHomeClick}/>
      
    </>
    );
};