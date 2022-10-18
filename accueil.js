(async function () {

    const response1 = await fetch("https://www.themealdb.com/api/json/v1/1/random.php?s=");
    const response2 = await fetch("https://www.themealdb.com/api/json/v1/1/random.php?s=");
    const response3 = await fetch("https://www.themealdb.com/api/json/v1/1/random.php?s=");
    
    const root = document.querySelector('#root')

    const mealsResponse1 = await response1.json();
     

    mealsResponse1.meals.forEach(meal => {
        const container = document.createElement('div')

        const titre = document.createElement('h2');
                 titre.append(meal.strMeal);
                const image = document.createElement('img');
                    image.src = meal.strMealThumb;
                
                const description = document.createElement('p')
                    description.append(meal.strInstructions
                    );

        root.append(container)
        container.append(image,titre,description);
    
        container.classList.add('container');


        console.log(meal);
        
    });


    const mealsResponse2 = await response2.json();

    mealsResponse2.meals.forEach(meal => {
        const container = document.createElement('div')

        const titre = document.createElement('h2');
                 titre.append(meal.strMeal);
                const image = document.createElement('img');
                    image.src = meal.strMealThumb;
                
                const description = document.createElement('p')
                    description.append(meal.strInstructions
                    );
    
                    
                    
        root.append(container)
        container.append(image,titre,description);
    
        container.classList.add('container');


        console.log(meal);
        
    });


    const mealsResponse3 = await response3.json();
    
    mealsResponse3.meals.forEach(meal => {
        const container = document.createElement('div')

        const titre = document.createElement('h2');
                 titre.append(meal.strMeal);
                const image = document.createElement('img');
                    image.src = meal.strMealThumb;
                
                const description = document.createElement('p')
                    description.append(meal.strInstructions
                    );
    
                    
                    
        root.append(container)
        container.append(image,titre,description);
    
        container.classList.add('container');


        console.log(meal);
        
    });



    
})();



$('.toggle').on('click', function() {
    $('.menu').toggleClass('expanded');  
    $('span').toggleClass('hidden');  
    $('.container , .toggle').toggleClass('close');  
  });