const { getCategoriesData, getIngredientData } = require("../foodApp");
const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(
  path.resolve(__dirname, "../../index.html"),
  "utf8"
);
global.score = 1;
// jest.setTimeout(10000);
let res = {
  meals: [
    {
      strMeal: "Baked salmon with fennel & tomatoes",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/1548772327.jpg",
      idMeal: "52959",
    },
  ],
};

let res2 = {
  meals: [
    {
      strMeal: "Chick-Fil-A Sandwich",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/sbx7n71587673021.jpg",
      idMeal: "53016",
    },
  ],
};

jest.dontMock("fs");

describe("fetch list", function () {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });
  afterEach(() => {
    // restore the original func after test
    jest.resetModules();
    fetch.resetMocks();
  });

  it("get cateogory and get ingredient buttons should exists", function () {
    expect(document.getElementById("get-category-data")).toBeTruthy();
    expect(document.getElementById("get-ingredient-data")).toBeTruthy();
    global.score += 1;
  });
  it("get category data should work", function (done) {
    fetch.mockResponse(JSON.stringify(res));
    let fetchBtn = document.getElementById("get-category-data");
    fetchBtn.addEventListener("click", getCategoriesData);
    fetchBtn.click();
    getCategoriesData()
      .then((res) => {
        console.log(res, "res");
        expect(res).toEqual({
          meals: [
            {
              strMeal: "Baked salmon with fennel & tomatoes",
              strMealThumb:
                "https://www.themealdb.com/images/media/meals/1548772327.jpg",
              idMeal: "52959",
            },
          ],
        });
        expect(res.meals.length).toEqual(1);
        expect(fetch).toBeCalled();
        expect(fetch).toBeCalledWith(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
        );
        global.score += 3;
        done();
      })
      .catch((err) => console.log(err));
  });

  it("getIngredientData should fetch the results", function (done) {
    fetch.mockResponse(JSON.stringify(res2));
    let fetchBtn = document.getElementById("get-category-data");

    fetchBtn.addEventListener("click", getCategoriesData);

    document.getElementById("get-ingredient-data").click();

    getIngredientData()
      .then((res) => {
        console.log(res, "res");
        expect(res).toEqual({
          meals: [
            {
              strMeal: "Chick-Fil-A Sandwich",
              strMealThumb:
                "https://www.themealdb.com/images/media/meals/sbx7n71587673021.jpg",
              idMeal: "53016",
            },
          ],
        });
        expect(res.meals.length).toEqual(1);
        expect(fetch).toBeCalled();
        expect(fetch).toBeCalledWith(
          "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"
        );
        global.score += 3;
        done();
      })
      .catch((err) => console.log(err));
  });

  it("should fail for unsuccessfull get categories fetch request", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
    });
    await expect(getCategoriesData()).resolves.toEqual("something went wrong");
    global.score += 1;
  });

  it("should fail for unsuccessfull get ingredients fetch request", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
    });
    await expect(getIngredientData()).resolves.toEqual("something went wrong");
    global.score += 1;
  });
});

afterAll(() => {
  console.log("Final Score is", global.score);
});
