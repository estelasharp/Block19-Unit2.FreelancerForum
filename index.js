//Begin state variable declaration

//DEFINE MY STATE VARIABLES
//Make array and include objects inside
const freelancers = [
    {name: "Alice",
    occupation: "Writer",
    startingPrice: 30
    },
    {name: "Bob",
    occupation: "Teacher",
    startingPrice: 50
    },
    {name: "Carol",
    occupation: "Programmer",
    startingPrice: 70
    }
]

const randomNames = ["Zaida", "Darlena", "Henry", "Kenny"]
const randomOccupations = ["Dentist", "Bartender", "Engineer", "Nail Tech"]
const randomPrices = [100, 50, 90, 35]

//END STATE VARIABLES


//Set up interval - going to make sure it is already happening when the page runs
//after review, define interval
const addNew = setInterval(addRandomFreelancer, 1000)

//Calling render function
render()

//Render function - update to DOM to reflect the current state of the program
function render() {
    //price container was not shpwing up due to it not being defined, make const container for price
    const priceContainer = document.querySelector("#price")
// //set up variable for container
    const freelancerListContainer = document.querySelector("#freelancers")
// //create elements that we want to add
    const freelancerElements = freelancers.map((freelancer) => {
//generate list from the objects
        const element = document.createElement("li")
// element.classList.add(freelancer.name, freelancer.occupation, freelancer.startingPrice)
// upon review of workshop this was not ideal to create this code and was following the guided practice
        element.textContent = `${freelancer.name}, ${freelancer.occupation}, ${freelancer.startingPrice}`
        return element
    
    })
// add elements to a container
        freelancerListContainer.replaceChildren(...freelancerElements)
        priceContainer.replaceChildren(`The average freelancer cost is $${calculateAveragePrice()}`)   
        //code not working, return is saying container undefined
        // averagePriceContainer.replaceChildren(calculateAveragePrice()) code not working returning as undefined
        //after quadruple checking, defined box, added to html, and finally working
        //after review, added the "the average freelancer cost is"
}

//make array of objects that we can cycle randomly, random person, random occupation, random price

function addRandomFreelancer() {
    const name = randomNames[Math.floor(Math.random() * randomNames.length)]
    const occupation = randomOccupations[Math.floor(Math.random() * randomOccupations.length)]
    const startingPrice = randomPrices[Math.floor(Math.random() * randomPrices.length)]

    freelancers.push({name, occupation, startingPrice})
//calling render function to update DOM
    render()
//add interval above to update DOM for random selection
    //limit amount of randomizations
    //didnt understand 

//add limitations to randomizations
    if (freelancers.length >= 10) {
    clearInterval(addNew)
    }
}

//calculate the average starting price of your freelancers' array
function calculateAveragePrice() {
    // let totalPrice = 0;
    // for(var i = 0; i < freelancers.length; i++) {
    //     totalPrice += freelancers.startingPrice[i];
    // }
    // let averagePrice = totalPrice/freelancers.length
    // return averagePrice
    // code was not right, average was not appearing, after review, added new code below and figured it out
    let totalPrice = 0
    freelancers.forEach((freelancer) => {
        totalPrice += freelancer.startingPrice
    })
    let averagePrice = totalPrice/freelancers.length
    return averagePrice
    //call function in the render

}



