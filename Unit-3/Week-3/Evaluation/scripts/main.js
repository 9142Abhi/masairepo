function givendata(n, e, a, am) {
  this.name = n;
  this.email = e;
  this.address = a;
  this.amount = am;
}

function storeData() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let address = document.getElementById("address").value;
  let amount = document.getElementById("amount").value;

  let data = JSON.parse(localStorage.getItem("user")) || [];
  let x = new givendata(name, email, address, amount);
  data.push(x);
  localStorage.setItem("user", JSON.stringify(data));
}
