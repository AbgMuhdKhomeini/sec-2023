const todayDate = new Date();
const thisMonth = todayDate.getMonth() + 1;
const thisDay = todayDate.getDate();
const thisTime = todayDate.getTime();
const thisYear = todayDate.getFullYear();
const formatedTime = todayDate.toLocaleTimeString();

const time = {
  time: thisTime,
  today: todayDate,
  formatedTime: formatedTime,
  month: thisMonth,
  day: thisDay,
  year: thisYear,
};

module.exports = time;

console.log("time.js is loaded");
