let searchbars = document.querySelectorAll("[data-filter='search']")
let output = document.querySelectorAll("ul.results")

export function setupSearchBar(searchElements, errorMessage) {
    searchbars.forEach((searchInput) => {
        searchInput.addEventListener("keyup", () => {
            let searchValue = searchInput.value.toLowerCase();

            // Clear content
            output.forEach(searchbar => {
                searchbar.innerHTML = "";
            });

            if (searchValue.trim() === "") return;

            // Filtre les éléments dont textElement contient searchValue
            let filter = searchElements.filter(element =>
                element.textElement.toLowerCase().includes(searchValue)
            );

            // Vérifie si le tableau filtré est vide
            if (filter.length === 0) {
                output.forEach(searchbar => {
                    searchbar.innerHTML = "<p class='errorMessage'>" + errorMessage + "</p>";
                });
            }

            // Affiche les résultats
            filter.forEach(resultOfSearch => {
                output.forEach(placeOutput => {
                    let results = document.createElement("li");
                    let link = document.createElement("a")
                    if(resultOfSearch.isLinkExternal == true) {
                        link.target = "_blank"
                    }
                    link.textContent = resultOfSearch.textElement; // Affiche la propriété textElement
                    link.href = resultOfSearch.link
                    results.appendChild(link)
                    placeOutput.appendChild(results);
                });
            });
        });
    });
}