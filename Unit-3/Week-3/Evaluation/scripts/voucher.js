let key = "https://masai-vouchers-api.herokuapp.com/api/vouchers";
// name,image,price,buy(button)
let vowcher = async () => {
  try {
    let res = await fetch(
      `https://masai-vouchers-api.herokuapp.com/api/vouchers`
    );
    let data = await res.json();
    append(data[0].vouchers);
    // console.log(data[0].vouchers);
  } catch (err) {
    console.log(err);
  }
};

function append(data) {
  let container = document.createElement("div");
  container.innerHTML = null;
  container.id = "voucher_list";
  data.forEach((el) => {
    let div = document.createElement("div");
    div.className = "voucher";
    let image = document.createElement("img");
    image.src = el.image;
    let name = document.createElement("p");
    name.innerHTML = el.name;
    let price = document.createElement("p");
    price.innerHTML = el.price;
    let btn = document.createElement("button");
    btn.innerHTML = "buy";
    btn.className = "buy_voucher";
    btn.onclick = function () {
      let data = JSON.parse(localStorage.getItem("user")) || [];
      if (data[data.length - 1].amount >= el.price) {
        data[data.length - 1].amount = data[data.length - 1].amount - el.price;
        localStorage.setItem("user", JSON.stringify(data));
        alert("Hurray! purchase successfull");
      } else {
        alert("Sorry! insufficient balance");
      }
      let arr = JSON.parse(localStorage.getItem("purchase")) || [];
      let a = new item(
        image.src,
        name.innerHTML,
        price.innerHTML,
        btn.innerHTML
      );
      arr.push(a);
      localStorage.setItem("purchase", JSON.stringify(arr));
    };
    div.append(image, name, price, btn);
    container.append(div);
    document.body.append(container);
  });
}

function item(i, n, p, b) {
  this.image = i;
  this.name = n;
  this.price = p;
  this.button = b;
}
vowcher();
