const object = {
  type: "QWERTY",
  state: "used",
  keys: ["a", "b", "c"],
  specialAbilities: {
    colors: "rgb",
  },
  getType: function () {
    return this.type;
  },
};

const jsonString = JSON.stringify(object);

console.log(jsonString);

// {"type":"QWERTY","state":"used"}

const objectFromJson = JSON.parse(jsonString)

console.log(objectFromJson)
