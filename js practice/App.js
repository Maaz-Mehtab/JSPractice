// //         0     1     2      3     4    5    6    7
// var arr=["Pak","Ind","Bang","Sri","Aus","NZ","SA","Eng"];
// var arr2=["Pak","Ind","Bang","Sri","Aus","NZ","SA","Eng"];
// // console.log("arr",arr);
// var splice=arr.splice(2,2);
// console.log("arr",arr);
// console.log("splice",splice);
// var slice=arr2.slice(2,5);
// console.log("arr2",arr2);
// console.log("slice",slice);


//             //   012345678
// var cityToCheck="Pakistani";
// var someChars = cityToCheck.slice(2,5);
// console.log("someChars",someChars);

// var abc=-2.9;
// console.log(Math.floor(abc));


// var integerString = "24"
// var num = Number(integerString);

// console.log(typeof integerString)
// console.log(typeof num)

// var total=40;
// console.log(Number(total).toFixed(2))

// var d = new Date();
// console.log(d);
// var a=d.getFullYear()
// console.log(d);
//  console.log( a  );



// console.log(abc);
// var abc=2;
// function xyz(){
//     // abc=4
// }
// // console.log(abc);
// xyz();







// var dayOfWk="sun"
// switch (dayOfWk) {
//     case "Sat":
//         alert("Whoopee");
//         break;
//     case "Sun":
//         alert("Whoopee");
//         break;
//     case "Fri":
//         alert("TGIF!");
//         break;
//     default:
//         alert("Shoot me now!");
// }



// var abc={
//     name:"maaz",
//     id:1
// }
// var data=abc;
// console.log("data",data);
// console.log("abc",abc);
// abc.name="Mohsin";
// abc=abc.name="Moiz";
// console.log("abc1",abc);
// console.log("data1",data);



// function abc (a){
//     console.log("!!",a);
// }
// console.log("A",abc(1))
// setTimeout(() => {

//     console.log("b",abc(2))
// }, 200);
// console.log("c",abc(3))

// var arr = [2, 3, 4, 5, 1, 2, 3, 5, 2, 3, 4];
// var uni = Array.from(new Set(arr));
// var max = [];
// for (var i = 0; i < uni.length; i++) {
//     for (j = i +1; j < uni.length; j++) {
//         if (uni[i] > uni[j]) {
//             max.push(uni[i])
//         }
//     }
// }
// console.log("a", max);


// var arrr=[1,2,3,4,5,6,7,8,10,11];
// var a=0;
// for(var i=0 ; i<arrr.length ; i++){
//     console.log(arrr[i]);
//     if(a+1 == arrr[i]){
//         a=arrr[i]
//     }
//     else{
//         a =a+1;
//         console.log("missing no",a);
//         break;
//     }
// }


// function checkForSelection() {
//     if (document.getElementById("states").selectedIndex === 0) {
//         alert("Please select a state.");
//         return false;
//     }
//     else{
//         var abc=document.getElementById("states").value;
//         console.log("Abc",abc);
//         return false;
//     }
// }


// var nums=[2,3,6,6,5];
// var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var largest = function getSecondLargest(nums) {
//     var unique = Array.from(new Set(nums)).sort(function (a, b){return a-b}).slice(-2)[0]
//     console.log("unique 2" ,unique)
// }
// console.log(largest(nums));



// regex first string and last string are same 
// var regex = /^(.).*\1$/;
// console.log("1",regex.test('babcdsa'))
// console.log("2",regex.test('abcdsaasaw'))



// var s=1234;
//     function reverseString(s) {
//         try{
//        var splitting=s.split("");
//    var reversestrinf=splitting.reverse();
//    var joinArray = reversestrinf.join("");
//    console.log(joinArray)
//    }
//    catch(e){
//        console.log(e.message +"\n"+s);
//    }
//    }
// reverseString(s);




// function isPositive(a) {
//     try {
//      if(a == 0){
//   throw "Zero Error";
//  }    
//  else if(a < 0) {
//      throw "Negative Error"
//  }
//  else {
//  return "YES";
//  } 
//     }
//     catch(e){
//         return e;
//     }

// }
// isPositive(1);
// isPositive(-1);
// isPositive(0);

// class Polygon {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// }

// let p = new Polygon(1, 2);
// let p2 = new Polygon(1);
// console.log('Polygon p:', p);
// console.log('Polygon p2:', p2);


// class Polygon {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
//         getArea() {
//             return this.height * this.width;
//         }
// }

// const square = new Polygon(10, 10);

// console.log(square.getArea());

