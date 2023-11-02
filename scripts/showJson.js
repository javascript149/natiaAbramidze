document
  .getElementById("moreCountries2")
  .addEventListener("click", function () {
    fetch("scripts/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        const additionalCountriesDiv = document.getElementById(
          "additionalCountries-container"
        );
        additionalCountriesDiv.innerHTML = "";
        data.countries.forEach((country) => {
          const countryDiv = document.createElement("div");
          countryDiv.innerHTML = `<h3>${country.country}</h3><p>Code: ${country.code}</p>`;
          additionalCountriesDiv.appendChild(countryDiv);
        });
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  });
