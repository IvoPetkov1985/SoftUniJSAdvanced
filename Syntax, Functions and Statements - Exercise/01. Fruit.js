function fruit(type, weightInG, pricePerKilo) {
    let weightInKilo = weightInG / 1000;
    let totalPrice = weightInKilo * pricePerKilo;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightInKilo.toFixed(2)} kilograms ${type}.`);
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);