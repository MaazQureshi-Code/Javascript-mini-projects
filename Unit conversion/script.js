

const userInput = document.getElementById("user")



document.getElementById("btn1").addEventListener("click" , () =>{
      let value = parseFloat(userInput.value);

    if (isNaN(value)) {
        alert("Please enter a valid number");
        return;
    }

 
    let feet = value * 3.281;
    let metersFromFeet = value / 3.281;
    document.getElementById("length-el").textContent = 
        `${value} meters = ${feet.toFixed(2)} feet | ${value} feet = ${metersFromFeet.toFixed(2)} meters`;

   
    let gallons = value * 0.264;
    let litersFromGallons = value / 0.264;
    document.getElementById("volume-el").textContent = 
        `${value} liters = ${gallons.toFixed(2)} gallons | ${value} gallons = ${litersFromGallons.toFixed(2)} liters`;

    
    let pounds = value * 2.204;
    let kilosFromPounds = value / 2.204;
    document.getElementById("mass-el").textContent = 
        `${value} kilos = ${pounds.toFixed(2)} pounds | ${value} pounds = ${kilosFromPounds.toFixed(2)} kilos`;

})