// https://www.themealdb.com/api/json/v1/1/search.php?s=tomato
const result = document.getElementById("result");
// Pointer le form
const form = document.querySelector('form');
let meals = [];

// Se connecter à l'API et afficher les recettes
async function fetchMeals() {
    await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
        .then((res) => res.json())
        .then((data) => (meals = data.meals));
    
    console.log(meals);
}

function mealsDisplay() {
    // Je ne veux afficher que 12 plats max
    meals.length = 12;
    
    result.innerHTML = meals.map(
        (meal) => 
            `
            <li class="card">
                <h2>${meal.strMeal}</h2>
                <p>${meal.strArea}</p>
                <img src=${meal.strMealThumb} alt="photo ${meal.strMeal}">
                <ul></ul>
            </li>
            `
    )
        .join("");
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetchMeals().then(() => mealsDisplay());
});


