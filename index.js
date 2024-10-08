// Initialize DOM variables

const headerEl = document.getElementById("header-el")
const tempEl = document.getElementById("temp-el")
const zipInputEl = document.getElementById("zipinput-el")
const buttonEl = document.getElementById("button-el")
const conditionsEl = document.getElementById("conditions-el")
const conditions2El = document.getElementById("conditions2-el")

// Call weatherAPI.com and get data for the passed ZIP code

async function getWeather(zip) {
  const url = "https://api.weatherapi.com/v1/current.json?key=aad361c6669a4b7c9bb11648243009&q=" + zip;  // Create URL with zip
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json(); // Parse JSON
    tempEl.textContent = json.current.temp_f + "F"  // Display temperature
    headerEl.textContent = json.location.name + ", " + json.location.region // Display city name and state
    conditionsEl.textContent = "Conditions are " + json.current.condition.text + ", with the winds out of the " + json.current.wind_dir + " at " + json.current.wind_mph + "mph"  // Display conditions
    conditions2El.textContent = "Visibility is " + json.current.vis_miles + " miles"  // Display visibility
  } catch (error) {
    console.error(error.message);
  }
}

// Set initial state

zipInputEl.value = "Enter your ZIP"
zipInputEl.addEventListener("click", function() {
    zipInputEl.value = ""
})

buttonEl.addEventListener("click", function() {
    getWeather(zipInputEl.value)
})
