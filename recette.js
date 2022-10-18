
(async function () {

    const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
    // contient le résultat de l'appel d'api (donc les recettes de cuisine)
    const mealsResponse = await response.json();
    
    // const div = document.createElement('div')
    // contient une référence vers la div #root 
    const root = document.querySelector('#root')

    // pour chaque recette de cusine récupérée
    mealsResponse.meals.forEach(meal => {
        // je créé une div qui contient un titre, une image et du texte
        const container = document.createElement("div")
        
        // tu "remplies" ton titre, image etc avec les données de la recette
        const titre = document.createElement('h2');
            titre.append(meal.strMeal);
        const image = document.createElement('img');
            image.src = meal.strMealThumb;
        
        const description = document.createElement('p')
            description.append(meal.strInstructions
            );

        // tu insères, dans ta variable référence vers la div #root, ta div créée avec toutes les infos de la rec (root.append)

        root.append(container)
        container.append(image,titre,);

        container.classList.add('container');

        console.log(meal);
    });
    
})();

    /*
    On sélectionne la class form de notre formulaire afin d'écouter l'évènement à la soumission du boutton.
    À travers "e.preventDefault" , on retire l'evenenement par défaut qui est de recharger la page au click du boutton.
    Puis, on déclare une constante récuperer la valeur du champs input à travers évèneemnt.target et on fais une redirection vers la page qu'on souhaite afficher le résultat.
    */
  document.querySelector('.form').addEventListener("submit", (e) => {
    e.preventDefault();
   const searchValue = e.target[0].value;
   location.href = 'http://127.0.0.1:5500/search-result.html?search='+searchValue;
  })



// au click sur submit, récupère la valeur de l'input
// redirige en JS vers le fichier search-results.html en ajoutant dans l'url la valeur de l'input
// une fois sur la page search-results.html, récupérer la valeur mise dans l'url (la valeur de l'input) et faire une requête fetch vers l'api pour trouver les recettes reliées à la valeur de recherche




