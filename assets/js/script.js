// Variables

const yourKmEl = document.getElementById("your-km");
const yourAgeEl = document.getElementById("your-age");
const submitEl = document.getElementById("submit");
const discountEl = document.getElementById("discount");
const ageEl = document.getElementById("age");
const kmEl = document.getElementById("km");
const ticketPriceEl = document.getElementById("ticket-price");

const pricePerKm = 0.21;
const value = "€";
const childAge = 18;
const seniorAge = 65;
const percentageDiscountChild = 20;
const percentageDiscountSenior = 40;

let ticketPrice;
let ticketPriceFinal;

// Functions

function priceDiscounted(price, percentageDiscount) {
    return price - (price / 100) * percentageDiscount;
}

// Submit event

submitEl.addEventListener('click', function() {
    // Get value from input
    const yourKm = yourKmEl.value;
    const yourAge = yourAgeEl.value;

    // Print age
    if(yourAge == 0) {
        ageEl.innerHTML = '0 anni'; 
    } else if (yourAge == 1) {
        ageEl.innerHTML = '1 anno'; 
    } else {
        ageEl.innerHTML = yourAge + ' anni'; 
    }

    // Print km
    if(yourKm == 0) {
        kmEl.innerHTML = '0 km';
    } else {
        kmEl.innerHTML = yourKm + ' km'; 
    }

    // Calculate ticket price
    ticketPrice = yourKm * pricePerKm;

    // Calculate ticket price final and print discount
    if (yourAge < childAge) {
        ticketPriceFinal = priceDiscounted(ticketPrice, percentageDiscountChild);
        discountEl.innerHTML = 'Sconto ' + percentageDiscountChild + '% under ' + childAge;
    } else if (yourAge > seniorAge) {
        ticketPriceFinal = priceDiscounted(ticketPrice, percentageDiscountSenior);
        discountEl.innerHTML = 'Sconto ' + percentageDiscountSenior + '% over ' + seniorAge;
    } else {
        ticketPriceFinal = ticketPrice;
        discountEl.innerHTML = 'Biglietto standard';
    }

    // Print price final
    ticketPriceEl.innerHTML = ticketPriceFinal.toFixed(2) + value;
});




