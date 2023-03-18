import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';
import {Article} from './Article';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {
//STATE!----------------------
	const viewBaseState = {
		page: "home",
		pages: [],
		slug: null,
		article: null
	};
	const [view, setView] = useState(viewBaseState)
//-----------------------------
////~~~~~FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	//fetching data for pages
	async function fetchPages(){
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setView({...viewBaseState, page: "home", pages: pagesData});
		} catch (err) {
			console.log("Oh no an error! ", err);
		}
	}

	async function handlePageClick(slug) {
		try{
			response = await fetch(`${apiURL}/wiki/${slug}`);
			const articleData = await response.json();
			
			setView({
				...view,
				page: "article",
				slug: slug,
				article: articleData
			})
			console.log("page was clicked!, view was; ", view);

		}catch(err){
			console.log("Oh no an error! ", err);
		}
	}

	function handleHomeClick() {
		fetchPages();
		console.log("home was clicked!")
	}
////~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//loading pages on first page load/refresh
	useEffect(() => {
		fetchPages();
	}, []);

//loader selectively decides which pages to load based on the view state.
	function loader () {
		switch(view.page){
			//home page
			case 'home':
			console.log("home");
				return (<>
				<h2>An interesting 📚</h2>
				<PagesList pages={view.pages} handleClick={handlePageClick} />
				</>);
			//article page
			case 'article':
			console.log("article");
			return (<Article view={view} handleHomeClick={handleHomeClick} />);
			//posting page
			case 'post':
			return;

		}
	}
	return (
		<main>	
      <h1>WikiVerse</h1>
	  {loader()}
		</main>
	)
}