searchButton = document.getElementById("searchButton");
clearButton = document.getElementById("clearButton");
searchButton.addEventListener("click", fetching);
clearButton.addEventListener("click", clearDisplay);
function fetching() {
  debugger;
  let textInput = document.getElementById("searchInput").value.toLowerCase();
  fetch(
    "https://raw.githubusercontent.com/HafsaShahid07/JavaScript-Project/main/travel_recommendation_api.json"
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      let displayContainer = document.getElementById("displayContainer");
      // displayBox.innerHTML = ""; // Clear previous results
      displayContainer.classList.add("displayContainer");
      if (
        textInput === "beach" ||
        textInput === "beaches" ||
        textInput === "coast"
      ) {
        data.beaches.forEach((element) => {
          createDisplayCard(element, displayContainer);
        });
      } else if (textInput === "country" || textInput === "countries") {
        data.countries.forEach((element) => {
          element.cities.forEach((city) => {
            createDisplayCard(city, displayContainer);
          });
        });
      } else if (textInput === "temple" || textInput === "temples") {
        data.temples.forEach((element) => {
          createDisplayCard(element, displayContainer);
        });
      }
    })
    .catch((error) => console.error("Error fetching data:", error));
}
function createDisplayCard(element, container) {
  let Div = document.createElement("div");
  Div.classList.add("displayBox");
  let img1 = document.createElement("img");
  img1.src = element.imageUrl;

  let header = document.createElement("h3");
  header.textContent = element.name;

  let description = document.createElement("p");
  description.textContent = element.description;

  Div.appendChild(header);
  Div.appendChild(img1);
  Div.appendChild(description);
  container.appendChild(Div);
}

function clearDisplay() {
  displayContainer = document.getElementById("displayContainer");
  displayContainer.innerHTML = "";
}
