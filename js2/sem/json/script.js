const divContEl = document.querySelector("div.container");

const parseResult = JSON.parse(dataInfo);
parseResult.forEach((element) => {
  const newDivEl = document.createElement("div");
  newDivEl.classList.add(element.class);
  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", element.url);
  imgEl.setAttribute("width", element.width);
  imgEl.setAttribute("height", element.height);
  const textImgEl = document.createElement("p");
  textImgEl.innerHTML = element.text;
  newDivEl.appendChild(imgEl);
  newDivEl.appendChild(textImgEl);
  divContEl.appendChild(newDivEl);
});

// const divContEl = document.querySelector("div.container");
// fetch("https://api.nbrb.by/exrates/rates?periodicity=0")
//   .then((response) => response.json())
//   .then((parseResult) => {
//     parseResult.forEach((element) => {
//       // console.log(element);
//       const newDivEl = document.createElement("div");
//       newDivEl.classList.add("img__container");

//       const textData = document.createElement("p");
//       textData.innerHTML = element.Date;
//       newDivEl.appendChild(textData);

//       const textCurAbb = document.createElement("p");
//       textCurAbb.innerHTML = element.Cur_Abbreviation;
//       newDivEl.appendChild(textCurAbb);

//       const textCurScale = document.createElement("p");
//       textCurScale.innerHTML = element.Cur_Scale;
//       newDivEl.appendChild(textCurScale);

//       const textCurName = document.createElement("p");
//       textCurName.innerHTML = element.Cur_Name;
//       newDivEl.appendChild(textCurName);

//       const textOffRate = document.createElement("p");
//       textOffRate.innerHTML = element.Cur_OfficialRate;
//       newDivEl.appendChild(textOffRate);

//       divContEl.appendChild(newDivEl);
//     });
//   });
