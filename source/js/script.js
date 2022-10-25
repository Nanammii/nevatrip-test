let qualityList = document.querySelectorAll('.qualities__list');

function marker(v) {
  return 'more' + ('00' + v).slice(-3);
}

let more = 1;

const showElem = () => {
  for (let j = 0; j < qualityList.length; j++) {
    console.log(j.length);
    let elements = qualityList.item(j).children;
    console.log(elements);

    if (elements.length > 4) {
      const li = document.createElement('li');
      li.classList.add('qualities__item', 'qualities__item--time', 'qualities__item--more');
      li.id = marker(more++);
      li.innerHTML = `<span class="qualities__start-tour">eщё...</span>`;
      elements.item(3).insertAdjacentElement('beforeBegin', li);
    }

    for (let i = 0; i < elements.length; i++) {
      if (i > 3) {
        elements.item(i).classList.add('qualities__item--visible');
      }
    }
  }
}
showElem();

// let moreToggle = document.querySelectorAll('.qualities__item--more');
// console.log(moreToggle);
//
// const moreBut = () => {
//   for (let i = 0; i < moreToggle.length; i++) {
//     console.log(i);
//     i.addEventListener('click', function (event) {
//       let target = event.target;
//       alert(target.tagName);
//       let elems = target.parentElement.id;
//       console.log(elems);
//       target.item(i).classList.toggle('qualities__item--visible');
//     })
//   }
// }
let moreToggle = document.getElementById('more003');
console.log(moreToggle);

moreToggle.addEventListener('click', function (event) {
  let target = event.target;
  // alert(target.tagName);
  let elems = target.parentElement.parentElement.children;
  console.log(elems);
  for (let i = 0; i < elems.length; i++) {
    if (i > 3) {
      elems.item(i).classList.toggle('qualities__item--visible');
    }
  }
})

// moreToggle.addEventListener('click', function (event) {
//   let target = event.target;
//   alert(target.tagName);
//   let elems = qualitiesList.children;
//   for (let i = 0; i < elems.length; i++) {
//     if (i > 3) {
//       elems.item(i).classList.toggle('qualities__item--more');
//     }
//   }
// })

// moreBut();





