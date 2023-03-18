import React from 'react';
import { Page } from './Page';

export const PagesList = ({pages,handleClick}) => {
	return <>
		{
			pages.map((page, idx) => {
				return <Page page={page} handleClick={handleClick} key={idx} />
			})
		}
	</>
} 
