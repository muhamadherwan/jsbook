// OBSERVER PATTERN

// eventobserver object constructor
function EventObserver() {
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function (fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  },

  unsubscribe: function (fn) {
    this.observers = this.observers.filter(function (item) {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`You are now unsubsribed from ${fn.name}`);
  },

  fire: function () {
    this.observers.forEach(function (item) {
      item.call();
    });
  },
};

// USE THE PATTERN
const click = new EventObserver();

// event listeners
document
  .querySelector(".sub-ms")
  .addEventListener("click", () => click.subscribe(getCurMilliseconds));

document
  .querySelector(".unsub-ms")
  .addEventListener("click", () => click.unsubscribe(getCurMilliseconds));

document
  .querySelector(".sub-s")
  .addEventListener("click", () => click.subscribe(getCurSeconds));

document
  .querySelector(".unsub-s")
  .addEventListener("click", () => click.unsubscribe(getCurSeconds));

document.querySelector(".fire").addEventListener("click", () => click.fire());

// click handler
const getCurMilliseconds = () =>
  console.log(`current milliseconds: ${new Date().getMilliseconds()}`);

const getCurSeconds = () =>
  console.log(`current seconds: ${new Date().getSeconds()}`);
