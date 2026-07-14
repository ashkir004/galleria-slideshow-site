# Galleria Slideshow

## What am I most proud of?

- I am proud that I used the routing capability of sveltekit and anchor links, to implement navigation of the artwork pages.

## What part fought back the most?

- I still have errors on anchor links. 

`Unexpected href link without resolve().`

## If another developer cloned my repository tomorrow... What I hope they notice is?

- Use of svelte `Context` to give every artwork page access to a shared navigation state.

- Use of `+page.server.ts` to load necessary data item just for the respective artwork page.

- Use of URLs to model navigation.

## If I could rebuild the project tomorrow... What would I redesign?

- Maybe use absolute positioning together with CSS grid for layout, instead of using `translate` so it shows consistent layout across responsive sizes. 

## What did this project teach me that my previous Frontend Mentor project didn't?

- Using `Columns` css feature to build the masonry layout.

- Using `min-h-[90vh]` and `overflow-y-auto` to fit lightbox in screen and provide scrolling capability respectively.

## What assumption did this project change for me?

- Use the browser and framework first, then reach for libraries only when the requirements justify them. CSS `Columns` may not be a perfect masonry algorithm, but it meets product's needs and avoids complexity.


### Links

- Live Site: [Galleria Art Slideshow - Netlify](https://galleria-art-slideshow.netlify.app/)
