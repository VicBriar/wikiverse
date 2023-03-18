import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {
//STATE!----------------------
	const [pages, setPages] = useState([]);
	const [view, setView] = useState({
		page: "home",
		url: null
	})
//-----------------------------
	async function fetchPages(){
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setPages(pagesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchPages();
	}, []);

	function loader () {
		switch(view.page){

			case 'home':
			console.log("home")
				return (<>
				<h2>An interesting 📚</h2>
				<PagesList pages={pages} />
				</>);
			
			case 'article':
			console.log("article")
			return (<>

			</>);
			
			case 'post':
				//stuff
			break;

		}
	}
	return (
		<main>	
      <h1>WikiVerse</h1>
	  {loader()}
		</main>
	)
}