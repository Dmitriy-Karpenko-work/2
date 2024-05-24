// https://jsonplaceholder.typicode.com/
const myPromice = new Promise((resolve, reject) => {});

myPromice.then((value) => {}).catch((error) => console.log("ошибка"));

const url1 = "https://jsonplaceholder.typicode.com/users";

// fetch(url1).then((response) => console.log(response));
// fetch(url1)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(`ошибка ${error}`));
// //шаблон
// const getData = (url1) =>
//   new Promise((resolve, reject) => {
//     fetch(url1).then((response) =>
//       response
//         .json()
//         .then((data) => resolve(data))
//         .catch((error) => reject(error))
//     );
//   });

// getData("https://jsonplaceholder.typicode.com/users")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error.message));

//
// const getData2 = async (argUrl) => {
//   try {
//     // получение данных   от сервера
//     const res = await fetch(argUrl);
//     //получене данных от res
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
// const fetchData = await getData2(url1);
// console.log("----------------------");
// console.log(fetchData);

///VG7hcoFMcSvGDhlJh3ylikHVk7Q8Q4Op8ZFDomGN
// AvBvgTb51bvUT1QOf1fMDcMTPuwDFcxrkc3kFpv2
//https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
//GET https://api.nasa.gov/planetary/apod

const nasaUrl =
  "https://api.nasa.gov/planetary/apod?api_key=AvBvgTb51bvUT1QOf1fMDcMTPuwDFcxrkc3kFpv2&count=10";

const getData2 = async (argUrl) => {
  try {
    // получение данных   от сервера
    const res = await fetch(argUrl);
    //получене данных от res
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
const fetchData = await getData2(nasaUrl);
console.log("----------------------");
console.log(fetchData);

/* <figure>
  <img src="/media/cc0-images/elephant-660-480.jpg" alt="Elephant at sunset" />
  <figcaption>An elephant at sunset</figcaption>
</figure>; */
const CatalogEl = document.querySelector("div.catalog");

fetchData.forEach((element) => {
  CatalogEl.insertAdjacentHTML(
    "beforeend",
    `
  <figure>
  <img class="img" src="${element.url}" 
  />


  <figcaption>${element.explanation}</figcaption>
  </figure>
  `
  );
});
