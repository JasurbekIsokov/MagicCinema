"use script";

const cinemaCard = document.querySelector(".cards");
const btnSearch = document.querySelector(".btn-search");
const searchValue = document.querySelector(".search");

btnSearch.addEventListener("click", function () {
  searchCinema(searchValue.value);
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    searchCinema(searchValue.value);
  }
});

let dataArr = [];
let title = [];

const searchCinema = async function (a) {
  cinemaCard.innerHTML = "";
  dataArr = [];
  console.log("s");
  const data = await fetch(`https://www.omdbapi.com/?apikey=1fd18c03&s=${a}`);
  const dataJSON = await data.json();

  console.log(dataJSON);

  dataArr.push(dataJSON.Search);

  console.log(dataArr);

  dataArr[0].forEach((val) => {
    renderHtml(val);

    console.log(val);
    console.log(val.Title);
    console.log(val.Poster);
  });
  // console.log(dataJSON.Search[0].Title);
};

function renderHtml(data) {
  let html = `
  <div class="card">
        <div class="top"><img src="${data.Poster}" alt="Cinema picture" /></div>
        <div class="bottom">
          <p class="cinema_title">${data.Title}</p>
        </div>
      </div>`;

  cinemaCard.insertAdjacentHTML("afterbegin", html);
}
