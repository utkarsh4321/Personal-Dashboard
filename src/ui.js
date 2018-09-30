import { store } from './storage';
import { take } from './fetch';
import { menu } from './menu';
class UI {
  constructor() {
    this.menu = document.querySelector('.menu');
    this.todo = document.getElementById('maa');
    this.weather = document.getElementById('weather-lay');
    this.middle = document.querySelector('.content2');
    this.intro = document.getElementById('intro');
    this.main_section = document.getElementById('main-section');
    this.main_showcase = document.getElementById('main-showcase');
    this.loader = document.getElementById('loaders');
    this.loaders = document.getElementById('loader');
    this.my_list = document.getElementById('my_list');
    this.main_form = document.querySelector('.task-area');
    this.quate = document.querySelector('.quat');
    this.local = document.querySelector('.local');
    this.maa = document.getElementById('maa');
    this.quote = document.querySelector('.quata');
    this.todoLink = document.querySelector('#todolink');
    this.background = document.querySelector('.background-img');
    this.capturetwo = document.querySelector('.capture-2');
  }

  showMenu() {
    this.menu.style.display = 'block';
    this.todo.style.display = 'none';
    this.weather.style.display = 'none';
  }
  hideMenu() {
    this.menu.style.display = 'none';
  }
  showTodo() {
    this.todo.style.display = 'block';
    this.menu.style.display = 'none';
    this.weather.style.display = 'none';
  }
  hideTodo() {
    this.todo.style.display = 'none';
  }

  showWeather(data) {
    this.weather.style.display = 'block';

    this.setWeatherInScreen(data);

    this.menu.style.display = 'none';
    this.todo.style.display = 'none';
  }

  hideWeather() {
    this.weather.style.display = 'none';
  }
  docs() {
    this.menu.style.display = 'none';
    this.todo.style.display = 'none';
    this.weather.style.display = 'none';
  }
  showtime(hour, minute) {
    const twelve = store.getTwelveHour();
    if (twelve === true) {
      const times = this.middle.children[0];
      hour = hour % 12;
      hour = hour ? hour : 12;
      minute = minute < 10 ? `0${minute}` : minute;
      times.innerHTML = `${hour}:${minute}`;
    }
    console.log(hour);
  }
  setName(input) {
    const userName = this.middle.children[1];
    const hour = new Date().getHours();

    console.log(hour);

    if (hour === 0) {
      userName.innerHTML = `Good evening,${input}`;
    } else if (hour < 12) {
      userName.innerHTML = `Good morning,${input}`;
    } else if (hour >= 12 && hour <= 17) {
      userName.innerHTML = `Good afternoon,${input}`;
    } else if (hour >= 17 && hour <= 24) {
      userName.innerHTML = `Good evening,${input}`;
    }

    this.intro.style.display = 'none';
    this.main_section.style.display = 'block';
  }
  // This function is load the page on DOM LOAD
  setNameOnLoad(input) {
    const userName = this.middle.children[1];
    const hour = new Date().getHours();
    console.log(hour);
    if (hour === 0) {
      userName.innerHTML = `Good evening,${input}`;
    } else if (hour < 12) {
      userName.innerHTML = `Good morning,${input}`;
    } else if (hour >= 12 && hour <= 17) {
      userName.innerHTML = `Good afternoon,${input}`;
    } else if (hour >= 17 && hour <= 24) {
      userName.innerHTML = `Good evening,${input}`;
    }
    console.log(new Date().getMinutes());
  }
  // FUNCTION FOR THE Twentyhour clock

  setTwentyFourHourClock(hour, minute) {
    const twenty = store.getTwentyHour();

    if (twenty === true) {
      const times = this.middle.children[0];
      minute = minute < 10 ? `0${minute}` : minute;
      hour = hour === 0 ? `12` : hour;
      times.innerHTML = `${hour}:${minute}`;
    }

    console.log(hour);
  }

