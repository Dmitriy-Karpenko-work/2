const BDfitnes = `[
  {
    "id":1,
    "name": "Йога",
    "time": "10:00 - 11:00",
    "maxParticipants": 15,
    "currentParticipants": 8,
    "availableSpots": 7
  },
  {
    "id":2,
    "name": "Пилатес",
    "time": "11:30 - 12:30",
    "maxParticipants": 10,
    "currentParticipants": 5,
    "availableSpots": 5
  },
  {
    "id":3,
    "name": "Кроссфит",
    "time": "13:00 - 14:00",
    "maxParticipants": 20,
    "currentParticipants": 15,
    "availableSpots": 5
  },
  {
    "id":4,
    "name": "Танцы",
    "time": "14:30 - 15:30",
    "maxParticipants": 12,
    "currentParticipants": 12,
    "availableSpots": 0
  },
  {
    "id":5,
    "name": "Бокс",
    "time": "16:00 - 17:00",
    "maxParticipants": 8,
    "currentParticipants": 6,
    "availableSpots": 2
  }
]`;

const key = "mySchedule";
let mySchedule = [];
const containerEl = document.querySelector(".schedule__grid");
//нет в ls ключа
if (!localStorage.getItem(key)) {
  //записываем в ls ключ и базу данных
  localStorage.setItem(key, JSON.stringify(mySchedule));
}

const Schedule = JSON.parse(BDfitnes);
//для отладки
console.log(Schedule);
containerEl.innerHTML = Schedule.map((element) => createCardHtml(element)).join(
  ""
);
function createCardHtml(cardBD) {
  return `<div class="grid__card card" data-id="${cardBD.id}">
              <div class="card__info info">
                  <div class="info__id id">
                      <span class="id__text">ID:</span>
                      <span class="id__value">${cardBD.id}</span>
                  </div>
                  <div class="info__name name">
                      <span class="name__text">Название:</span>
                      <span class="name__value">${cardBD.name}</span>
                  </div>
                  <div class="info__time time">
                      <span class="time__text">Время:</span>
                      <span class="time__value">${cardBD.time}</span>
                  </div>
                  <div class="info__maxParticipants maxParticipants">
                      <span class="maxParticipants__text">Макс. участников:</span>
                      <span class="maxParticipants__value">${cardBD.maxParticipants}</span>
                  </div>
                  <div class="info__currentParticipants currentParticipants">
                      <span class="currentParticipants__text">Текущие участники:</span>
                      <span class="currentParticipants__value">${cardBD.currentParticipants}</span>
                  </div>
                  <div class="info__availableSpots availableSpots">
                      <span class="availableSpots__text">Свободные места:</span>
                      <span class="availableSpots__value">${cardBD.availableSpots}</span>
                  </div>
              </div>
              <div class="card__buttons buttons">
                  <button class="buttons__signUp">Записаться</button>
                  <button class="buttons__refuse" >Отказаться</button>
              </div>
          </div>`;
}

// добавление
containerEl.addEventListener("click", (event) => {
  // Проверяем, что кликнули именно по кнопке с классом "buttons__signUp"
  if (!event.target.classList.contains("buttons__signUp")) {
    return;
  }

  const cardEl = event.target.closest(".card");
  const infoForMe = +cardEl.getAttribute("data-id");
  //***для оталадки ============================================
  console.log(`Клик по кнопке "Записаться" для карточки с ID ${infoForMe}`);
  //=======================================================================
  addToSchedule(infoForMe);
});
function addToSchedule(infoForMe) {
  const matchingObject = Schedule.find((card) => card.id === infoForMe);
  if (matchingObject) {
    let myScheduleFromLS = JSON.parse(localStorage.getItem("mySchedule")); // Получаем текущий массив mySchedule из localStorage
    const alreadyExists = myScheduleFromLS.some(
      (item) => item.id === infoForMe
    ); // Проверяем, есть ли уже такой объект в массиве true/false
    if (!alreadyExists) {
      // если alreadyExists неtrue то добавляем
      myScheduleFromLS.push(matchingObject);
      localStorage.setItem("mySchedule", JSON.stringify(myScheduleFromLS));
    }
  }
}
// удаления
containerEl.addEventListener("click", (event) => {
  // Проверяем, что кликнули именно по кнопке с классом "buttons__refuse"
  if (!event.target.classList.contains("buttons__refuse")) {
    return;
  }

  const cardEl = event.target.closest(".card");
  const cardId = +cardEl.getAttribute("data-id");
  console.log(`Клик по кнопке "отказаться", карточка ${cardId}`);
  removeFitnesSchedule(cardId);
});
function removeFitnesSchedule(cardId) {
  const myScheduleFromLS = JSON.parse(localStorage.getItem(key));
  const scheduleIndex = myScheduleFromLS.findIndex(
    (card) => card.id === cardId
  );
  // Если расписание найдено, удаляем его
  if (scheduleIndex !== -1) {
    myScheduleFromLS.splice(scheduleIndex, 1);
    localStorage.setItem(key, JSON.stringify(myScheduleFromLS));
  }
}

// // document.addEventListener("DOMContentLoaded", function () {
// //   const firstDisabledButoon = document.querySelectorAll(".buttons__refuse");
// //   firstDisabledButoon.forEach((element) => {
// //     element.setAttribute("disabled", true);
// //   });
// // });

// // проверка на то что бы количество свободных мест было
// document.addEventListener("DOMContentLoaded", function () {
//   const scheduleElements = document.querySelectorAll(".grid__card"); // Получаем все элементы расписания

//   scheduleElements.forEach((element) => {
//     const currentParticipants = parseInt(
//       element.querySelector(".currentParticipants__value").textContent
//     );
//     const maxParticipants = parseInt(
//       element.querySelector(".maxParticipants__value").textContent
//     );
//     const signUpButton = element.querySelector(".buttons__signUp");

//     if (currentParticipants === maxParticipants) {
//       signUpButton.disabled = true;
//     }
//   });
// });

//если есть запись находим элемент с данным id и у него добавляем +1 и запускаем switchButton(id)

//отслеживаем клики на всем блоке карточек
// при клике на кнопку отказаться находим id делаем -1 и запускаем switchButton(id)

//function switchButton(id)
