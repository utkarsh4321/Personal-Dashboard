// const menuBtn = document.querySelector('#btn-1'),
//   todoBtn = document.querySelector('#todo-1'),
//   weatherBtn = document.querySelector('#weather-1'),
//   menu = document.querySelector('.menu'),
//   todo = document.querySelector('#maa'),
//   weather = document.querySelector('#weather-lay');

import { ui } from './ui';
import { store } from './storage';
import { take } from './fetch';
import { menu } from './menu';
// ADD the background image
(function() {
  // document.addEventListener('DOMContentLoaded', getBackground);
  // ADD DOM CONTENT LOADED cheking the localstorage
  document.addEventListener('DOMContentLoaded', checkName);
  // FUNCTION FOR THE VALIDATION
  // document.getElementById('first_name').addEventListener('blur', checkValid);
  // ADD event to the INTRO form
  document.getElementById('intro-form').addEventListener('submit', submitIntro);

  // ADD Event to the menuBtn
  document.getElementById('btn-1').addEventListener('click', menuBtn);

  // // ADd Event to the todoBtn

  document.getElementById('todo-1').addEventListener('click', todoBtn);
  // Add Event to the weatherBtn
  document.getElementById('weather_btn').addEventListener('click', weatherBtn);
  // Add event to the document
  document.addEventListener('dblclick', noOne);
  // EVENT FOR THE TODAY TASK
  document.getElementById('main-form').addEventListener('submit', taskInput);
  // EVENT FOR ADDING THE TODO INTO THE TODO
  document.getElementById('todo-open').addEventListener('click', openTodo);
  // REMOVE THE TODO FROM THE SCREEN
  document.getElementById('todo-ul').addEventListener('click', removeTodo);

  // FUNCTION FOR THE MENU BTN
  document
    .querySelector('.list-item')
    .addEventListener('click', selectFirstList);
  // FUNCTION FOR THE HELP MENU
  document.querySelector('.list-2').addEventListener('click', selectSecondList);
  // FUNCTION FOR THE MENU BUTTON
  document.querySelector('.capture-2').addEventListener('click', showHide);
  // FUNCTION FOR THE GOOGLE SEARCH
  document.getElementById('fillform').addEventListener('submit', formFill);

  // FUNCTION FOR THE GITHUB FINDER
  document.getElementById('github').addEventListener('click', githubFinder);

  // EVENTLISTENER FOR THE ADD BACKGROUND IMAGE

  // document.getElementById('list').addEventListener('click', setBackgroundImg);
})();

// Event Ended

