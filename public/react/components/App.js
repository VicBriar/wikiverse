import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';
import {Article} from './Article';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {
//STATE!----------------------
	const [pages, setPages] = useState([]);
	const [view, setView] = useState({
		page: "home",
		slug: null,
		article: null
	})
//-----------------------------
////~~~~~FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	//fetching data for pages
	async function fetchPages(){
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setPages(pagesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	async function handlePageClick(slug) {
		try{
			response = await fetch(`${apiURL}/wiki/${slug}`);
			const articleData = await response.json();
			
			setView({
				page: "article",
				slug: slug,
				article: articleData
			})
			console.log("view was; ", view)

		}catch(err){
			console.log("Oh no an error! ", err)
		}
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
			console.log("home")
				return (<>
				<h2>An interesting 📚</h2>
				<PagesList pages={pages} handleClick={handlePageClick} />
				</>);
			//article page
			case 'article':
			console.log("article")
			return (<Article view={view} />);
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