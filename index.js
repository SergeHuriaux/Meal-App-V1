// https://www.themealdb.com/api/json/v1/1/search.php?s=tomato

let meals = [];

// Se connecter à l'API et afficher les recettes
async function fetchMeals() {
    await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=duck")
        .then((res) => res.json())
        .then((data) => (meals = data.meals));
    
    console.log(meals);
}

fetchMeals();