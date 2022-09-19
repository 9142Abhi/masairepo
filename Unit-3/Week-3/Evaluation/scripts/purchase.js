let abc = JSON.parse(localStorage.getItem("user"));
let amount = document.getElementById("balance");
amount.innerHTML = abc[abc.length - 1].amount;
let data = JSON.parse(localStorage.getItem("purchase")) || [];
let container = document.createElement("div");
container.innerHTML = null;
container.id = "purchased_vouchers";
data.forEach((el) => {
  let div = document.createElement("div");
  let image = document.createElement("img");
  image.src = el.image;
  let name = document.createElement("p");
  name.innerHTML = el.name;
  let price = document.createElement("p");
  price.innerHTML = el.price;

  let btn = document.createElement("button");
  btn.innerHTML = el.button;
  div.append(image, name, price);
  container.append(div);
  document.body.append(container);
});