let showmenu = false;
function menuBtn(e) {
  if (!showmenu) {
    ui.showMenu();

    showmenu = true;
  } else {
    ui.hideMenu();
    showmenu = false;
  }

  e.preventDefault();
}
let showtodo = false;
function todoBtn(e) {
  if (!showtodo) {
    ui.showTodo();

    showtodo = true;
  } else {
    ui.hideTodo();
    showtodo = false;
  }

  e.preventDefault();
}
let showweather = false;
function weatherBtn(e) {
  if (!showweather) {
    take
      .getLocation()
      .then(data => {
        take
          .getWeather(data.city)
          .then(data => {
            ui.showWeather(data);
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => console.log(err));

    showweather = true;
  } else {
    ui.hideWeather();
    showweather = false;
  }

  e.preventDefault();
}
// Document  dblClick event

function noOne(e) {
  ui.docs();

  e.preventDefault();
}
// Time Function
// function setTime() {
//   const time = new Date();
//   const hour = time.getHours();
//   const minute = time.getMinutes();
//   ui.showtime(hour, minute);
// }
// setInterval(setTime, 1000);

// FUNCTION FOR THE validation
// function checkValid(e) {
//   const val = document.getElementById('first_name').value;
//   const re = /^[a-z][A-Z]{2,10}$/;
//   if (!re.test(val)) {
//     console.log('please corret');
//   } else {
//     console.log('plese ok');
//   }
//   e.preventDefault();
// // }

// INTRO EVENT LISTENER User Name

function submitIntro(e) {
  const val = document.getElementById('first_name');
  const re = /^[A-Za-z\s]{3,10}$/;
  if (!re.test(val.value)) {
    Materialize.toast('please write your name', 4000);
    e.target.name.value = '';
  } else {
    const inputValue = document.getElementById('first_name').value;

    setTimeout(function() {
      store.storedata(inputValue);
      ui.setName(inputValue.charAt(0).toUpperCase() + inputValue.slice(1));
    }, 4000);
  }

  e.preventDefault();
}

// EVENT OF DOMCONTENT LOADED
function checkName(e) {
  if (localStorage.getItem('name') === null) {
    ui.showLoader();

    setTimeout(function() {
      ui.hideLoader();
      ui.showUser();
    }, 3000);
  } else {
    ui.showLoader();

    setTimeout(function() {
      ui.showMain();
      ui.hideLoader();
    }, 3000);
  }
  const name = store.getdata();

  name.forEach(element => {
    ui.setNameOnLoad(element.charAt(0).toUpperCase() + element.slice(1));
  });
  // FUNCTION FOR THE TASK
  const task = store.getTask();
  if (task !== undefined) {
    ui.setTaskOnLoad(task);
  }
  // FUNCTION FOR THE GET THE QUTAITION
  take
    .getQuate()
    .then(data => {
      ui.showQuate(data.contents.quotes[0].quote);
      ui.showAuthor(data.contents.quotes[0].author);
    })
    .catch(err => console.log(err));

  //============= FUNCTION FOR THE SET WEATHER ===============
  take
    .getLocation()
    .then(data => {
      console.log(data.city);
      take
        .getWeather(data.city)
        .then(data => {
          ui.setMeWeather(data);
          store.setWeatherOnline(data);
        })
        .catch(err => {
          Materialize.toast('please check your connection', 4000);
          ui.setWeatherOnScreen();
        });
    })
    .catch(err => {
      Materialize.toast('please check your connection', 4000);
    });
  // (function() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       data => {
  //         take
  //           .getLocation(data.coords.latitude, data.coords.longitude)
  //           .then(data => {
  //             const location = data.results[0].formatted_address;
  //             take
  //               .getWeather(location.split(',')[3])
  //               .then(data => console.log(data))
  //               .catch(err => console.log(err));
  //           })
  //           .catch(err => {
  //             console.log(err);
  //           });
  //       },
  //       err => {
  //         console.log(err);
  //       }
  //     );
  //   }
  // })();
  // FUNCTION FOR THE LOADEVENT ONTO THE TODO
  let todo = store.getTodo();
  if (todo.length !== 0) {
    ui.getTodoOnLoad();
    ui.hideSmallTodo();
    ui.showForm();
    formSub();
    document.getElementById('todo-count').innerHTML = `${todo.length} Todo`;
  } else {
    ui.showSmallTodo();
  }

  menu.generalContent();

  // FUNCTION FORN THE MAIN LINK BUTTON

  const main = store.getMainLink();
  if (main === true) {
    ui.showMainLink();

    document.querySelector('.linkswitch').checked = true;
  } else {
    ui.removeMainLink();
    document.querySelector('.linkswitch').checked = false;
  }

  // FUNCTION FOR THE WEATHER BUTTON
  const weathers = store.getWeatherLink();
  if (weathers === true) {
    ui.showWeatherLink();
    document.querySelector('.weatherswitch').checked = true;
  } else {
    ui.removeWeatherLink();
    document.querySelector('.weatherswitch').checked = false;
  }
  // FUNCTION FOR THE Todo BUTTON
  const todos = store.getTodoLink();
  if (todos === true) {
    ui.showTodoLink();
    document.querySelector('.todoswitch').checked = true;
  } else {
    ui.removeTodoLink();
    document.querySelector('.todoswitch').checked = false;
  }
  // FUNCTION FOR THE FOCUS BUTTON
  const focuss = store.getFocusLink();
  if (focuss === true) {
    ui.showFocusLink();
    document.querySelector('.focusswitch').checked = true;
  } else {
    ui.removeFocusLink();
    document.querySelector('.focusswitch').checked = false;
  }
  // FUNCTION FOR THE QUOTES BUTTON

  const quotes = store.getQuoteLink();
  if (quotes === true) {
    ui.showQuoteLink();
    document.querySelector('.quateswitch').checked = true;
  } else {
    ui.removeQuoteLink();
    document.querySelector('.quateswitch').checked = false;
  }

  // FUNCTION FOR THE SHOW THE REAL TIME
  const twelve = store.getTwelveHour(),
    twenty = store.getTwentyHour();
  if (twelve === true) {
    function setTime() {
      const time = new Date();
      const hour = time.getHours();
      const minute = time.getMinutes();
      ui.showtime(hour, minute);
    }
    setInterval(setTime, 1000);

    document.querySelector('.twelvehour').style.color = '#fff';
  } else if (twenty === true) {
    function realTime() {
      const time = new Date();
      const hour = time.getHours();
      const min = time.getMinutes();
      ui.setTwentyFourHourClock(hour, min);
    }
    setInterval(realTime, 1000);

    document.querySelector('.twentyfourhour').style.color = '#fff';
  }

  e.preventDefault();
}

// TASKInput FUNCTION OF EVENTLISTENER

function taskInput(e) {
  const first_name2 = document.getElementById('first_name2').value;
  const re = /^[A-Za-z]{2,10}$/;
  if (!re.test(first_name2)) {
    Materialize.toast('please write your task', 4000);
  } else {
    const input = e.target.task.value;

    ui.setTask(input);
    store.setTask(input);
    e.target.task.value = '';
  }

  e.preventDefault();
}
// ========= FUNCTION FOR ADDING TO THE TODO ==============

function openTodo(e) {
  ui.hideSmallTodo();
  ui.showForm();
  formSub();
  e.preventDefault();
}
function formSub() {
  document.getElementById('todo-form').addEventListener('submit', fillForm);
  function fillForm(e) {
    const todoInput = document.getElementById('diss').value;
    const re = /^[a-zA-Z0-9 ][a-zA-Z0-9 ]*[a-zA-Z0-9 ]{2,10}$/;
    if (!re.test(todoInput)) {
      Materialize.toast('please write your Task', 4000);
    } else {
      ui.makeTodo(todoInput);
      let todo = store.getTodo();
      document.getElementById('todo-count').innerHTML = `${todo.length} Todo`;
      document.getElementById('diss').value = '';
    }

    e.preventDefault();
  }
}

// FUNCTION FOR THE REMOVE THE TODO FROM THE SCCREEN
function removeTodo(e) {
  if (e.target.classList.contains('todo-cancel-btn')) {
    e.target.parentElement.remove();
    let checkin = store.getCheck();
    let todoArr = store.getTodo();
    todoArr.forEach(function(element, index) {
      checkin.forEach((check, inn) => {
        if (element === check.text) {
          checkin.splice(inn, 1);
          console.log(inn);
          if (checkin.length === 1) {
            checkin.pop();
          }
        }
      });
    });
    localStorage.setItem('check', JSON.stringify(checkin));
    removeTodoLs(e.target.parentElement);
  }
}
function removeTodoLs(taskList) {
  console.log(taskList);
  const todoArr = store.getTodo();

  todoArr.forEach(function(task, index) {
    if (taskList.children[0].children[1].textContent.toLowerCase() === task) {
      todoArr.splice(index, 1);
    }
  });
  localStorage.setItem('todo', JSON.stringify(todoArr));
  document.getElementById('todo-count').innerHTML = `${todoArr.length} Todo`;
  if (todoArr.length === 0) {
    ui.showSmallTodo();
    document.getElementById('diss').style.display = 'none';
  }
}

// ======== FUNCTION FOR THE LIST ITEM OF MENU=========
function selectFirstList(e) {
  console.log('hii');
  if (e.target.classList.contains('open-general')) {
    console.log('hiii');
    menu.generalContent();
    e.target.parentElement.nextElementSibling.children[0].removeAttribute('id');
    e.target.parentElement.nextElementSibling.nextElementSibling.children[0].removeAttribute(
      'id'
    );
    e.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.children[0].removeAttribute(
      'id'
    );
    e.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children[0].removeAttribute(
      'id'
    );
    e.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children[0].removeAttribute(
      'id'
    );
    e.target.id = 'active';
  }
  if (e.target.classList.contains('open-todo')) {
    menu.todoContent();
    e.target.id = 'active';
    e.target.parentElement.previousElementSibling.children[0].removeAttribute(
      'id'
    );
    e.target.parentElement.nextElementSibling.children[0].removeAttribute('id');
    e.target.parentElement.nextElementSibling.nextElementSibling.children[0].removeAttribute(
      'id'
    );
    e.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.children[0].removeAttribute(
      'id'
    );
    e.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children[0].removeAttribute(
      'id'
    );
  }
  if (e.target.classList.contains('open-photos')) {
    e.target.id = 'active';
    e.target.parentElement.previousElementSibling.children[0].removeAttribute(
      'id'
    );
    e.target.parentElement.previousElementSibling.previousElementSibling.children[0].removeAttribute(
      'id'
    );
    e.target.parentElement.nextElementSibling.children[0].removeAttribute('id');
    e.target.parentElement.nextElementSibling.nextElementSibling.children[0].removeAttribute(
      'id'
    );
    e.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.children[0].removeAttribute(
      'id'
    );

    menu.photosContent();
  }
  if (e.target.classList.contains('open-quates')) {
    menu.quatesContent();
    e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.children[0].removeAttribute(
      'id'
    );
    e.target.parentElement.previousElementSibling.previousElementSibling.children[0].removeAttribute(
      'id'
    );
    e.target.parentElement.previousElementSibling.children[0].removeAttribute(
      'id'
    );
    e.target.parentElement.nextElementSibling.nextElementSibling.children[0].removeAttribute(
      'id'
    );

    e.target.parentElement.nextElementSibling.children[0].removeAttribute('id');
    e.target.id = 'active';
  }
  if (e.target.classList.contains('open-links')) {
    menu.linksContent();

    e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.children[0].removeAttribute(
      'id'
    );
    e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.children[0].removeAttribute(
      'id'
    );
    e.target.parentElement.previousElementSibling.previousElementSibling.children[0].removeAttribute(
      'id'
    );
    e.target.parentElement.previousElementSibling.children[0].removeAttribute(
      'id'
    );

    e.target.parentElement.nextElementSibling.children[0].removeAttribute('id');

    e.target.id = 'active';
  }
  if (e.target.classList.contains('open-balance')) {
    menu.balanceContent();
    e.target.id = 'active';

    e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.children[0].removeAttribute(
      'id'
    );
    e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.children[0].removeAttribute(
      'id'
    );
    e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.children[0].removeAttribute(
      'id'
    );
    e.target.parentElement.previousElementSibling.previousElementSibling.children[0].removeAttribute(
      'id'
    );
    e.target.parentElement.previousElementSibling.children[0].removeAttribute(
      'id'
    );
  }

  e.preventDefault();
}
// FUNCTION FOR THE SECOND LIST

function selectSecondList(e) {
  if (e.target.classList.contains('open-help')) {
    menu.helpContent();
    e.target.id = 'active';
    e.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.children[0].removeAttribute(
      'id'
    );
    e.target.parentElement.nextElementSibling.nextElementSibling.children[0].removeAttribute(
      'id'
    );
    e.target.parentElement.nextElementSibling.children[0].removeAttribute('id');
  }
  if (e.target.classList.contains('open-new')) {
    menu.newContent();
    e.target.id = 'active';
    e.target.parentElement.nextElementSibling.nextElementSibling.children[0].removeAttribute(
      'id'
    );
    e.target.parentElement.nextElementSibling.children[0].removeAttribute('id');
    e.target.parentElement.previousElementSibling.children[0].removeAttribute(
      'id'
    );
  }
  if (e.target.classList.contains('open-about')) {
    menu.aboutContent();
    e.target.id = 'active';
    e.target.parentElement.previousElementSibling.previousElementSibling.children[0].removeAttribute(
      'id'
    );
    e.target.parentElement.previousElementSibling.children[0].removeAttribute(
      'id'
    );
    e.target.parentElement.nextElementSibling.children[0].removeAttribute('id');
  }

  e.preventDefault();
}
// FUNCTION FOR THE MENU BUTTON
let check = false,
  book = false,
  search = false,
  weather = false,
  focus = false,
  quote = false,
  todo = false,
  clock = false;
function showHide(e) {
  // FUNCTIONING THE LINK BUTTON
  if (e.target.classList.contains('removelink')) {
    if (!check) {
      document.querySelector('.linkswitch').checked = true;
      console.log('ram');
      ui.showMainLink();
      store.setMainLink(true);
      check = true;
    } else {
      document.querySelector('.linkswitch').checked = false;
      console.log('rahim');
      ui.removeMainLink();
      localStorage.removeItem('mainlink');
      check = false;
    }
  }
  // FUNCTION FOR THE BOOKMARK BUTTON
  if (e.target.classList.contains('removebook')) {
    if (!book) {
      document.querySelector('.bookswitch').checked = true;
      console.log('shyam');
      book = true;
    } else {
      document.querySelector('.bookswitch').checked = false;
      console.log('sunder');
      book = false;
    }
  }
  // FUNCTION FOR THE SEARCH BUTTON
  if (e.target.classList.contains('removesearch')) {
    if (!search) {
      document.querySelector('.searchswitch').checked = true;
      console.log('shyam');
      search = true;
    } else {
      document.querySelector('.searchswitch').checked = false;
      console.log('sunder');
      search = false;
    }
  }
  // FUNCTION FOR THE WEATHER BUTTON
  if (e.target.classList.contains('removeweather')) {
    if (!weather) {
      document.querySelector('.weatherswitch').checked = true;
      console.log('shyam');
      store.setWeatherLink(true);
      ui.showWeatherLink();
      weather = true;
    } else {
      document.querySelector('.weatherswitch').checked = false;
      console.log('sunder');
      ui.removeWeatherLink();
      localStorage.removeItem('weatherlink');
      weather = false;
    }
  }
  // FUNCTION FOR THE FOCUS BUTTON
  if (e.target.classList.contains('removefocus')) {
    if (!focus) {
      document.querySelector('.focusswitch').checked = true;
      console.log('shyam');
      ui.showFocusLink();
      store.setFocusLink(true);
      focus = true;
    } else {
      document.querySelector('.focusswitch').checked = false;
      console.log('sunder');
      ui.removeFocusLink();
      localStorage.removeItem('focuslink');
      focus = false;
    }
  }
  // FUNCTION FOR THE QUATE BUTTON
  if (e.target.classList.contains('removequate')) {
    if (!quote) {
      document.querySelector('.quateswitch').checked = true;
      console.log('shyam');
      ui.showQuoteLink();
      store.setQuoteLink(true);
      quote = true;
    } else {
      document.querySelector('.quateswitch').checked = false;
      console.log('sunder');
      localStorage.removeItem('quotelink');
      ui.removeQuoteLink();
      quote = false;
    }
  }
  // FUNCTION FOR THE TODO BUTTON
  if (e.target.classList.contains('removetodo')) {
    if (!todo) {
      document.querySelector('.todoswitch').checked = true;
      console.log('shyam');
      ui.showTodoLink();
      store.setTodoLink(true);
      todo = true;
    } else {
      document.querySelector('.todoswitch').checked = false;
      console.log('sunder');
      localStorage.removeItem('todolink');
      ui.removeTodoLink();
      todo = false;
    }
  }
  // FUNCTION FOR THE CLOCK ButtoN

  if (e.target.classList.contains('twelvehour')) {
    console.log('12 hour');
    document.querySelector('.twelvehour').style.color = '#fff';
    document.querySelector('.twentyfourhour').style.color = '#555';

    function setTime() {
      const time = new Date();
      const hour = time.getHours();
      const minute = time.getMinutes();
      ui.showtime(hour, minute);
    }
    setInterval(setTime, 1000);
    store.setTwelveHour(true);
    localStorage.removeItem('twentyhour');
  }
  if (e.target.classList.contains('twentyfourhour')) {
    console.log('24 hour');
    store.setTwentyHour(true);
    localStorage.removeItem('twelvehour');
    document.querySelector('.twelvehour').style.color = '#555';
    document.querySelector('.twentyfourhour').style.color = '#fff';
    // FUNCTION FOR THE REAL TIME
    function realTime() {
      const time = new Date();
      const hour = time.getHours();
      const min = time.getMinutes();
      ui.setTwentyFourHourClock(hour, min);
    }
    setInterval(realTime, 1000);
  }
  // FUNCTION FOR THE BACKGROUND IMAGE
  if (e.target.classList.contains('btnbackground')) {
    let file = document.querySelector('input[type="file"]');
    file.click();
    file.addEventListener('change', handleFileSelect, false);
    function handleFileSelect(evt) {
      var files = evt.target.files; // FileList object

      // Loop through the FileList and render image files as thumbnails.
      for (var i = 0, f; (f = files[i]); i++) {
        // Only process image files.
        if (!f.type.match('image.*')) {
          continue;
        }

        var reader = new FileReader();

        // Closure to capture the file information.
        reader.onload = (function(theFile) {
          return function(e) {
            // Render thumbnail.
            // var span = document.createElement('span');
            // span.innerHTML = [
            //   '<img id="myphotoframe" src="',
            //   e.target.result,
            //   '" title="',
            //   escape(theFile.name),
            //   '"/>'
            // ].join('');
            // console.log(span);

            let divcol = document.createElement('div');

            divcol.classList.add('col');
            divcol.classList.add('l3');
            divcol.classList.add('m3');
            divcol.classList.add('s3');
            divcol.style.paddingLeft = '0px';

            divcol.style.paddingTop = '10px';
            divcol.id = 'myturn';
            divcol.innerHTML = [
              '<a href="#" id="cross" class="removetitle">X</a><img id="myphotoframe" class="setbackground" src="',
              e.target.result,
              '" title="',
              escape(theFile.name),
              '"/>'
            ].join('');
            store.setTitle(theFile.name);

            document.getElementById('list').insertBefore(divcol, null);
          };
        })(f);

        // Read in the image file as a data URL.
        reader.readAsDataURL(f);

        evt.target.value = '';
        evt.preventDefault();
      }
    }
  }
  e.preventDefault();
}
// FUNCTION FOR THE

// FUNCTION FOR THE FORM FILL
function formFill(e) {
  const input = document.getElementById('input').value;

  window.open(`https://www.google.com/search?q=${input} `, '_blank');

  document.getElementById('input').value = '';
  e.preventDefault();
}
// FUNCTION FOR THE GIHUB FINDER
function githubFinder(e) {
  window.open(`http://localhost:8080/github.html`, '_blank');
  e.preventDefault();
}
