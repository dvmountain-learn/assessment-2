///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE
let pizza = {
    name: 'Chicago Deep-Dish Pizza',
    price: 15,
    category: 'Appetizer',
    popularity: 343,
    rating: 2003,
    tags: ['pepperoni', 'cheese', 'mushroom', 'gluten-free', 'kids', 'girls', 'boys']
}


//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

//CODE HERE
console.log('---------- Log by Popularity ---------')
console.log(pizza.popularity)

/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE
console.log('---------- Log by Tags ---------')
console.log(pizza.tags[1])

/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE
let {price} = pizza
console.log('---------- Destructure by Price ---------')
console.log(price)
/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

//CODE HERE
let {category} = pizza
console.log('---------- Destructure Category ---------')
console.log(category)

//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE
let foodArr = [
    {
        name: 'Chicago Deep-Dish Pizza',
        price: 15,
        category: 'Appetizer',
        popularity: 43,
        rating: 103,
        tags: ['capsicum', 'girls', 'boys']
    },
    {
        name: 'Margherita Pizza',
        price: 9.99,
        category: 'Entree',
        popularity: 153,
        rating: 730,
        tags: ['gluten-free', 'kids']
    },
    {
        name: 'Sicilian Pizza',
        price: 12.99,
        category: 'Appetizer',
        popularity: 300,
        rating: 272,
        tags: ['garlic', 'mushroom']
    },
    {
        name: 'Hawaiian Pizza',
        price: 11.99,
        category: 'Entree',
        popularity: 377,
        rating: 900,
        tags: ['onion', 'potato']
    },
    {
        name: 'New York Style Pizza',
        price: 7.99,
        category: 'Entree',
        popularity: 749,
        rating: 287,
        tags: ['pepperoni', 'cheese']
    },
]


//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE
let filterFoods = foodArr.filter((foodObj) => {
    return foodObj.tags.includes('mushroom')
})
console.log('---------- Filter Foods By Tags ---------')
console.log(filterFoods)

//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE
function filterByProperty(property, number, type) {
    let filteredArr = []
    if (property === 'rating') {
        if (type === 'above') {
            filteredArr = foodArr.filter((obj) => {
                return obj.rating > number
            })
        } else if (type === 'below') {
            filteredArr = foodArr.filter((obj) => {
                return obj.rating < number
            })
        }
    } else if (property === 'popularity') {
        if (type === 'above') {
            filteredArr = foodArr.filter((obj) => {
                return obj.popularity > number
            })
        } else if (type === 'below') {
            filteredArr = foodArr.filter((obj) => {
                return obj.popularity < number
            })
        }
    } else if (property === 'price') {
        if (type === 'above') {
            filteredArr = foodArr.filter((obj) => {
                return obj.price > number
            })
        } else if (type === 'below') {
            filteredArr = foodArr.filter((obj) => {
                return obj.price < number
            })
        }
    } else {
        console.log('You are provide wrong property, Could you check property again, please?')
        return null
    }
    return filteredArr
}

/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE
let filterByRating = filterByProperty('rating', 500, 'above')
console.log('---------- Filter By Rating ---------')
console.log(filterByRating)
let filterByPopularity = filterByProperty('popularity', 200, 'below')
console.log('---------- Filter By Popularity ---------')
console.log(filterByPopularity)
let filterByPrice = filterByProperty('price', 10, 'below')
console.log('---------- Filter By Price ---------')
console.log(filterByPrice)