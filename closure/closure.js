//#CLOSURE AND CACHE EXAMPLE

function memo10Times() {
  let cache = {};
  return (n) => {
    if (n in cache) {
      console.log("cached", cache[n]);
    } else {
      console.log("new", n * 10);
      cache[n] = n * 10;
    }
  };
}

const time10 = memo10Times();

time10(18);
time10(9);
time10(9);

var teacher = "Mark";

function schoolClass() {
  var teacher = "John";
  colorOfTable = "Dark-green";
  classNum = 24;
  console.log(teacher);
}

console.log(teacher);
schoolClass();
console.log(teacher);

function memo() {
  let cache = {};
  return function (n, ...cbs) {
    if (cache[n]) {
      console.log("cache");
    } else {
      let tmp;
      cbs.forEach((cb) => {
        tmp = cb(n);
      });
      cache[n] = tmp;
      console.log(tmp, "cached");
    }
  };
}

const mult = memo();

mult(
  5,
  (n) => n * 9,
  (n) => n * 5
);
