
document.addEventListener("DOMContentLoaded", () => {
    fetch("data/categories.json")
        .then(response => response.json())
        .then(data => {
            const categoriesContainer = document.getElementById("categories-container");
            data.categories.forEach(category => {
                const card = document.createElement("div");
                card.classList.add("category-card");
                card.innerHTML = `
                    <img src="${category.image}" alt="${category.name}">
                    <h2>${category.name}</h2>
                    <a href="pages/${category.id}.html">צפייה במתכונים</a>
                `;
                categoriesContainer.appendChild(card);
            });
        });
});
