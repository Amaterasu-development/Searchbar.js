let searchbars = document.querySelectorAll("[data-filter='search']")
let output = document.querySelectorAll("ul.results")

function setupSearchBar(searchElements, errorMessage) {
    searchbars.forEach((searchInput) => {
        searchInput.addEventListener("keyup", () => {
            let searchContent = searchInput.value
            let searchValue = searchContent.toLowerCase();
            
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
                    link.textContent = resultOfSearch.textElement + " "; // Affiche la propriété textElement

                    if(resultOfSearch.isLinkExternal == true) {
                        link.target = "_blank"
                        let icon = document.createElement("i")
                        icon.className = "bi-box-arrow-up-right"
                        link.appendChild(icon)
                    }
                    link.href = resultOfSearch.link
                    results.appendChild(link)
                    placeOutput.appendChild(results);
                });
            });
        });
    });
}