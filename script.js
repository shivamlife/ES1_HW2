console.log('Hello!');
// 1. Create a function called calculateSalary that takes two arguments called hoursWorked and hourlyRate. Inside the function, calculate the total salary. Return the salary. Call the function with two arguments and console.log the result.
function calculateSalary(hoursWorked, hourlyRate) {
  const totalSalary = hoursWorked * hourlyRate;
  return totalSalary;
}
const salary = calculateSalary(10, 120);
console.log(`Salary is ${salary}`);

// 2. Create a function called `calculateBonus` that takes three arguments called `workedHours`, `marks`, and `salary`. Use appropriate variable declarations. Inside the function, check the eligibility for a bonus based on the following criteria:

// - If `workedHours` is greater than 25 and `marks` is greater than 85, calculate a 10% bonus on the `salary` and return the updated salary.

// - If `workedHours` is greater than 15 and `marks` is greater than 75, calculate a 5% bonus on the `salary` and return the updated salary.

// - If none of the above conditions are met, return the `salary` without any bonus.

// code to call the function
function calculateBonus(workedHours, marks, salary) {
  if (workedHours > 25 && marks > 85) {
    const updatedSalary = salary + (10 * salary) / 100;
    return updatedSalary;
  } else if (workedHours > 15 && marks > 75) {
    const updatedSalary = salary + (5 * salary) / 100;
    return updatedSalary;
  } else {
    return salary;
  }
}
console.log(calculateBonus(20, 80, 5000));

// 3. Create a function called calculateFinalAmount that calculates the final amount of a cart. The function takes four arguments called price1, quantity1, price2 and quantity2. Inside the function, calculate the total price of quantity1 and add it to the total price of quantity2 to get the final amount. Return the total amount. Use appropriate variable declarations.

// code to call the function
function calculateFinalAmount(price1, quantity1, price2, quantity2) {
  const totalPriceOfQuantity1 = quantity1 * price1;
  const totalPriceOfQuantity2 = quantity2 * price2;
  const finalAmount = totalPriceOfQuantity1 + totalPriceOfQuantity2;
  return finalAmount;
}
console.log(calculateFinalAmount(200, 10, 500, 5));

// 4. Create a function called calculateAllowance that takes three arguments: age, isStudent and baseAllowance. Inside the function, determine the additional allowance based on the following criteria:

// If age is less than 18 and isStudent is true, add 100 to the baseAllowance and return the updated allowance.
// If age is between 18 and 25 (inclusive of both 18 and 25) and isStudent is true, add 50 to the baseAllowance and return the updated allowance.
// If none of the above conditions are met, return the original baseAllowance.
// Call the function with three arguments (age as 16, isStudent as true and base allowance as 500). Print the final output. Use appropriate variable declarations.

function calculateAllowance(age, isStudent, baseAllowance) {
  if (age < 18 && isStudent) {
    const updatedAllowence = baseAllowance + 100;
    return updatedAllowence;
  } else if (age > 18 && age < 25 && isStudent) {
    const updatedAllowence = baseAllowance + 50;
    return updatedAllowence;
  } else {
    return baseAllowance;
  }
}
console.log(calculateAllowance(16, true, 500));

// 5. Create a function called calculateShippingCost that takes three arguments: totalWeight, country, and baseCost. Inside the function, calculate the shipping cost based on the following criteria:

// If totalWeight is less than or equal to 1 kg and country is "Local", add 10 to the baseCost and return the updated cost.
// If totalWeight is greater than 1 kg and country is "International", add 20 to the baseCost and return the updated cost.
// If none of the above conditions are met, return the baseCost without any additional charges.
// Call the function with three arguments (total weight as 0.5, country as “Local” and base cost as 50). Print the final output. Use appropriate variable declarations.

function calculateShippingCost(totalWeight, country, baseCost) {
  if (totalWeight <= 1 && country == 'Local') {
    baseCost = baseCost + 10;
    return baseCost;
  } else if (totalWeight > 1 && country == 'International') {
    baseCost = baseCost + 20;
    return baseCost;
  } else {
    return baseCost;
  }
}
console.log(calculateShippingCost(2, 'International', 100));
