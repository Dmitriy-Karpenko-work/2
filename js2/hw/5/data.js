let jsonData;
fetch("https://catfact.ninja/fact")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok || Ответ неполучен");
    }
    return response.json();
  })
  .then((data) => {
    jsonData = data;
    console.log(jsonData);
    const jsonObject = jsonData;
    console.log(jsonObject.fact);

    const wrapperFactDivEl = document.createElement("div");
    wrapperFactDivEl.classList.add("wrapperFact");
    document.body.appendChild(wrapperFactDivEl);

    const wrapperFact__h1El = document.createElement("h1");
    wrapperFact__h1El.classList.add("wrapperFact__h1");
    wrapperFact__h1El.textContent = "данный факт взят из открытого api";
    wrapperFactDivEl.appendChild(wrapperFact__h1El);

    const wrapperFact__textEl = document.createElement("span");
    wrapperFact__textEl.classList.add("wrapperFact__text");
    wrapperFact__textEl.textContent = jsonObject.fact;
    wrapperFactDivEl.appendChild(wrapperFact__textEl);

    const wrapperFact__Ps = document.createElement("span");
    wrapperFact__Ps.classList.add("wrapperFact__ps");
    wrapperFact__Ps.textContent =
      "Попытаюсь добавить обработку текста через api яндекс переводчика";
    wrapperFactDivEl.appendChild(wrapperFact__Ps);
  })
  .catch((error) => {
    console.error(
      "There has been a problem with your fetch operation: || Возникла проблема с вашей операцией выборки:",
      error
    );
  });