  // FUNCTION FOR SET THE TASK
  setTask(task) {
    const mylist = this.my_list;
    mylist.innerHTML = `<li class="collection-item" id="ingo">

    <p style="display: inline; class="white-text">
      <input type="checkbox" id="test" class="left" />
      <label for="test" id="label" class="label-check">${task
        .charAt(0)
        .toUpperCase() + task.slice(1)}</label>

    </p>



    <a href="#" style="color:#fff" class="cancel-me">
      <span class="caont">X</span>
    </a>
   
  </li>
  
  `;

    let taskCheckTodo = store.getCheckTask();
    if (taskCheckTodo.length !== 0) {
      taskCheckTodo.forEach(element => {
        document.querySelector('#test').checked = element.status;
        document.querySelector('#label').style.textDecoration = 'line-through';
        document.querySelector('#label').style.color = '#555';
      });
    }

    this.main_form.style.display = 'none';
    this.selectTask();
    this.cancelTask();
  }
  // ============== FUNCTION FOR THE CANCEL TASK ==============
  cancelTask() {
    document.getElementById('ingo').addEventListener('click', canBe);
    let capture = this;
    function canBe(e) {
      if (e.target.classList.contains('caont')) {
        e.target.parentElement.parentElement.remove();

        capture.main_form.style.display = 'block';

        // REMOVE ITEM FROM THE LOCAL STORAGE

        localStorage.removeItem('task');
      }

      e.preventDefault();
    }
  }
  // =========== Function FOR THE SELECT TASK ===================
  selectTask() {
    document.querySelector('#label').addEventListener('click', cancel);
    let showCheck = false;
    let capture = this;
    function cancel(e) {
      // ++++++++++++++ SELCTING THE TASK =======================
      if (!showCheck) {
        e.target.previousElementSibling.checked = true;
        e.target.style.textDecoration = 'line-through';
        e.target.style.color = '#555';
        e.target.parentElement.nextElementSibling.children[0].innerHTML = `<span>+</span>`;
        let taskObj = {
          status: true,
          text: e.target.textContent
        };
        store.setCheckTask(taskObj);
        capture.apper();
        // capture.main_form.style.display = 'none';
        e.target.parentElement.nextElementSibling.addEventListener(
          'click',
          e => {
            e.target.parentElement.parentElement.parentElement.remove();
            capture.hideapper();
            capture.main_form.style.display = 'block';

            //     // REMOVING ITEM FROM THE LOCAL STORAGE
            localStorage.removeItem('task');
            e.preventDefault();
          }
        );

        showCheck = true;
      } else {
        // =========== UNSELECT THE TASK ==================
        e.target.previousElementSibling.checked = false;
        e.target.style.textDecoration = 'none';
        e.target.style.color = '#fff';

        e.target.parentElement.nextElementSibling.children[0].innerHTML = `<span>X</span>`;
        let taskCheck = store.getCheckTask();
        taskCheck.forEach((task, index) => {
          taskCheck.splice(index, 1);
        });
        localStorage.setItem('taskCheck', JSON.stringify(taskCheck));
        capture.hideapper();

        // capture.main_form.style.display = 'block';
        // e.target.parentElement.parentElement.parentElement.remove();
        showCheck = false;
      }

      e.preventDefault();
    }
  }
  // FUNCTION FOR THE APPER

  apper() {
    let arr = [
      'Awesome work',
      'way to go',
      'Nice.',
      'Good jod!',
      'Great work!',
      'Well Done!'
    ];
    let geto = arr[parseInt(Math.random() * 7)];
    const p = document.createElement('p');
    p.className = 'apper';
    p.appendChild(document.createTextNode(geto));
    this.main_form.style.display = 'none';
    this.middle.insertBefore(p, this.main_form);
  }
  hideapper() {
    this.main_form.previousElementSibling.style.display = 'none';
  }

