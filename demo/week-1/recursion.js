function countdown(num) {
  for (let index = num; index > 0; index--) {
    console.log(index);
  }
}

countdown(3);

function recursiveCountdown(num){
    if(num === 0){
        return;
    }
    console.log(num)
    recursiveCountdown(num - 1);
}

recursiveCountdown(3);


// example use for recursion
const tree = {
    name: "John",
    children: [
      {
        name: "Zoe",
        children: [],
      },
      {
        name: "Bob",
        children: [
          {
            name: "Joe",
            children: [],
          },
          {
            name: "Eloise",
            children: [],
          },
        ],
      },
    ],
  };

  function printChildren(obj){
    if(obj.children.length === 0){
        return;
    }

    obj.children.forEach(child => {
        console.log(child.name);
        printChildren(child);
    });
  }
  
  printChildren(tree)