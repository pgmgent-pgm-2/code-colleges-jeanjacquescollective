async function fetchData() {
  const response = await fetch("https://api.publicapis.org/entries");
  const data = await response.json();
  renderData(data);
}

function renderData(data) {
  const $container = document.getElementById("data-container");
  //   maak container leeg
  $container.innerHTML = "";

  data.entries.forEach((apiURL) => {
    const listItem = document.createElement("li");
    // listItem.textContent = apiURL.API;
    listItem.append(createLink(apiURL.Link, apiURL.API))
    $container.appendChild(listItem);
  });
}

function createLink(URL, text){
    let a = document.createElement("a");
    let link = document.createTextNode(text);
    a.appendChild(link);
    a.title = text;
    a.href = URL;
    a.target = "_blank";
    return a;
}

document.addEventListener("DOMContentLoaded", fetchData);