// class Rectangle {
//     constructor(w, h) {
//         this.w = w;
//         this.h = h;
//     }
// }
/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
// Rectangle.prototype.area = function() {
//     return this.w *this.h;
// }
// // /*
// //  * Create a Square class that inherits from Rectangle and implement its class constructor
// //  */
// class Square extends Rectangle {
//       constructor(w) {
//         // console.log("sss",super())
//             super(w,w);
//           }
// }
// if (JSON.stringify(Object.getOwnPropertyNames(Square.prototype)) === JSON.stringify([ 'constructor' ])) {
//     const rec = new Rectangle(3, 4);
//     const sqr = new Square(3);

//     console.log(rec.area());
//     console.log(sqr.area());
// } else {
//     console.log(-1);
//     console.log(-1);
// }

// var newval = 0;
// function myFunction() {
//     function innerFunction() {
//         newval = newval + 1;
//     }
//     innerFunction()
//     if (newval == 5) {

//         document.getElementById("btn").value = newval - 1
//     }
//     else if (newval > 4 && newval < 9) {

//         document.getElementById("btn").value = 0
//     }
//     else if (newval == 10) {
//         document.getElementById("btn").value = newval -1
//     }
//     else if (newval == 11) {
//         newval = 1
//         document.getElementById("btn").value = 0

//     }
// }

// var btn = document.createElement("Button");

// btn.innerHTML = "0";
// btn.id = "btn";
// btn.className = "btnClass";

// document.body.appendChild(btn);

// btn.onclick = function() {
//     btn.innerHTML+=2;
// }



// var arr = [17, 19, 28, 44];

// var everys= arr.every(a => a <= 44);
// console.log("everys", everys);


// var FindIndex = arr.findIndex(a => a > 10);
// console.log("FindIndex", FindIndex);

// var foreach = arr.forEach(item => { return item })
// console.log("foreach", foreach);

// var include = arr.includes(12);
// console.log("include", include);

// var some = arr.some(item => item > 44)
// console.log("some", some);

// var fin = arr.find(a => a > 10)
// console.log("find", fin);

// var filte = arr.filter(a => a > 4);
// console.log("filte", filte);

// var Maps = arr.map(a => a * 3);
// console.log("Map", Maps);

// var Reduc = arr.reduce((a, b) => a + b);
// console.log("Reduc", Reduc);


// var Sort = arr.sort((a, b) => a - b);
// console.log("Sort", Sort);


// function abc(obj) {
//     obj = obj.xyz = 10;

// }
// var obj = {
//     xyz: 20
// }
// abc(obj);
// console.log(obj);

// ------------- Bubble Sort----------------
// var arr=[5,2,11,9,15,11,15];

// for(let i = 0; i< arr.length; i++){
//     for(let j =i; j< arr.length;j++){
//         let temp;
//         if(arr[i]>arr[j]){
//             temp = arr[i]
//             arr[i]=arr[j]
//             arr[j] = temp
//         }
//     }
// }

// console.log(arr)
// console.log(arr[arr.length-2])

// 0 : 0000
// 1 : 0001
// 2 : 0010
// 3:  0011
// 4:  0100
// 5:  0101
// 6:  0110
// 7:  0111
// 8:  1000


// var a = 5;
// var b = 3;
// console.log(~1);


// function getMaxLessThanK(n, k) {
//     let max = 0;

//     for (let i = 1; i < n; i++) {

//         for (let j = i + 1; j <= n; j++) {

//             let bitwiseAnd = i & j;

//             if (bitwiseAnd < k && max < bitwiseAnd) {
//                 max = bitwiseAnd;
//             }
//         }
//     }
//     return max;
// }

// -----------------EVEN OR ODD ---------------------
// var check = ["even", "odd"];
// var abc = 6 % 2
// console.log(check[abc]);

// --------------------PALINDROM---------------
// var name = "bilal";
// function palid(name) {
//     let temp = name;
//     name = name.split("");
//     name = name.reverse();
//     name = name.join("");
//     if (name == temp) {
//         console.log("palindrone");
//     }
//     else {
//         console.log("not palindrome")
//     }
// }
// palid(name)



// var fname="fired";
// var lname="fried";

// function check(fname){
//     let temp=fname;
//     fname=fname.split("");
//     fname=fname.sort();
//     fname=fname.join("");
//     console.log("fname",fname);
// }
// var checkFname=check(fname)
// var checkLnane=check(lname)
// if(checkFname==checkLnane){
//     console.log("matched")
// }
// else{
//     console.log("Not matched")
// }


function fact(n) {
    if (n == 0) {
        return 1;
    }
    else if (n < 0) {
        return -1
    }
    else {
        return n = n * fact(n - 1);
    }
}
var val = Number(prompt("Enter your number"));
if(!isNaN(val)){
    console.log("the " + val + " factorial is " + fact(val));
}
else{
    alert("please Enter YOur number")
}
