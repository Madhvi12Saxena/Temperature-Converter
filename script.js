function convertTemperature() {
    var temperatureInput = document.getElementById("temperature");
    var fromUnit = document.getElementById("from").value;
    var toUnit = document.getElementById("to").value;
    var resultDiv = document.getElementById("result");
  
    if (temperatureInput.value !== "") {
      var temperature = parseFloat(temperatureInput.value);
      var result;
  
      if (fromUnit === "celsius") {
        if (toUnit === "fahrenheit") {
          result = (temperature * 9 / 5) + 32;
          resultDiv.innerText = temperature + " degrees Celsius is equal to " + result.toFixed(2) + " degrees Fahrenheit.";
        } else if (toUnit === "kelvin") {
          result = temperature + 273.15;
          resultDiv.innerText = temperature + " degrees Celsius is equal to " + result.toFixed(2) + " Kelvin.";
        }
      } else if (fromUnit === "fahrenheit") {
        if (toUnit === "celsius") {
          result = (temperature - 32) * 5 / 9;
          resultDiv.innerText = temperature + " degrees Fahrenheit is equal to " + result.toFixed(2) + " degrees Celsius.";
        } else if (toUnit === "kelvin") {
          result = (temperature + 459.67) * 5 / 9;
          resultDiv.innerText = temperature + " degrees Fahrenheit is equal to " + result.toFixed(2) + " Kelvin.";
        }
      } else if (fromUnit === "kelvin") {
        if (toUnit === "celsius") {
          result = temperature - 273.15;
          resultDiv.innerText = temperature + " Kelvin is equal to " + result.toFixed(2) + " degrees Celsius.";
        } else if (toUnit === "fahrenheit") {
          result = (temperature * 9 / 5) - 459.67;
          resultDiv.innerText = temperature + " Kelvin is equal to " + result.toFixed(2) + " degrees Fahrenheit.";
        }
      }
    } else {
      resultDiv.innerText = "Please enter a value.";
    }
  }
  