import { ui } from './ui';
class Storage {
  getdata() {
    let data;
    if (localStorage.getItem('name') === null) {
      data = [];
    } else {
      data = JSON.parse(localStorage.getItem('name'));
    }
    return data;
  }
  storedata(input) {
    const data = this.getdata();

    data[0] = input;
    localStorage.setItem('name', JSON.stringify(data));
  }
  getTask() {
    let task;
    if (localStorage.getItem('task') === null) {
      task;
    } else {
      task = JSON.parse(localStorage.getItem('task'));
    }

    return task;
  }
  setTask(input) {
    let task = this.getTask();
    task = input;
    localStorage.setItem('task', JSON.stringify(task));
  }
  // LOCAL STORAGE FOR THE TODO
  getTodo() {
    let todo;
    if (localStorage.getItem('todo') === null) {
      todo = [];
    } else {
      todo = JSON.parse(localStorage.getItem('todo'));
    }

    return todo;
  }
  // FUNCTION  FOR THE SET TODO INTO LOCAL STORAGE
  setTodo(input) {
    const todo = this.getTodo();

    todo.push(input);
    localStorage.setItem('todo', JSON.stringify(todo));
  }

  // FOR CHECK THE TODO AND TASK
  getCheck() {
    let check;
    if (localStorage.getItem('check') === null) {
      check = [];
    } else {
      check = JSON.parse(localStorage.getItem('check'));
    }
    return check;
  }
  setCheck(data) {
    const check = this.getCheck();
    check.push(data);
    localStorage.setItem('check', JSON.stringify(check));
  }
  getCheckTask() {
    let taskCheck;
    if (localStorage.getItem('taskCheck') === null) {
      taskCheck = [];
    } else {
      taskCheck = JSON.parse(localStorage.getItem('taskCheck'));
    }
    return taskCheck;
  }
  setCheckTask(data) {
    let checktask = this.getCheckTask();
    checktask[0] = data;
    localStorage.setItem('taskCheck', JSON.stringify(checktask));
  }

  // ====== FUNCTION FOR THE SET WEATHER ONLINE =========
  setWeatherOnline(data) {}

  // ========== FUNCTION FOR THE SET MAIN LINK ===========

  getMainLink() {
    let mainLink;
    if (localStorage.getItem('mainlink') === null) {
      mainLink;
    } else {
      mainLink = JSON.parse(localStorage.getItem('mainlink'));
    }
    return mainLink;
  }

  setMainLink(data) {
    let main = this.getMainLink();

    main = data;
    localStorage.setItem('mainlink', JSON.stringify(main));
  }

  // FUNCTION FOR THE WEATHER
  getWeatherLink() {
    let weather;
    if (localStorage.getItem('weatherlink') === null) {
      weather;
    } else {
      weather = JSON.parse(localStorage.getItem('weatherlink'));
    }
    return weather;
  }
  setWeatherLink(data) {
    let weather = this.getWeatherLink();
    weather = data;
    localStorage.setItem('weatherlink', JSON.stringify(weather));
  }
  // FUNCTION FOR THE FOCUS LINK
  getFocusLink() {
    let focus;
    if (localStorage.getItem('focuslink') === null) {
      focus;
    } else {
      focus = JSON.parse(localStorage.getItem('focuslink'));
    }
    return focus;
  }
  setFocusLink(data) {
    let focus = this.getFocusLink();
    focus = data;
    localStorage.setItem('focuslink', JSON.stringify(focus));
  }
  // FUNCTION FOR THE QUOTE LINK
  getQuoteLink() {
    let quote;
    if (localStorage.getItem('quotelink') === null) {
      quote;
    } else {
      quote = JSON.parse(localStorage.getItem('quotelink'));
    }
    return quote;
  }
  setQuoteLink(data) {
    let quote = this.getQuoteLink();
    quote = data;
    localStorage.setItem('quotelink', JSON.stringify(quote));
  }

  // FUNCTION FOR THE TODO LINK

  getTodoLink() {
    let todo;
    if (localStorage.getItem('todolink') === null) {
      todo;
    } else {
      todo = JSON.parse(localStorage.getItem('todolink'));
    }
    return todo;
  }
  setTodoLink(data) {
    let todo = this.getTodoLink();
    todo = data;
    localStorage.setItem('todolink', JSON.stringify(todo));
  }

  // FUNCTION FOR THE TWELVE HOUR CLOCK
  getTwelveHour() {
    let twelve;
    if (localStorage.getItem('twelvehour') === null) {
      twelve;
    } else {
      twelve = JSON.parse(localStorage.getItem('twelvehour'));
    }

    return twelve;
  }
  setTwelveHour(data) {
    let twelve = this.getTwelveHour();
    twelve = data;
    localStorage.setItem('twelvehour', JSON.stringify(twelve));
  }
  // FUNCTION FOR THE Twenty FOUR HOUR

  getTwentyHour() {
    let twenty;
    if (localStorage.getItem('twentyhour') === null) {
      twenty;
    } else {
      twenty = JSON.parse(localStorage.getItem('twentyhour'));
    }
    return twenty;
  }
  setTwentyHour(data) {
    let twenty = this.getTwentyHour();
    twenty = data;
    localStorage.setItem('twentyhour', JSON.stringify(twenty));
  }
  // FUNCTION FOR THE BACKGROUND IMAGE
  getBackground() {
    let back;
    if (localStorage.getItem('backimg') === null) {
      back = [];
    } else {
      back = JSON.parse(localStorage.getItem('backimg'));
    }
    return back;
  }

  setBackground(img) {
    let back = this.getBackground();
    back[0] = img;
    localStorage.setItem('backimg', JSON.stringify(back));
  }
  // FUNCTION FOR THE SET THE BACKGROUND TITLE
  getTitle() {
    let title;
    if (localStorage.getItem('titleimg') === null) {
      title = [];
    } else {
      title = JSON.parse(localStorage.getItem('titleimg'));
    }
    return title;
  }
  setTitle(data) {
    let title = this.getTitle();
    title.push(data);
    localStorage.setItem('titleimg', JSON.stringify(title));
  }
}
export const store = new Storage();
