import React from 'react';

export const Page = ({page,handleClick}) => {
  return <>
    <h3 onClick={() => handleClick(page.slug)}>
      {page.title}
    </h3>
  </>
} 
	