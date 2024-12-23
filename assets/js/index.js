
document.addEventListener("DOMContentLoaded", () => {
    fetch("categories.json")
        .then(response => response.json())
        .then(data => {
            const categoriesContainer = document.getElementById("categories-container");
            data.categories.forEach(category => {
                const card = document.createElement("div");
                card.classList.add("category-card");
                card.innerHTML = `
                    <h2>${category.name}</h2>
                    <a href="${category.path}/index.html">למתכונים</a>
                `;
                categoriesContainer.appendChild(card);
            });
        });
});
