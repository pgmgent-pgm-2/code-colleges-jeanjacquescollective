const url = "http://localhost:3000/api/users";
// functie schrijven op data op te halen
async function fetchDataFromUrl(url) {
  try {
    let options = {
      method: "GET", // or 'POST' or other HTTP methods
      headers: {
        "Content-Type": "application/json",
        // Include any other headers your server expects
      },
      mode: "cors", // This enables CORS
    };
    const response = await fetch(url, options);

    const data = await response.json();

    renderData(data);
  } catch (error) {
    console.log(error);
  }
}

function renderData(data) {
  const $container = document.getElementById("data-container");
  $container.innerHTML = "";

  console.log(data);
  $container.innerHTML = data.users
    .map((element) => {
      return `
        <div class='user-container'>
            <h2>${element.name}</h2>
            <h3>${element.id}</h3>
        </div>
        `;
    })
    .join("");
}

function init() {
  fetchDataFromUrl(url);
  const $form = document.getElementById("userForm");

  $form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    console.log(name)
    const userData = {
      name: name,
    };

    createUser(userData, url)
  });
}

async function createUser(userData, url) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
      mode: "cors",
    });
    const data = await response.json();

    console.log(`User with data: ${data} successfully created`);
  } catch (error) {
    console.log(error);
  }
}
// event listener toekennen als DOM geladen is
document.addEventListener("DOMContentLoaded", init);
// data tonen in browser
