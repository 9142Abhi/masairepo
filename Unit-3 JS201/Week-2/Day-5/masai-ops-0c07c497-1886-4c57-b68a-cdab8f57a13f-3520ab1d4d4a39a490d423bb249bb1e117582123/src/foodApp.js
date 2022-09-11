
const getCategoriesData = async () => {
  // code here
  let res =await fetch(`https://www.themealdb.com/api.php?ref=apilist.fun`)
  let data=await res.json()
  console.log(data);
};
getCategoriesData();
const getIngredientData = async () => {

  // code here
  let res =await fetch('https://www.themealdb.com/api.php?ref=apilist.fun');
  let data =await res.json()
  console.log(data);
  

};


// window.onload = function () {
//   //  get the buttons here and add click event
//   let container=document.querySelector('.container');
  
//   let categorybtn =document.createElement('button');
//   categorybtn.setAttribute('id','get-category-data');
//   categorybtn.innerText='Get category data';
//   container.append(categorybtn)
//   let ingredientbtn=document.createElement('button');
//   ingredientbtn.setAttribute('id','get-ingredient-data');
//   ingredientbtn.innerText='Get ingredient data';
//   container.append(ingredientbtn);
//   categorybtn.addEventListener('click',getCategoriesData);
//   ingredientbtn.addEventListener('click',getIngredientData);
// };


// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    getCategoriesData,
    getIngredientData,
  };
}
