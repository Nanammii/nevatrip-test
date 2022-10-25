// test 2

const routeMain = 700;
const routeABA = 1200;
const timeTravel = 50;

const form = document.querySelector('.main-container__form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(form);
  console.log(...data);

});

const buttonSum = document.querySelector('.main-container__button');
const route = document.getElementById('route');
const time = document.getElementById('time');
const tiketNum = document.getElementById('num');

buttonSum.addEventListener('click', function (e) {
  let price = routeMain * tiketNum.value;
  console.log(price);
  const div = document.createElement('p');
  div.classList.add('main-container__wrapp--text');
  div.innerHTML = `<p class="main-container__text">Вы выбрали ${tiketNum.value} билета по маршруту из A в B стоимостью ${price} руб.</p>
<p class="main-container__text">Это путешествие займет у вас ${timeTravel} минут.</p>
<p class="main-container__text">Теплоход отправляется в ${time.value}, а прибудет в 18-00.</p>`;
  form.appendChild(div);
})