  // FUNCTION FOR THE SET TASK ON LOAD THAT FIRES ONTO THE DOM LOADED
  setTaskOnLoad(task) {
    this.setTask(task);
  }
  // ================= SET THE QUATATION ON SCREEN ==================
  showQuate(data) {
    this.quate.textContent = data;
  }
  // =================== FUNCTION FOR THE SHOW WEATHER ==========
  // setWeather(data) {
  //   const div = this.local.children[1].children[0];
  //   const temp = div.children[1].children[0];
  //   temp.innerHTML = `${data.current.temp_c}&#8451`;
  //   console.log(data);
  // }
  // ========== FUNCTION FOR THE SHOW THE WEATHER INTO THE CLICK ===========
  setWeatherInScreen(data) {
    this.weather.innerHTML = `<div class="card horizontal" id="tiger">

    <div class="card-stacked">
      <div class="card-content" id="weather-content">
        <h6>${data.location.name}</h6>
        <p id="linkt">${data.current.condition.text}</p>
        <div class="icon" style="font-size:3rem;">
          <span id="my-span">
            <img src="${
              data.current.condition.icon
            }" style="width:4rem; height=4rem;">
          </span>
          <span style="font-size:4rem;">
          ${parseInt(data.current.temp_c)}&#8451;</span>
        </div>
      </div>
      <div class="card-action">
      <form id="my-form">
<input type="text" placeholder="city" autocomplete="off" id="input-city">



</form>
      </div>
    </div>
  </div>`;

    this.saveMeScreen();
  }
  // FUNCTION FOR THE SAVEMESCREEN

  saveMeScreen() {
    document.getElementById('my-form').addEventListener('submit', e => {
      const input = document.getElementById('input-city').value;
      console.log(input);
      take
        .getWeather(input)
        .then(data => {
          this.weather.querySelector('h6').textContent = data.location.name;
          this.weather.querySelector('p').textContent =
            data.current.condition.text;
          this.weather.querySelector('#my-span').innerHTML = ` <img src="${
            data.current.condition.icon
          }" style="width:4rem; height=4rem;">`;
        })
        .catch(err => {
          Materialize.toast('please Check your connection or city name', 4000);
        });

      e.preventDefault();
    });
  }
  //FUNCTION FOR THE SET THE WEATHER ONN TO TOP OF THE SCREEN
  setMeWeather(data) {
    console.log(`This is city ${data}`);
    this.local.children[1].children[0].innerHTML = `  <span>
    <img src="${data.current.condition.icon}">
  </span>
  <span>
    <h5>${parseInt(data.current.temp_c)} &#8451;</h5>
    <p>${data.location.name}</p>
  </span>`;
  }

  // FUNCTION FOR HIDE THE TODO START BUTTON
  hideSmallTodo() {
    this.maa.querySelector('#todo-intro').style.display = 'none';
    this.maa.querySelector('p').style.display = 'none';
    this.maa.querySelector('a').style.display = 'none';
  }
  // FUNCTION FOR SHOW TODO ON LOAD
  getTodoOnLoad() {
    const getTodo = store.getTodo();
    const check = store.getCheck();
    getTodo.forEach(element => {
      const list = document.createElement('li');
      const span1 = document.createElement('a');

      list.id = 'todo-task';
      span1.className = 'todo-cancel-btn';
      span1.appendChild(document.createTextNode('X'));

      list.innerHTML = `<p style="display: inline; class="white-text">
      <input type="checkbox" class="left"/>
      <label for="test" class="label-check" id="white-text">${element
        .charAt(0)
        .toUpperCase() + element.slice(1)}</label>
  
    </p>`;
      list.appendChild(span1);
      document.getElementById('todo-ul').appendChild(list);
      if (check.length !== 0) {
        check.forEach(check => {
          if (element === check.text) {
            let textt = document.querySelectorAll('#white-text');
            textt.forEach(label => {
              if (label.textContent.toLowerCase() === check.text) {
                label.previousElementSibling.checked = check.status;
                label.style.color = '#555';
                label.style.textDecoration = 'line-through';
              }
            });
          }
        });
      }
    });

    console.log(getTodo);
    this.todoCheck();
  }

  //========== FUNCTION FOR THE SHOW FORM ========

