// module pattern

// basic structure
// (function () {
//   // declare private vars and function

//   return {
//     // declare public var and function
//   };
// })();

// standard module pattern
// const UICtrl = (function () {
//   let text = "Hello Daigo";

//   const changeText = function () {
//     const element = document.querySelector("h1");
//     element.textContent = text;
//   };

//   return {
//     callChangeText: function () {
//       changeText();
//       console.log(text);
//     },
//   };
// })();

// UICtrl.callChangeText();

// REVELING MODULE PATTERN
const ItemCtrl = (function () {
  let data = [];

  function add(item) {
    data.push(item);
    console.log("item added...");
  }

  function get(id) {
    return data.find((item) => {
      return item.id === id;
    });
  }
  return {
    add: add,
    get: get,
  };
})();

ItemCtrl.add({ id: 1, name: "Daigo" });
console.log(ItemCtrl.get(1));
