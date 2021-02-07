fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then(res => res.json())
    .then(data=> displayMeals(data));  


    const displayMeals = meals=>{

        const ul = document.getElementById('meal');

        for (let i = 0; i < meals.length; i ++) {
            const meals = meals[i];

            const li = document.createElement('li');
            li.innerText = meals.name;
            ul.appendChild(li);
            
        }

    }