  showForm() {
    document.getElementById('card-form').innerHTML = `<form id="todo-form">
     <input type="text" placeholder="todo" id="diss" autocomplete="off">

  </form>`;
  }

  // FUNCTION FOR  SHOW THE SMALL TODO BTN
  showSmallTodo() {
    this.maa.querySelector('#todo-intro').style.display = 'block';
    this.maa.querySelector('p').style.display = 'block';
    this.maa.querySelector('a').style.display = 'inline-block';
  }

  // ========= FUNCTION FOR THE MAKE TODO ==============
  makeTodo(todo) {
    const list = document.createElement('li');
    const span1 = document.createElement('a');

    list.id = 'todo-task';
    span1.className = 'todo-cancel-btn';

    span1.appendChild(document.createTextNode('X'));
    list.innerHTML = `<p style="display: inline; class="white-text">
    <input type="checkbox" class="left"/>
    <label for="test" class="label-check" id="white-text">${todo
      .charAt(0)
      .toUpperCase() + todo.slice(1)}</label>

  </p>`;

    list.appendChild(span1);
    document.getElementById('todo-ul').appendChild(list);
    console.log(list);
    this.todoCheck();
    // STORE THE TODO INTO THE LOCALSTORAGE
    store.setTodo(todo);
  }
  // FUNCTION FOR THE CHECKED THE TODO ITEM
  todoCheck() {
    document.getElementById('todo-ul').addEventListener('click', checkMark);
    let showTodo = false;

    function checkMark(e) {
      if (e.target.classList.contains('label-check')) {
        if (!showTodo) {
          e.target.previousElementSibling.checked = true;

          let checkObj;

          checkObj = {
            status: true,
            text: e.target.textContent.toLowerCase()
          };
          console.log(e.target.previousElementSibling.checked);
          store.setCheck(checkObj);

          e.target.style.textDecoration = 'line-through';
          // e.target.style.textDecorationColor = '#fff';
          e.target.style.color = '#555';
          showTodo = true;
        } else {
          e.target.previousElementSibling.checked = false;
          let checkarray = store.getCheck();
          checkarray.forEach(function(element, index) {
            if (e.target.textContent.toLowerCase() === element.text) {
              checkarray.splice(index, 1);
              // let input = document.querySelectorAll('.left');
              // input.forEach(inp => {
              //   if (inp.checked !== element.status) {

              //   }
              // });
              if (checkarray.length === 1) {
                checkarray.pop();
              }
              console.log(index);
            }
          });
          localStorage.setItem('check', JSON.stringify(checkarray));
          e.target.style.textDecoration = 'none';
          e.target.style.color = '#fff';
          showTodo = false;
        }
      }
    }
  }
  // FUNCTION FOR THE AUTHOR
  showAuthor(data) {
    document.getElementById('author').innerHTML = data;
  }

  // FUNCTION FOR THE SET THE BACKGROUND IMAGE
  // setBackgroundImg(url) {
  //   document.getElementById('list').addEventListener('click', addBackgroundImg);
  //   let title = store.getTitle();

  //   let capture = this;
  //   function addBackgroundImg(e) {
  //     if (e.target.classList.contains('setbackground')) {
  //       const tit = e.target.getAttribute('title');
  //       console.log(tit);
  //       title.forEach(element => {
  //         if (tit === element) {
  //           capture.background.style.background = `url('./img/${url}') no-repeat`;
  //           capture.background.style.backgroundSize = 'cover';
  //           capture.background.style.backgroundPosition = 'center';
  //           capture.background.style.width = '100vw';
  //           capture.background.style.height = '100vh';
  //           store.setBackground(url);
  //         }
  //       });
  //     }

  //     capture.removeBackgroundImg();

  //     e.preventDefault();
  //   }
  // }

  // removeBackgroundImg() {
  //   const back = store.getBackground();
  //   document.getElementById('list').addEventListener('click', e => {
  //     if (e.target.classList.contains('removetitle')) {
  //       if (back !== undefined) {
  //         const ram = store.getBackground();
  //         if (ram !== undefined) {
  //           e.target.parentElement.remove();

