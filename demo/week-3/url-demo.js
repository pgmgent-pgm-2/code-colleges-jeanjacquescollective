let myURL = new URL("https://www.pgm.gent/pgm-2/v2/express/rest.html#uri-en-url");

console.log(myURL)
myURL.hostname = "test";
console.log(myURL.hostname)

