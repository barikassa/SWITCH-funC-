//! --------5-----------
//! בלחיצה על כל אחד מהם הפעל את אותה הפונקציה(שאתם יוצרים) שמדפיסה איזה פרי נלחץ
//!צור 5 כפתורים עם שמות של פירות:

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");

btn1.addEventListener("click", function () {
    switch (btn1) {
        case btn1:
            console.log("banana");
    }
});

btn2.addEventListener("click", function () {
    switch (btn2) {
        case btn2:
            console.log("orange");
    }
});


btn3.onclick = function () {
    switch (btn3) {
        case btn3:
            console.log("lieche");
    }
};

btn4.onclick = function () {
    switch (btn4) {
        case btn4:
            console.log("apple");
    }
};

btn5.onclick = function () {
    switch (btn5) {
        case btn5:
            console.log("strobbery");
    }
};

//! ----6---- 
var div = document.getElementById("div");
var carArr = [
    { model: "mazda", year: "2021", price: 50000, discount: 50000 * 0.8, img: "https://cdn.pixabay.com/photo/2019/11/26/18/56/girl-and-car-4655245__340.jpg" },
    { model: "reno", year: "2021", price: 30000, discount: 30000 * 0.75, img: "https://cdn.pixabay.com/photo/2019/11/26/18/56/girl-and-car-4655245__340.jpg" },
    { model: "masarati", year: "2021", price: 900000, discount: 900000 * 0.9, img: "https://cdn.pixabay.com/photo/2019/11/26/18/56/girl-and-car-4655245__340.jpg" },
    { model: "ferari", year: "2021", price: 8000000, discount: 8000000 * 0.07, img: "https://cdn.pixabay.com/photo/2019/11/26/18/56/girl-and-car-4655245__340.jpg" },
    { model: "lamburgini", year: "2021", price: 7000000, discount: 7000000 * 0.03, img: "https://cdn.pixabay.com/photo/2019/11/26/18/56/girl-and-car-4655245__340.jpg" }
]

for (i = 0; i < carArr.length; i++) {
    document.write(carArr[i].model);
    document.write(carArr[i].year);
    document.write(carArr[i].price);
    document.write(carArr[i].discount);
    div.innerHTML += `<div> <img src="${carArr[i].img}"> </div>`
    switch (carArr[i].discount) {
        case 30000 * 0.75:
            console.log("crazy sell");
            break;
    
        case 900000 * 0.9:
            console.log("good deal for you");
        case 8000000 * 0.07:
            console.log("not bad");
        case 7000000 * 0.03:
            console.log("this is a jok");
    };
    
};










// console.log(x);
// var x=5;
// console.log(x);


// console.log(y);
// let y=5;
// console.log(y);






