// https://www.themealdb.com/api/json/v1/1/search.php?s=tomato
const result = document.getElementById("result");
// Pointer le form
const form = document.querySelector('form');
// Récupérer ce qui est entrer dans l'input du form en poitant celui-ci
const input = document.querySelector("input");
let meals = [];

// Se connecter à l'API et afficher les recettes
async function fetchMeals(search) {
     await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
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

input.addEventListener("input", (e) => {
    //fetchMeals(e.target.value).then(() => mealsDisplay()); //(va permettre d'afficher en temps réel quand user tape champ recherche)
    fetchMeals(e.target.value);
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    mealsDisplay();
});