  //           const ele = e.target.nextElementSibling.getAttribute('title');
  //           let tit = store.getTitle();
  //           tit.forEach((element, index) => {
  //             if (ele === element) {
  //               tit.splice(index, 1);
  //             }
  //           });
  //           localStorage.setItem('titleimg', JSON.stringify(tit));
  //           const backagain = store.getBackground();
  //           if (backagain === undefined) {
  //             this.background.style.background = `url('https://source.unsplash.com/user/erondu') no-repeat`;
  //             this.background.style.backgroundSize = 'cover';
  //             this.background.style.backgroundPosition = 'center';
  //             this.background.style.width = '100vw';
  //             this.background.style.height = '100vh';
  //           }
  //         }
  //       } else {
  //         const rama = store.getBackground();
  //         if (rama === undefined) {
  //           e.target.parentElement.remove();
  //           let title = store.getTitle();
  //           const tim = e.target.nextElementSibling.getAttribute('title');
  //           title.forEach((element, index) => {
  //             if (tim === element) {
  //               title.splice(index, 1);
  //             }
  //           });
  //           localStorage.setItem('titleimg', JSON.stringify(title));
  //         }
  //       }
  //     }

  //     e.preventDefault();
  //   });
  // }

  // removeTitle() {
  //   document.getElementById('list').addEventListener('click', removeBackground);
  //
  //   function removeBackground(e) {
  //     if (e.target.classList.contains('removetitle')) {
  //       e.target.parentElement.remove();

  //       const tim = e.target.nextElementSibling.getAttribute('title');
  //       title.forEach((element, index) => {
  //         if (tim === element) {
  //           title.splice(index, 1);
  //         }
  //       });
  //       localStorage.setItem('titleimg', JSON.stringify(title));
  //     }
  //     e.preventDefault();
  //   }
  // }

  // ========== FUNCTION FOR THE MAIN MENU ===========
  // FUNCTION FOR THE SHOW MAIN LINK
  showMainLink() {
    console.log('show');
    this.local.children[0].style.visibility = 'visible';
  }
  // FUNCTION FOR THE REMOVE LINK
  removeMainLink() {
    console.log('remove');
    this.local.children[0].style.visibility = 'hidden';
  }

  // FUNCTION FOR THE SHOW THE WEATHER LINK
  showWeatherLink() {
    this.local.children[1].style.visibility = 'visible';
  }

  removeWeatherLink() {
    this.local.children[1].style.visibility = 'hidden';
  }
  // FUNCTION FOR THE FOCUS LINk
  showFocusLink() {
    this.main_form.style.display = 'block';
  }

  removeFocusLink() {
    this.main_form.style.display = 'none';
  }
  // FUNCTION FOR THE QUOTE LINK
  showQuoteLink() {
    this.quote.style.display = 'block';
  }
  removeQuoteLink() {
    this.quote.style.display = 'none';
  }
  //FUNCTION FOR THE TODO LINK
  showTodoLink() {
    this.todoLink.style.visibility = 'visible';
  }
  removeTodoLink() {
    this.todoLink.style.visibility = 'hidden';
  }

  // ================ FUNCTION FOR THE SHOW THE MAIN ===================
  showMain() {
    this.main_section.style.display = 'block';
    this.intro.style.display = 'none';
  }
  // ============== FUNCTION FOR THE SHOW THE USER ====================
  showUser() {
    this.intro.style.display = 'block';
    this.main_section.style.display = 'none';
  }
  hideMainArea() {
    this.main_section.style.display = 'none';
  }
  showMainArea() {
    this.main_section.style.display = 'block';
  }

  // ================ FUNCTION FOR THE SHOW THE LOADER ===================
  showLoader() {
    this.loader.style.display = 'block';
  }
  // ================ FUNCTION FOR HIDE THE LOADER ========================
  hideLoader() {
    this.loaders.style.display = 'none';
  }
}
export const ui = new UI();
