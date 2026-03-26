let elementsForSearch = ["Apple", "Microsoft", "Facebook", "Google", "Amazon"]

let searchbars = document.querySelectorAll("[data-filter='search']")

let output = document.querySelectorAll("ul.results")

function setupSearchBar(searchelements) {

}

searchbars.forEach((searchInput) => {
    searchInput.addEventListener("keyup", () => {
        
        let searchValue = searchInput.value.toLowerCase()
        
        //Clear content
        output.forEach(searchbar => {
            searchbar.innerHTML = ""
        })
        
        if (searchValue.trim() == "") return;

        let filter = elementsForSearch.filter(element => element.toLowerCase().includes(searchValue));

        if (filter == "") {
            output.forEach(searchbar => {
                searchbar.innerHTML = "<p>Aucun contenu trouvé"
            })
        }

        filter.forEach(resultOfSearch => {
            output.forEach(placeOutput => {
                let results = document.createElement("li")
                results.textContent = resultOfSearch
                placeOutput.appendChild(results)
            })
        })
    })
})