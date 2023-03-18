
class Country {
    constructor(id, country, destination, airport, hours, currency, flight, budget) {
        this.id = id
        this.country = country
        this.destination = destination
        this.airport = airport
        this.hours = hours
        this.currency = currency
        this.flight = flight
        this.hours = hours
        this.budget = budget
    }
}

const countries = []

countries.push(
    new Country(1, 'Argentina', 'Buenos Aires', 'Ministro Pistarini International Airport', 7, ' Argentine Pesos', 500, 23),
    new Country(2, 'Brazil', 'São Paulo', 'São Paulo-Guarulhos International Airport', 5, 'Brazilian Real', 400, 25),
    new Country(3, 'Chile', 'Santiago de Chile', 'Santiago International Airport', 6, 'Chilean Pesos', 440, 45),
    new Country(4, 'Mexico', 'Cancun', 'Cancún International Airport', 4, 'Mexican pesos', 300, 48),
    new Country(5, 'Dominican Republic', 'Punta Cana', 'Punta Cana International Airport', 3, 'Dominican Pesos', 400, 65)
)

console.log(countries)

const expensive = countries.filter(country=>country.budget>40)

console.log('Expensive countries ',expensive)

const full_name = prompt('Hello, Welcome to our budget travel site. Please enter your name')
alert('Thanks for contacting us, ' + full_name + '. Now, we will start with the process. Please keep in mind that the flight will depart from El Dorado - Bogota.')
let realDestination = parseInt(prompt('Please insert the desired number based on your destination. 1. Buenos Aires, Argentina -- 2. Sao Paulo, Brazil -- 3. Santiago de Chile, Chile -- 4. Cancun, Mexico -- 5. Punta Cana, Dominican Replublic'))

let desiredDestination = false

let country

while (desiredDestination === false) {
    country = countries.find((country => country.id === realDestination))
    if (!country) {
        realDestination = parseInt(
            prompt(
                'Please insert a valid destination number based on the previous list: 1. Buenos Aires, Argentina -- 2. Sao Paulo, Brazil -- 3. Santiago de Chile, Chile -- 4. Cancun, Mexico -- 5. Punta Cana, Dominican Replublic'
            ))
    } else {
        desiredDestination = true
    }
}

console.log(country)
console.log(country.destination)

alert ('Perfect, You have selected ' + country.country + '. You will be traveling to ' + country.destination + '.')


const travelers = parseInt(prompt('Now, Please let us know how many people (Above 2 years old) will be traveling: '))
alert ('Perfect. There will be ' + travelers + ' of you traveling to ' + country.destination + ', ' + country.country +'.')

class Season {
    constructor(id,called,value) {
        this.id = id
        this.called = called
        this.value = value
    }
}

const seasons = []

seasons.push (
    new Season(1,'Low Season', 1),
    new Season(2,'Shoulder Season', 1.5),
    new Season(3,'High Season', 2)
)


let realSeason = parseInt(prompt('As you may know, the budget might change depending on the season of the year. Please insert the season you will be traveling to ' +  country.destination + ': 1. Low Season -- 2. Shoulder Season -- 3. High Season.'))


let desiredSeason = false

let season

while (desiredSeason === false) {
    season = seasons.find((season => season.id === realSeason))
    if (!season) {
        realSeason = parseInt(
                        prompt(
                            'Please insert a valid season number based on the previous list: 1. Low Season -- 2. Shoulder Season -- 3. High Season.'
                        ))
    } else {
        desiredSeason = true
    }
}

console.log(Season)

const days = +prompt('Perfect. Now that we know that you will be traveling in ' + season.called + '. Please let us know how many days you will stay in ' + country.destination + ':')

console.log(days, season.called)

function sum(a, b) {
    return a + b
}
function rest(a, b) {
    return a - b
}
function mult(a, b) {
    return a * b
}
function div(a, b) {
    return a / b
}

function calcu(n1, n2, fn) {
    const result = fn(n1, n2)
    return result
}

// Uso de Function 

const finalFlight = calcu(calcu(country.flight,season.value,mult),travelers,mult)
const finalBudget = calcu(calcu(calcu(country.budget,season.value,mult),travelers,mult),days,mult)
const finalMoney = calcu(finalBudget,finalFlight,sum)

console.log(finalBudget, finalFlight, finalMoney)

alert(`Thank you for choosing us, ${full_name}. Next, you will find the final budget review.

To stay ${days} days on ${country.destination}, ${country.country} during ${season.called} for ${travelers} travelers, we recommend a budget of USD ${finalBudget} to cover accommodation, food, and transportation expenses. Also, we estimate that you may need USD ${finalFlight} approx for flight tickets. The total budget is USD ${finalMoney}.

Moreover, here is some information to have in mind for your trip to ${country.destination}, ${country.country}: The estimated time of flight is ${country.hours} hours, you will arrive to ${country.airport} and the local currency will be ${country.currency}.`)

