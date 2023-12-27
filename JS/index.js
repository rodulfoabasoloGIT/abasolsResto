const test = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

//image containers
const randomImages = document.querySelectorAll(".meal-img img");
const imgCaption = document.querySelector("figcaption");
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

      randomImages[0].setAttribute("alt", data1.meals[randomNumber].strMeal);
      randomImages[1].setAttribute("alt", data1.meals[randomNumber2].strMeal);

      randomImages[0].nextElementSibling.innerText =
        data1.meals[randomNumber].strMeal;

      randomImages[1].nextElementSibling.innerText =
        data1.meals[randomNumber2].strMeal;
    } else {
      randomImages[0].setAttribute("src", data1.meals[0].strMealThumb);
      randomImages[1].setAttribute("src", data1.meals[1].strMealThumb);

      randomImages[0].setAttribute("alt", data1.meals[0].strMeal);
      randomImages[1].setAttribute("alt", data1.meals[1].strMeal);

      randomImages[0].nextElementSibling.innerText = data1.meals[0].strMeal;

      randomImages[1].nextElementSibling.innerText = data1.meals[1].strMeal;
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

      randomImages[2].setAttribute("alt", data2.meals[randomNumber].strMeal);
      randomImages[3].setAttribute("alt", data2.meals[randomNumber2].strMeal);

      randomImages[2].nextElementSibling.innerText =
        data2.meals[randomNumber].strMeal;

      randomImages[3].nextElementSibling.innerText =
        data2.meals[randomNumber2].strMeal;
    } else {
      randomImages[2].setAttribute("src", data2.meals[0].strMealThumb);
      randomImages[3].setAttribute("src", data2.meals[1].strMealThumb);

      randomImages[2].setAttribute("alt", data2.meals[0].strMeal);
      randomImages[3].setAttribute("alt", data2.meals[1].strMeal);

      randomImages[2].nextElementSibling.innerText = data2.meals[0].strMeal;

      randomImages[3].nextElementSibling.innerText = data2.meals[1].strMeal;
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

      randomImages[4].setAttribute("alt", data3.meals[randomNumber].strMeal);
      randomImages[5].setAttribute("alt", data3.meals[randomNumber2].strMeal);

      randomImages[4].nextElementSibling.innerText =
        data3.meals[randomNumber].strMeal;

      randomImages[5].nextElementSibling.innerText =
        data3.meals[randomNumber2].strMeal;
    } else {
      randomImages[4].setAttribute("src", data3.meals[0].strMealThumb);
      randomImages[5].setAttribute("src", data3.meals[1].strMealThumb);

      randomImages[4].setAttribute("alt", data3.meals[0].strMeal);
      randomImages[5].setAttribute("alt", data3.meals[1].strMeal);

      randomImages[4].nextElementSibling.innerText = data3.meals[0].strMeal;

      randomImages[5].nextElementSibling.innerText = data3.meals[1].strMeal;
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

      randomImages[6].setAttribute("alt", data4.meals[randomNumber].strMeal);
      randomImages[7].setAttribute("alt", data4.meals[randomNumber2].strMeal);

      randomImages[6].nextElementSibling.innerText =
        data4.meals[randomNumber].strMeal;

      randomImages[7].nextElementSibling.innerText =
        data4.meals[randomNumber2].strMeal;
    } else {
      randomImages[6].setAttribute("src", data4.meals[0].strMealThumb);
      randomImages[7].setAttribute("src", data4.meals[1].strMealThumb);

      randomImages[6].setAttribute("alt", data4.meals[0].strMeal);
      randomImages[7].setAttribute("alt", data4.meals[1].strMeal);

      randomImages[6].nextElementSibling.innerText = data4.meals[0].strMeal;

      randomImages[7].nextElementSibling.innerText = data4.meals[1].strMeal;
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

      randomImages[8].setAttribute("alt", data5.meals[randomNumber].strMeal);
      randomImages[9].setAttribute("alt", data5.meals[randomNumber2].strMeal);

      randomImages[8].nextElementSibling.innerText =
        data5.meals[randomNumber].strMeal;

      randomImages[9].nextElementSibling.innerText =
        data5.meals[randomNumber2].strMeal;
    } else {
      randomImages[8].setAttribute("src", data5.meals[0].strMealThumb);
      randomImages[9].setAttribute("src", data5.meals[1].strMealThumb);

      randomImages[8].setAttribute("alt", data5.meals[0].strMeal);
      randomImages[9].setAttribute("alt", data5.meals[1].strMeal);

      randomImages[8].nextElementSibling.innerText = data5.meals[0].strMeal;

      randomImages[9].nextElementSibling.innerText = data5.meals[1].strMeal;
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

      randomImages[10].setAttribute("alt", data6.meals[randomNumber].strMeal);
      randomImages[11].setAttribute("alt", data6.meals[randomNumber2].strMeal);

      randomImages[10].nextElementSibling.innerText =
        data6.meals[randomNumber].strMeal;

      randomImages[11].nextElementSibling.innerText =
        data6.meals[randomNumber2].strMeal;
    } else {
      randomImages[10].setAttribute("src", data6.meals[0].strMealThumb);
      randomImages[11].setAttribute("src", data6.meals[1].strMealThumb);

      randomImages[10].setAttribute("alt", data6.meals[0].strMeal);
      randomImages[11].setAttribute("alt", data6.meals[1].strMeal);

      randomImages[10].nextElementSibling.innerText = data6.meals[0].strMeal;

      randomImages[11].nextElementSibling.innerText = data6.meals[1].strMeal;
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

      randomImages[12].setAttribute("alt", data7.meals[randomNumber].strMeal);
      randomImages[13].setAttribute("alt", data7.meals[randomNumber2].strMeal);

      randomImages[12].nextElementSibling.innerText =
        data7.meals[randomNumber].strMeal;

      randomImages[13].nextElementSibling.innerText =
        data7.meals[randomNumber2].strMeal;
    } else {
      randomImages[12].setAttribute("src", data7.meals[0].strMealThumb);
      randomImages[13].setAttribute("src", data7.meals[1].strMealThumb);

      randomImages[12].setAttribute("alt", data7.meals[0].strMeal);
      randomImages[13].setAttribute("alt", data7.meals[1].strMeal);

      randomImages[12].nextElementSibling.innerText = data7.meals[0].strMeal;

      randomImages[13].nextElementSibling.innerText = data7.meals[1].strMeal;
    }
  });
//end of random meal
