searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", fetching);
//https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-JS0101EN-SkillsNetwork/travel1.json
function fetching() {
  debugger;
  textInput = document.getElementById("searchInput").value.toLowerCase();
  fetch("travel_recommendation_api.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (
        textInput == "beach" ||
        textInput == "beaches" ||
        textInput == "coast"
      ) {
        data.beaches.forEach((element) => {
          const Div = document.createElement("div");
          const header = document.createElement("h3");
          header.textContent = element.name;

          const img = document.createElement("img");
          img.src = "";
          const description = document.createElement("p");
          description = element.description;
          Div.appendChild(header);
          Div.appendChild(img);
          Div.appendChild(p);
        });
      } else if (textInput == "country" || textInput == "countries") {
        data.countries;
      } else if (textInput == "temple" || textInput == "temples") {
        data.temples;
      }
      //   console.log(data.countries);
    })
    .catch((error) => console.error("Error fetching data:", error));
}
