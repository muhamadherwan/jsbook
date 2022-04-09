// SINGLETON PATTERN
const Singleton = (() => {
  let instance;

  function createInstance() {
    // create new object
    const object = new Object({ name: "Daigo" });
    return object;
  }
  return {
    // object literal function
    getInstance: () => {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

// USE THE PATTERN
const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

// console.log(instanceA);
console.log(instanceA === instanceB);
