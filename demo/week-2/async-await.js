const urlBeschikbaar = false;

async function getData() {
  return new Promise((resolve, reject) => {
    if (urlBeschikbaar) {
      setTimeout(() => {
        resolve({
          data: "Dit is de data",
        });
      }, 1000);
    }
    else{
        reject("ERROR")
    }
  });
}

async function displayData() {
  try {
    const data = await getData();
    console.log(data);
  } catch (error) {
    console.log("Er is geen data beschikbaar " + error);
  } finally {
    console.log("Verdere bewerkingen voor ons programma");
  }
}

displayData();
