let countEl = document.getElementById("countDown");

function count0(callback) {
  let num = 11;
  setTimeout(() => {
    console.log(--num);
    callback();
  }, 1000);
}
function count1(callback) {
  let num = 10;
  setTimeout(() => {
    countEl.innerHTML = --num;
    console.log(countEl.innerHTML);
    callback();
  }, 1000);
}
function count2(callback) {
  let num = 9;
  setTimeout(() => {
    countEl.innerHTML = --num;
    console.log(countEl.innerHTML);
    callback();
  }, 1000);
}
function count3(callback) {
  let num = 8;
  setTimeout(() => {
    countEl.innerHTML = --num;
    console.log(countEl.innerHTML);
    callback();
  }, 1000);
}
function count4(callback) {
  let num = 7;
  setTimeout(() => {
    countEl.innerHTML = --num;
    console.log(countEl.innerHTML);
    callback();
  }, 1000);
}
function count5(callback) {
  let num = 6;
  setTimeout(() => {
    countEl.innerHTML = --num;
    console.log(countEl.innerHTML);
    callback();
  }, 1000);
}
function count6(callback) {
  let num = 5;
  setTimeout(() => {
    countEl.innerHTML = --num;
    console.log(countEl.innerHTML);
    callback();
  }, 1000);
}
function count7(callback) {
  let num = 4;
  setTimeout(() => {
    countEl.innerHTML = --num;
    console.log(countEl.innerHTML);
    callback();
  }, 1000);
}
function count8(callback) {
  let num = 3;
  setTimeout(() => {
    countEl.innerHTML = --num;
    console.log(countEl.innerHTML);
    callback();
  }, 1000);
}
function count9(callback) {
  let num = 2;
  setTimeout(() => {
    countEl.innerHTML = --num;
    console.log(countEl.innerHTML);
    callback();
  }, 1000);
}
function count10(callback) {
  let num = 1;
  setTimeout(() => {
    countEl.innerHTML = "HAPPY BIRTHDAY💕🎈🎉✨";
    console.log(countEl.innerHTML);
    callback();
  }, 1000);
}
//callback hell
count0(() => {
  count1(() => {
    count2(() => {
      count3(() => {
        count4(() => {
          count5(() => {
            count6(() => {
              count7(() => {
                count8(() => {
                  count9(() => {
                    count10(() => {});
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
