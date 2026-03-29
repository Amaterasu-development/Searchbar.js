# Searchbar.js, a front-end library for search input
Welcome everyone ! I created this library for one thing : take research feature easy in websites
## Install
Now, you can't access to the link because I didn't published on NPM and UNPKG so you cannot use it. (I'm sorry... ^_^)
## Usage
````javascript
let elementsForSearch = [
            {textElement: "Amazon", link: "https://www.amazon.com"},
            {textElement: "Microsoft", link: "https://www.microsoft.com", isLinkExternal: true},
            {textElement: "M'n's", link: "https://www.mms.com", isLinkExternal: true}
        ]
setupSearchBar(elementsForSearch, "Sorry, no content found here")
````
``elementsForSearch`` : The Array for the elements

``textElement`` : The text for the output

``link`` : the href source

``isExternalLink`` : if the link must be opened in a new tab
