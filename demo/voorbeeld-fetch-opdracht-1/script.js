let options = {
    method: "GET",
    headers: { "x-api-key": "jouwAPIkey" },
  };
  
  let url = 'https://api.api-ninjas.com/v1/recipe?query=""';
  
  fetch(url, options)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
  