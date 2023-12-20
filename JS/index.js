const test = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

//image containers
const randomImages = document.querySelectorAll(".meal-img img");

test.addEventListener("click", () => {
  test.classList.toggle("is-active");
});

test.addEventListener("click", (e) => {
  const state = e.target.classList[1];
  if (state === "is-active") {
    mobileMenu.classList.toggle("is-active");
    document.body.style.overflow = "hidden";
  } else {
    mobileMenu.classList.toggle("is-active");
    document.body.style.overflow = "auto";
  }
});

//random meal
const filipinoMeal = fetch(
  `https://www.themealdb.com/api/json/v1/1/filter.php?a=filipino`
)
  .then((response) => response.json())
  .then((data1) => {
    const randomNumber = Math.floor(Math.random() * data1.meals.length);
    const randomNumber2 = Math.floor(Math.random() * data1.meals.length);

    if (randomNumber !== randomNumber2) {
      randomImages[0].setAttribute(
        "src",
        data1.meals[randomNumber].strMealThumb
      );
      randomImages[1].setAttribute(
        "src",
        data1.meals[randomNumber2].strMealThumb
      );
    } else {
      randomImages[0].setAttribute("src", data1.meals[0].strMealThumb);
      randomImages[1].setAttribute("src", data1.meals[1].strMealThumb);
    }
  });

const japaneseMeal = fetch(
  `https://www.themealdb.com/api/json/v1/1/filter.php?a=japanese`
)
  .then((response) => response.json())
  .then((data2) => {
    const randomNumber = Math.floor(Math.random() * data2.meals.length);
    const randomNumber2 = Math.floor(Math.random() * data2.meals.length);
    if (randomNumber !== randomNumber2) {
      randomImages[2].setAttribute(
        "src",
        data2.meals[randomNumber].strMealThumb
      );
      randomImages[3].setAttribute(
        "src",
        data2.meals[randomNumber2].strMealThumb
      );
    } else {
      randomImages[2].setAttribute("src", data2.meals[0].strMealThumb);
      randomImages[3].setAttribute("src", data2.meals[1].strMealThumb);
    }
  });

const italianMeal = fetch(
  `https://www.themealdb.com/api/json/v1/1/filter.php?a=italian`
)
  .then((response) => response.json())
  .then((data3) => {
    const randomNumber = Math.floor(Math.random() * data3.meals.length);
    const randomNumber2 = Math.floor(Math.random() * data3.meals.length);
    if (randomNumber !== randomNumber2) {
      randomImages[4].setAttribute(
        "src",
        data3.meals[randomNumber].strMealThumb
      );
      randomImages[5].setAttribute(
        "src",
        data3.meals[randomNumber2].strMealThumb
      );
    } else {
      randomImages[4].setAttribute("src", data3.meals[0].strMealThumb);
      randomImages[5].setAttribute("src", data3.meals[1].strMealThumb);
    }
  });

const chineseMeal = fetch(
  `https://www.themealdb.com/api/json/v1/1/filter.php?a=chinese`
)
  .then((response) => response.json())
  .then((data4) => {
    const randomNumber = Math.floor(Math.random() * data4.meals.length);
    const randomNumber2 = Math.floor(Math.random() * data4.meals.length);
    if (randomNumber !== randomNumber2) {
      randomImages[6].setAttribute(
        "src",
        data4.meals[randomNumber].strMealThumb
      );
      randomImages[7].setAttribute(
        "src",
        data4.meals[randomNumber2].strMealThumb
      );
    } else {
      randomImages[6].setAttribute("src", data4.meals[0].strMealThumb);
      randomImages[7].setAttribute("src", data4.meals[1].strMealThumb);
    }
  });

const americanMeal = fetch(
  `https://www.themealdb.com/api/json/v1/1/filter.php?a=american`
)
  .then((response) => response.json())
  .then((data5) => {
    const randomNumber = Math.floor(Math.random() * data5.meals.length);
    const randomNumber2 = Math.floor(Math.random() * data5.meals.length);
    if (randomNumber !== randomNumber2) {
      randomImages[8].setAttribute(
        "src",
        data5.meals[randomNumber].strMealThumb
      );
      randomImages[9].setAttribute(
        "src",
        data5.meals[randomNumber2].strMealThumb
      );
    } else {
      randomImages[8].setAttribute("src", data5.meals[0].strMealThumb);
      randomImages[9].setAttribute("src", data5.meals[1].strMealThumb);
    }
  });

const mexicanMeal = fetch(
  `https://www.themealdb.com/api/json/v1/1/filter.php?a=mexican`
)
  .then((response) => response.json())
  .then((data6) => {
    const randomNumber = Math.floor(Math.random() * data6.meals.length);
    const randomNumber2 = Math.floor(Math.random() * data6.meals.length);
    if (randomNumber !== randomNumber2) {
      randomImages[10].setAttribute(
        "src",
        data6.meals[randomNumber].strMealThumb
      );
      randomImages[11].setAttribute(
        "src",
        data6.meals[randomNumber2].strMealThumb
      );
    } else {
      randomImages[10].setAttribute("src", data6.meals[0].strMealThumb);
      randomImages[11].setAttribute("src", data6.meals[1].strMealThumb);
    }
  });

const indianMeal = fetch(
  `https://www.themealdb.com/api/json/v1/1/filter.php?a=indian`
)
  .then((response) => response.json())
  .then((data7) => {
    const randomNumber = Math.floor(Math.random() * data7.meals.length);
    const randomNumber2 = Math.floor(Math.random() * data7.meals.length);
    if (randomNumber !== randomNumber2) {
      randomImages[12].setAttribute(
        "src",
        data7.meals[randomNumber].strMealThumb
      );
      randomImages[13].setAttribute(
        "src",
        data7.meals[randomNumber2].strMealThumb
      );
    } else {
      randomImages[12].setAttribute("src", data7.meals[0].strMealThumb);
      randomImages[13].setAttribute("src", data7.meals[1].strMealThumb);
    }
  });

//end of random meal
