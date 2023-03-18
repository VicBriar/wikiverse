import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';
import {Article} from './Article';
import {Post} from './Post';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {
//STATE!----------------------
	const viewBaseState = {
		page: "home",
		pages: [],
		slug: null,
		article: null,
		articleDraft: {
			title: "",
			content: "",
			name: "",
			email: "",
			tags: "",
		}
	};
	const [view, setView] = useState(viewBaseState)
//-----------------------------

////~~~~~FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	//fetching data for pages
	async function fetchAndSetPages(){
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setView({...viewBaseState, pages: pagesData, articleDraft: {...view.articleDraft}});
		} catch (err) {
			console.log("Oh no an error! ", err);
		}
	}

	async function handlePageClick(slug) {
		try{
			response = await fetch(`${apiURL}/wiki/${slug}`);
			const articleData = await response.json();
			
			setView({
				...viewBaseState,
				page: "article",
				slug: slug,
				article: articleData
			})
			console.log("page was clicked!");

		}catch(err){
			console.log("Oh no an error! ", err);
		}
	}
	async function handleSubmit(event,article){
		event.preventDefault();

	}

	function handleHomeClick() {
		fetchAndSetPages();
		console.log("home was clicked!")
	}
	function handleNewPostClick() {
		setView({...viewBaseState, page: "post", pages: null, articleDraft: {...view.articleDraft}})
		console.log("write a post was clicked!")
	}
////~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//loading pages on first page load/refresh
	useEffect(() => {
		fetchAndSetPages();
	}, []);

//loader selectively decides which pages to load based on the view state.
	function loader () {
		switch(view.page){
			//home page
			case 'home':
			console.log("home, view is: ",view);
				return (<>
				<h2>An interesting 📚</h2>
				<PagesList pages={view.pages} handleClick={handlePageClick} />
				<button onClick={handleNewPostClick}>Write your own post</button>
				</>);
			//article page
			case 'article':
			return (<Article view={view} handleHomeClick={handleHomeClick} />);
			//posting page
			case 'post':
			return <Post view={view} setView={setView} handleSubmit={handleSubmit} handleHomeClick={handleHomeClick} />;

		}
	}
	return (
		<main>	
      <h1>WikiVerse</h1>
	  {loader()}
		</main>
	)
}