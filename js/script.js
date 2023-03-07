
let timeNow = new Date();


alert(`Поточний час ${timeNow}`)

let Time = prompt("Введіть Час в форматі ГГ.ХХ.СС");

let timeParts = Time.split(".");
let userSeconds = parseInt(timeParts[2]);
let userMinutes = parseInt(timeParts[1]);
let userHours = parseInt(timeParts[0]);
let userTime = new Date();
userTime.setHours(userHours);
userTime.setMinutes(userMinutes);
userTime.setSeconds(userSeconds);
const time = {
  hours: userTime.getHours(),
  minutes: userTime.getMinutes(),
  seconds: userTime.getSeconds(),
  printTime: function() {console.log(`${this.hours}:${this.minutes}:${this.seconds}`);},
  addSeconds: function(seconds) {
    const totalSeconds = this.hours * 3600 + this.minutes * 60 + this.seconds + seconds;
    this.hours = Math.floor(totalSeconds / 3600) % 24;
    this.minutes = Math.floor(totalSeconds / 60) % 60;
    this.seconds = totalSeconds % 60;
  },
  addMinutes: function(minutes) {
    this.addSeconds(minutes * 60);
  },
  addHours: function(hours) {
    this.addSeconds(hours * 3600);
  }
};

time.printTime();
let a = +prompt("Введіть кількість секунд на яку хочете змінити час")
time.addSeconds(a);
time.printTime();
let b = +prompt("Введіть кількість хвилин на яку хочете змінити час")
time.addMinutes(b);
time.printTime();
let c = +prompt("Введіть кількість годин на яку хочете змінити час")
time.addHours(c);
time.printTime();
alert(`Відповідь в консолі`)




