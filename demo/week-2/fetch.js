const countriesPromise = fetch("https://restcountries.com/v3.1/all")
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    throw Error("Something went wrong");
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
console.log(countriesPromise);

// async await

const getData = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/ll");

    if (response.status === 200) {
      const jsonData = await response.json();
      console.log(jsonData);
      return;
    }
    throw Error("Something went wrong!");
  } catch (error) {
    console.log(`Catch: ${error}`);
  }
};

getData();

//   GET-verzoek

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "GET",
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));

// 1 specifieke resource ophalen

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "GET",
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));

// filteren op basis van query parameters

fetch("https://jsonplaceholder.typicode.com/posts/1?userId=1", {
  method: "GET",
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));

fetch("https://jsonplaceholder.typicode.com/posts/1/comments", {
  method: "GET",
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));

let data = {
  title: "Graduaat Programmeren",
  body: "Tijdens het Graduaat Programmeren specialiseer je je in JavaScript, HTML, CSS, UI/UX en software engineering. Naast deze technische kant, leer je ook om creatief en commercieel te denken. Als programmeur creëer je namelijk niet alleen aantrekkelijke en functionele websites, maar werk je ook samen met heel wat bedrijven. Na deze opleiding kan je aan de slag als front-end developer, CMS Themer of full-stack JavaScript developer.",
  userId: 1,
};

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify(data),
  headers: { "Content-type": "application/json; charset=UTF-8" },
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));

data = {
  id: 1,
  title: "Graduaat Programmeren",
  body: "Tijdens het Graduaat Programmeren specialiseer je je in JavaScript, HTML, CSS, UI/UX en software engineering. Naast deze technische kant, leer je ook om creatief en commercieel te denken. Als programmeur creëer je namelijk niet alleen aantrekkelijke en functionele websites, maar werk je ook samen met heel wat bedrijven. Na deze opleiding kan je aan de slag als front-end developer, CMS Themer of full-stack JavaScript developer.",
  userId: 1,
};

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  body: JSON.stringify(data),
  headers: { "Content-type": "application/json; charset=UTF-8" },
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));
