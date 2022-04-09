// STATE PATTERN

const PageState = function () {
  let currentState = new homeState(this);

  this.init = () => this.change(new homeState());

  this.change = (state) => (currentState = state);
};

// home state
const homeState = function (page) {
  document.querySelector("#heading").textContent = null;
  document.querySelector("#content").innerHTML = `
    <div class="jumbotron">
    <h1 class="display-3">Hello, world!</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <p class="lead">
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </p>
  </div>
    `;
};

// about state
const aboutState = function (page) {
  document.querySelector("#heading").textContent = null;
  document.querySelector("#content").innerHTML = `
    <p>This is the about page</p>
    `;
};

// contact state
const contactState = function (page) {
  document.querySelector("#heading").textContent = null;
  document.querySelector("#content").innerHTML = `
    <p>This is the contact page</p>
    `;
};

// use the pattern

// init pageState
const page = new PageState();

// init the first state
page.init();

// UI vars
const home = document.getElementById("home");
const about = document.getElementById("about");
const contact = document.getElementById("contact");

// home
home.addEventListener("click", (e) => {
  page.change(new homeState());
  e.preventDefault();
});

// about
about.addEventListener("click", (e) => {
  page.change(new aboutState());
  e.preventDefault();
});

// contact
contact.addEventListener("click", (e) => {
  page.change(new contactState());
  e.preventDefault();
});
