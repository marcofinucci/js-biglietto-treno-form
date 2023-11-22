// Variables

const yourKmEl = document.getElementById("your-km");
const yourAgeEl = document.getElementById("your-age");
const submitEl = document.getElementById("submit");
const discountEl = document.getElementById("discount");
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

    // Calculate ticket price
    ticketPrice = yourKm * pricePerKm;

    // Calculate ticket price final
    if (yourAge < childAge) {
        ticketPriceFinal = priceDiscounted(ticketPrice, percentageDiscountChild);
        discountEl.innerHTML = 'Sconto <strong>' + percentageDiscountChild + '%</strong> under ' + childAge;
    } else if (yourAge > seniorAge) {
        ticketPriceFinal = priceDiscounted(ticketPrice, percentageDiscountSenior);
        discountEl.innerHTML = 'Sconto <strong>' + percentageDiscountSenior + '%</strong> over ' + seniorAge;
    } else {
        ticketPriceFinal = ticketPrice;
        discountEl.innerHTML = 'Biglietto standard';
    }

    // Print price final
    ticketPriceEl.innerHTML = ticketPriceFinal.toFixed(2) + value;
});




