function setJokes(data) {
  // get the joke-container div
  let container = document.getElementById("joke-container");

  // craete a div and add a p tag in it with class as joke-text
  let div = document.createElement("div");
  let p = document.createElement("p");
  p.className = "joke-text";

  p.innerHTML = data.value;

  div.append(p);
  container.append(div);

  // append the div to joke-container div
}

let getRandomJoke = async () => {
  // fetch request to get a random joke

  try {
    let res = await fetch(`https://api.chucknorris.io/jokes/random`);
    let data = await res.json();
    // console.log(data);
    // return the data ona successfull request
    console.log(data);
    setJokes(data);
    // return data;
  } catch (err) {
    // return error text on failure
    console.log("something went wrong");
  }
};
let getJokeByCategory = async (event) => {
  // // fetch request to get a random joke by category

  try {
    let res = await fetch(
      `https://api.chucknorris.io/jokes/random?category${event}`
    );
    let result = await res.json();
    setJokes(result);
    // return result;
  } catch (err) {
    console.log("something went wrong");
  }
  // return the data ona successfull request
  // return error text on failure
};
window.onload = function () {
  // add click event to button
  let btn = document.getElementById("get-jokes-data");
  btn.addEventListener("click", getRandomJoke);
  // add change event to select tag
  let categories = document.getElementById("get-category");
  categories.addEventListener("change", getJokeByCategory);
};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    getRandomJoke,
    setJokes,
    getJokeByCategory,
  };
}
