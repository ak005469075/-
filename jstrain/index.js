//src=https://www.youtube.com/watch?v=8dWL3wF_OMw&t=23451s

// console.log("It's Yuleiyun!");
// console.log("Ok!");

// // window.alert("It's true Yuleiyun!");

// //comment
// /*
// 
// */

//2.
// let age=22;//number
// let stu=false;//bool
// let name="Yuleiyun";//string

// console.log("my age is ",age," year");
// console.log("i am a student? ",stu);
// console.log("my name is ",name);
// document.getElementById("p1").innerHTML="my age is "+age;
// document.getElementById("p2").innerHTML="i am a student? "+stu
// document.getElementById("p3").innerHTML="my name is "+name;


//4.input

/*法一*/
// let username=window.prompt("psz input your name?");
// console.log(username);
/*法二*/
// document.getElementById("subbmit").onclick=function(){
//     username=document.getElementById("myinput").value;
//     console.log(username);
//     document.getElementById("mylabel").innerHTML="Hello! "+username;
// }

// //5.类型转换
// let x,y,z;
// x=Number(3.14);
// y=String(3.14);
// z=Boolean("Yuleiyun");
// console.log(x,typeof x); //3.14 'number'
// console.log(y,typeof y); //3.14 string
// console.log(z,typeof z); //true 'boolean'

//6.常量
// const pi=123;
// pi=2323;//会报错
// console.log(pi);

//7.计数
// let count=0;
// document.getElementById("dec").onclick=function(){
//      count-=1;
//     document.getElementById("mylabel").innerHTML=count;
// }
// document.getElementById("res").onclick=function(){

//    document.getElementById("mylabel").innerHTML=0;
// }
// document.getElementById("inc").onclick=function(){
//     count+=1;
//    document.getElementById("mylabel").innerHTML=count;
// }

//8.切片
// user="hello!yu";
// //user=user.slice(4);// o!yu
// //user=user.slice(2,4);//ll 左闭右开
// //user=user.slice(0,user.indexOf("y"));//hello!
// console.log(user);

//24.function


// let num=check(15);

// console.log(num);

// function check(n){
//     return n>20?"yes":"no";
// }

//27 var / let 

// for(let i=1;i<=3;i++){ //i没有定义
   
// }
// console.log(i);

// for(var i=1;i<=3;i++){ //i=4
   
// }
// console.log(i);

//global
//var name="bro";
// let name="b2323";

// console.log("hello, ",name);//hello,  b2323
// console.log(`hello ${name}`);//hello b2323

//guess game
// const num=Math.floor(Math.random()*10+1);//1-10
// let guesscount=0;
// console.log(num);
// document.getElementById("mybutton").onclick=function(){
//     let guess=document.getElementById("myinput").value;
//     guesscount+=1;

//     if(guess==num){
//         alert(`${num} is the #. It took your ${guesscount} times!`);
//     }
//     else if(guess<num)
//         {
//             alert("too small");
//         }
//     else {
//             alert("too large");
//         }
    
// }

//单选
// document.getElementById("mybutton").onclick=function(){
//     let res=document.getElementById("templabel");
//     if(document.getElementById("r1").checked)
//     {
//         res.innerHTML="你选了蓝色";
//     }
//     else if(document.getElementById("r2").checked){
//         res.innerHTML="你选了红的";
//     }
//     else 
//     {
//         res.innerHTML="选一个吧";
//     }
// }
// 2d array

// let p1=['a','b','c'];
// let p2=['d','e','f'];

// let p=[p1,p2];
// p[0][1]="asd"; //替换了b
// for(let list of p){//行
//   for(let zm of list){//列
//     console.log(zm);
//   }
// }

//展开运算符
// let p1=['a','b','c'];
// let p2=['d','e','f'];

// //p1.push(p2);//会压缩p2内容  ['a', 'b', 'c', Array(3)]
// p1.push(...p2);//['a', 'b', 'c', 'd', 'e', 'f']
// console.log(p1);

//剩余参数
// let a=1,b=2,c=3,d=4,e=5;

// console.log(sum(c,d,e));

// function sum(...nums){
//     let total=0;
//     for(let num of nums){
//         console.log(`this is ${num}`)
//         total+=num;
//     }
//     return total;
// }

//callback

// let out=sum(2,3);
// console.log(out);
// passval(out);
// function sum(x,y){
//     return x+y;
// }
// function passval(n){
//     document.getElementById("templabel").innerHTML=n;

// }

// sum(2,3,passval);
// function sum(x,y,callback){
//     callback(x+y);
// }
// function passval(n){
//     document.getElementById("templabel").innerHTML=n;

// }

//array.forEach()
// let arr=["aliba","niude","hah"];
// arr.forEach(daxie);
// function daxie(element,index,array){
//     // array[index]，数组的第index个元素
//     array[index]=element[0].toUpperCase()+element.substring(1);
//     //substring(1)从字符串的第一个字符开始截取到完
// }
// console.log(arr);//['Aliba', 'Niude', 'Hah']

//array.map()
// let shuzi=[1,2,3,4,5];
// let squres=shuzi.map(squre);

// console.log(squres);//输出数组 [1, 4, 9, 16, 25]

// function squre(element){
//     return Math.pow(element,2);
// }


// squres.forEach(print);//输出单个元素
// function print(element){
//     console.log(element);
// }


//array.filter()
// let age=[18,19,25,30,45,16];
// let ages=age.filter(show);

// console.log(ages);//[25, 30, 45]

// function show(element){
//     if(element>20) return element;
// }

//array.reduce()
// let list=[1,2,3,4,5,6,7,8,9,10];

// let lists=list.reduce(check);

// console.log(lists);//55
// function check(total,element){
//     return total+element;
// }

//sort

// let nums=[1,6,5,7,3,11];

// nums=nums.sort(jiangxu);//[11, 7, 6, 5, 3, 1]
// nums=nums.sort(shengxu);//[1, 3, 5, 6, 7, 11]
// console.log(nums);

// function jiangxu(x,y){
//     return y-x;
// }

// function shengxu(x,y){
//     return x-y;
// }

//函数表达式
// 没必要给函数创建唯一的名称，或者说是省略了造名字的过程
// let greeting=function(){
//     console.log("1232");
// }

//箭头函数

//eg 1
// const greeting=function(user){
//         console.log(`1232, is ${user}`);
//     }

//     greeting("bro");//1232, is bro

//   =>
    // const greeting=(user)=>console.log(`1232, is ${user}`);
        
    // greeting("bro");


//eg 2

// const func2=function(x,y){
//     return x+y;
// }
// console.log(func2(5,8));//13

//=>
// const func2=(x,y)=>x+y;
// console.log(func2(5,8));//13

//eg3

// let nums=[1,3,6,4,2,9,7];

// nums= nums.sort(des);
// console.log(nums);//[9, 7, 6, 4, 3, 2, 1]
// function des(x,y){//倒序
//     return y-x;
// }

// nums.forEach(print);//单个打印
// function print(e){
//     console.log(e);
// }

//=>
// let nums=[1,3,6,4,2,9,7];

// nums= nums.sort((x,y)=>{y-x;});
// console.log(nums);//[9, 7, 6, 4, 3, 2, 1]

// nums.forEach((e)=>{ console.log(e);});//单个打印


//shuffle

//let cards=['A','2','3','4','5','6','7','8','J','K'];

// cards=shuffle(cards);//数组
// console.log(cards);//每次运行都是打乱的


// function shuffle(array){
//     let currentindex=array.length;//从最后一张开始洗牌
//     while(currentindex!=0)//洗到第一张为止
//     {
//         let randomindex=Math.floor(Math.random()*array.length);
//         currentindex-=1;

//         let temp=array[currentindex];
//         array[currentindex]=array[randomindex];
//         array[randomindex]=temp;
//     }
//     return array; 
// }    

// =>
// const xipai=(array)=>{
//     let currentindex=array.length;//从最后一张开始洗牌
//     while(currentindex!=0)//洗到第一张为止
//     {
//         let randomindex=Math.floor(Math.random()*array.length);
//         currentindex-=1;
 
//         let temp=array[currentindex];
//         array[currentindex]=array[randomindex];
//         array[randomindex]=temp;
//     }
//     return array; 
// }
// console.log(xipai(cards));  

//嵌套函数

// let username="Yuleiyun";
// let userno=0;

// login();

// //showname();无法访问内部函数
// //showno();

// function login()
// {
//     showname();
//     showno();

//     function showname(){
//         console.log(`welcome! ${username}`);
//     }
//     function showno(){
//         console.log(`you have ${userno}`);
//     }
// }

//map，键值对
// const jiangjin=new Map([
//     ["wo",100],
//     ["ta",200],
//     ["you",300]
// ]);
// jiangjin.set("he",500);//添加
// jiangjin.delete("he");//删除

// jiangjin.forEach((val,key)=>console.log(`name:${key},money:${val}`));
// /*
// name:wo,money:100
// name:ta,money:200
// name:you,money:300
// */

// console.log(jiangjin.has("ta"));//true
// console.log(jiangjin.size);//3
// let total=0;
// total+=jiangjin.get("wo");//获取奖金总数
// total+=jiangjin.get("you");
// console.log(total);//400

//object
/*
属性：一个对象有什么
方法：一个对象能做什么
使用 . 去访问属性和方法
*/
// const person={
//     name:"Yuleiyun",
//     age:19,
//     color:"blue",

//     eat: function(){
//         console.log("He's Eatting!");
//     },
//     study:function(){
//         console.log("He's studying!");
//     }
// }
// console.log(person.name);
// console.log(person.age);
// console.log(person.color);
// person.eat();
// person.study();
// /*
// Yuleiyun
// index.js:417 19
// index.js:418 blue
// index.js:410 He's Eatting!
// index.js:413 He's studying!
// */

//this

// const person1={
//     name:"Yuleiyun",

//     eat: function(){
//        // console.log(`${name} is Eatting!`); //读不到
//        console.log(`${this.name} is Eatting!`); //等价于 ${person1.name}
//     }
// }

// const person2={
//     name:"asdasd",

//     eat: function(){
//         console.log(`${this.name} is Eatting!`);//等价于 ${person2.name}
//     }
// }

// person1.eat();//Yuleiyun is Eatting!
// person2.eat();//asdasd is Eatting!

//classes
/*
 创建对象
 定义对象的属性和方法
 构造每一个特定的实例
*/
// class person{
//     age=19

//     eat(){
//         console.log("eat sth");
//     }
//     study(){
//         console.log("study sth");
//     }
// }

// const p1=new person();
// const p2=new person();
// const p3=new person();
// console.log(p1.age+1);//20
// p1.eat();//eat sth
// console.log(p2.age+2);//21
// console.log(p3.age+3);//22

//constructor
/*
类的一种特殊方法，接受参数、分配属性
*/
/*
class person{
    constructor(name,age,color){//就是constuctor，不可以自定义
        this.name=name;
        this.age=age;
        this.color=color;
    }
    study(){
        console.log(`${this.name} is studying sth`);
    }
}

const p1=new person("Yu",14,"blue");
console.log(p1.name);//Yu
console.log(p1.age);//14
console.log(p1.color);//blue
p1.study();//Yu is studying sth
const p2=new person("Lei",21,"red");
console.log(p2.name);//Lei
console.log(p2.age);//21
console.log(p2.color);//red
p2.study();//Lei is studying sth
*/

//static 关键字
// class Person{

//     numbers=0;
//     constructor(name){
//         this.name=name;
//         this.numbers+=1;
//     }

// }
// const p1=new Person("Yu");
// const p2=new Person("Lei");
// const p3=new Person("sq");

// //想要统计人的数量，应该是每创建一个，numbers就+1，
// //但是呢，创建了三个，都是1
// console.log(p1.numbers);//1
// console.log(p2.numbers);//1
// console.log(p3.numbers);//1

//static 属性
//多用于缓存
// class Person{

//     static numbers=0;
//     constructor(name){
//         this.name=name;
//         Person.numbers+=1;
//     }

// }
// const p1=new Person("Yu");
// const p2=new Person("Lei");
// const p3=new Person("sq");

// console.log(Person.numbers);//3

//static 方法
// class Person{

//     constructor(name){
//         this.name=name;
//     }
//     // start(){
//     //     console.log("here we go!");
//     // }
//     static start(){
//         console.log("here we go!");
//     }

// }
// const p1=new Person("Yu");
// const p2=new Person("Lei");
// const p3=new Person("sq");

// // p1.start();
// // p2.start();
// // p3.start();

// //我的本意是，跑步，三个人一起跑，而不是各跑各的
// Person.start();//here we go!
/*
所以为什么，
Math.rand()，而不是const math=new Math();math.rand()呢
函数库都是静态方法，就是封装好了，直接调用，无法扩展，性能上好一点
*/

//继承 inheritance

//正常情况下：
// class Fish{

//     alive=true;
//     name="fish";
//     eat(){
//         console.log(`${this.name} is eating!`);
//     }
//     sleep(){
//         console.log(`${this.name} is sleeping!`);
//     }
//     swim(){
//         console.log(`${this.name} is swimming!`);
//     }

// }
// class Dog{

//     alive=true;
//     name="dog";
//     eat(){
//         console.log(`${this.name} is eating!`);
//     }
//     sleep(){
//         console.log(`${this.name} is sleeping!`);
//     }
//     run(){
//         console.log(`${this.name} is running!`);
//     }

// }
// class Bird{

//     alive=true;
//     name="bird";
//     eat(){
//         console.log(`${this.name} is eating!`);
//     }
//     sleep(){
//         console.log(`${this.name} is sleeping!`);
//     }
//     fly(){
//         console.log(`${this.name} is flying!`);
//     }

// }
/*正常情况下，三个类，Fish、Dog、Bird，
它们有共同属性 `alive`，公共方法 `eat,sleep`，
而且它们的都有共性是Animal，所以*/

// class Animal{

//     alive=true;
//     eat(){
//         console.log(`${this.name} is eating!`);
//     }
//     sleep(){
//         console.log(`${this.name} is sleeping!`);
//     }
// }
// class Fish extends Animal{

//     name="fish";

//     swim(){
//         console.log(`${this.name} is swimming!`);
//     }

// }
// class Dog extends Animal{

//     name="dog";

//     run(){
//         console.log(`${this.name} is running!`);
//     }

// }
// class Bird extends Animal{

//     name="bird";
 
//     fly(){
//         console.log(`${this.name} is flying!`);
//     }

// }
// const fish=new Fish();
// console.log(fish.alive);
// fish.eat();
// fish.sleep();
// fish.swim();
// /*
// true
// fish is eating!
// fish is sleeping!
// fish is swimming!
// */
// const dog=new Dog();
// dog.eat();
// dog.sleep();
// dog.swim();//报错
// dog.run();
// /*
// dog is eating!
// dog is sleeping!
// dog.swim is not a function
// dog is running!
// */
// const bird=new Bird();

//super关键字
/*
用在引用父类的构造器的时候
*/

// class Animal{

// }
// class Dog extends Animal{

// }
// class Fish extends Animal{
//     constructor(name,age,swimspeed){
//              //super();
//         this.name=name;
//         this.age=age;
//         this.swimspeed=swimspeed
//     }
// }
// const dog=new Dog("dog",15,40);
// console.log(dog.name);
// console.log(dog.age);
// console.log(dog.runspeed);
/*
Must call super constructor 
in derived class before accessing 
'this' or returning from derived constructor
*/
//这也是一种重复机制，为了代码的重用性，用到super
// class Animal{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
    
// }
// class Dog extends Animal{
//     constructor(name,age,runspeed){
//         super(name,age);
//         this.runspeed=runspeed;
//     }
// }
// class Fish extends Animal{
//     constructor(name,age,swimspeed){
//         super(name,age);
//         this.swimspeed=swimspeed
//     }
// }
// const dog=new Dog("dog",15,40);
// console.log(dog.name);
// console.log(dog.age);
// console.log(dog.runspeed);
/*
dog
15
40
*/

//get/ set

// class Person{
//     constructor(score){
//         this._score=score;
//     }
 
// }
// const p1=new Person(60);
// console.log(p1._score);//60
// /*
// 我如果想要让它后面加个单位呢？
// 也就是说我需要对这个值进行一个处理，当我输入的时候，我直接输出就可以拿到这个处理好的内容
// */
// console.log(`${p1._score} points`);//60 points
// 引入get
// class Person{
//     constructor(score){
//         this._score=score;
//         this._ok=12;
//     }
//     get score(){
//         return `${this._score} points`;
//     }
//     get ok(){
//         return `${this._ok} n`;
//     }
//     set ok(val){
//         if(val>800)
//         {
//             val=800
//         }
//         else if(val<0){
//             val=200
//         }
//         this._ok=val;
//     }

// }
// const p1=new Person(60);
// p1.score=456;
// console.log(p1.score);//60 points
// p1.ok=789;
// console.log(p1.ok);//789 n

//objects as 参数

// class Person{
//     constructor(name,age,score){
//         this.name=name;
//         this.age=age;
//         this.score=score;
//     }
// }
// const p1=new Person("Yujj",12,45);
// const p2=new Person("Ygffgh",23,35);
// //对一个object，我要输出三个属性，就要自己写三个输出
// //那我封装一个

// show(p1);
// function show(p){
//     console.log(p.name);
//     console.log(p.age);
//     console.log(p.score);
// }
// /* 
// Yujj
// 12
// 45
// */
// //修改也可以

// change(p1,"12312321");
// show(p1);
// function change(p,val){
//     p.age=val;
// }
/*
Yujj
12312321
45
*/

//数组和对象
// class Person{
//     constructor(name,age,score){
//         this.name=name;
//         this.age=age;
//         this.score=score;
//     }
//     eat(){
//         console.log(`${this.name} is eating!`);
//     }
// }
// const p1=new Person("Yujj",12,45);
// const p2=new Person("gffgh",23,35);
// const ps=[p1,p2];
// console.log(ps[0].name);
// console.log(ps[1].name);
// ps[0].eat();
/*
Yujj
gffgh
Yujj is eating!
*/

//匿名对象
//不需要想名字了
//  class Person{
//         constructor(name,score){
//             this.name=name;
//             this.score=score;
//         }
// }
// // const p1=new Person("asda",123);
// // const p2=new Person("sqwe",465);
// // const p3=new Person("xzc",789);

// let ps=[
//     new Person("asda",123),
//     new Person("sqwe",465),
//     new Person("xzc",789)
// ]
// ps.forEach((p)=> console.log(`${p.name},${p.score}`));
// /*
// asda,123
// sqwe,465
// xzc,789
// */
// // ps.forEach(print);
// // print(ps[0]);
// // function print(p){
// //     console.log(`${p.name},${p.score}`);
// // }

//try catch错误处理

/*
catch是去捕获异常，并输出
*/
// try{

//  console.lag();

// }catch(error){

//     console.log(error.message);//console.lag is not a function
// }

//throw...catch

// try{

//     let x=window.prompt("Enter #");
//     x=Number(x);
//     if(isNaN(x)) throw "this is NaN,not number";
//     if(x=="") throw "this is empty,not number";
   
//    }catch(error){
   
//        console.log(error);//console.lag is not a function
//    }

//setTimeout()
// let hobby="篮球";
// let price=100.99;

// //执行的方法，和等候时间
// setTimeout(firstmess,3000,hobby,price);
// setTimeout(secondmess,5000);
// setTimeout(thirdmess,9000);

// function firstmess(hobby,price){
//     alert(`the ${hobby} is $${price}`);
// }
// function secondmess(){
//     alert(`this is $100`);
// }
// function thirdmess(){
//     alert(`the final`);
// }

//clearTimeout()
// let hobby="篮球";
// let price=100.99;

// //执行的方法，和等候时间
// let id1=setTimeout(firstmess,3000,hobby,price);
// let id2=setTimeout(secondmess,5000);
// let id3=setTimeout(thirdmess,9000);

// function firstmess(hobby,price){
//     alert(`the ${hobby} is $${price}`);
// }
// function secondmess(){
//     alert(`this is $100`);
// }
// function thirdmess(){
//     alert(`the final`);
// }
// document.getElementById("mybutton").onclick=function(){
//     clearTimeout(id1);
//     clearTimeout(id2);//点击按钮后，不会执行id2
//     clearTimeout(id3);
//     alert(`取消`);

// }

// //setInterval() //定时器
// let count=0;
// let max=window.prompt("输入一个数");

// const myTimer=setInterval(countUp,3000);

// function countUp(){
//     count+=1;
//     console.log(count);
//     if(count>=max){
//         clearInterval(myTimer);
//     }
// }
// //间隔一定时间输出1-9

//Data objects
// let date=new Date();
// console.log(date);
// date=date.toLocaleString();
// console.log(date);
// document.getElementById("mylabel").innerHTML=date;

//clock程序
// const mylabel=document.getElementById("mylabel");

// update();
// setInterval(update,1000); //动态执行
// function update(){
//     let date=new Date();
//     //mylabel.innerHTML=date;
//     mylabel.innerHTML=fomatTime(date);

//     function fomatTime(date){//形式化date
//         let hours=date.getHours();
//         let minutes=date.getMinutes();
//         let seconds=date.getSeconds();
//         let amorpm=hours>=12?"pm":"am";

//         hours=(hours%12)||12;//12小时制

//         //单数添0，凑两位
//         hours=singlezero(hours);
//         minutes=singlezero(minutes);
//         seconds=singlezero(seconds);

//         return `${hours}:${minutes}:${seconds} ${amorpm}`;
//     }
//     function singlezero(time){//单数添0
//         time=time.toString();
//         return time.length<2?"0"+time:time;
//     }
// }

//同步 sync，
/*
顺序，线性
现在开始，现在结束
*/


//异步 async
/*
不按顺序
现在开始，结束不清楚
*/

//Modules
// import {PI,getC,getA} from "./math_util.js";

// console.log(PI);
// console.log(getC(2));
// console.log(getA(3));

// import * as Mathutil from "./math_util.js";
// console.log(Mathutil.PI);
// console.log(Mathutil.getC(2));
// console.log(Mathutil.getA(3));
// /*
// 3.1415926
// 12.5663704
// 28.2743334
// */

//Dom
/*Document Object Model，一种API接口，可以改变页面内容 */
// console.log(document);//大致标签
// console.dir(document);//细节属性
// console.log(document.title);//网页标题
// console.log(document.URL);//网页url

// document.title="Here we go!";//更改网页标题
// //document.location="http://www.google.com";//跳转到google页面

// document.body.style.backgroundColor="skyblue";//更改页面背景
// document.getElementById("mylabel").innerHTML="Hello！！";//元素名字

//元素选择器
// let e=document.getElementById("mytitle");
// e.style.backgroundColor="blue";

//Name
// let color=document.getElementsByName("unit");
// console.log(color[0]);//<input type="radio" id="r1" name="unit">
// console.log(color[1]);//<input type="radio" id="r2" name="unit">
// color.forEach(elem=>{
//     if(elem.checked){
//         console.log(elem.value);
//     }
// });

//Tag/class
// let co=document.getElementsByTagName("li");
// co[0].style.backgroundColor="lightgreen";
//选择器
// //#id、.class、[for]、li
// let ele=document.querySelector("#mytitle");
// ele.style.backgroundColor="lightgreen";
// //全选
// let ele2=document.querySelectorAll("li");
// ele2.forEach((ele)=>ele.style.backgroundColor="lightgreen");

//添加元素
//.innerHTML 容易受到xss攻击
// const nt=document.createElement("h1");
// nt.innerHTML=window.prompt("enter!");//输入xss语句的话会执行
// document.body.append(nt);
// //.textContent
// const nt=document.createElement("h1");
// nt.textContent=window.prompt("enter!");//实体化为语句，直接输出
// document.body.append(nt);

//添加2
// const mylist=document.querySelector(".food");
// const listitem=document.createElement("div");
// listitem.textContent="114514";
// mylist.append(listitem);//.preitem、insertBefore()

//css 改变
// const t=document.getElementById("mytitle");
// t.style.backgroundColor=
// t.style.fontFamily=
// t.style.border=

//event
//way 1:
// const bt=document.getElementById("mybut");
// bt.onclick=dosth;

//way2:在html添加 onclick="dosth()"属性

//onload

// const ele=document.body;
// ele.onload=dosth;

// function dosth(){
//     alert("You did!");
// }

//对div的颜色改变
//css，将div原本的背景颜色为蓝色，鼠标移动后变为浅绿
// const el=document.getElementById("mydiv");

// el.onmousedown=change;

// function change(){
//     el.style.backgroundColor="lightgreen";
// }
// //离开后恢复为红色
// el.onmouseup=change1;
// function change1(){
//     el.style.backgroundColor="red";
// }

// .addEventListener(event,function,useCapture)

// const e=document.getElementById("mydiv");
// e.addEventListener("mouseover",()=>e.style.backgroundColor="red");
// e.addEventListener("mouseout",()=>e.style.backgroundColor="lightgreen");

//捕获
// const e=document.getElementById("mydiv");
// const e1=document.getElementById("outerdiv");
// e.addEventListener("click",change);
// // e1.addEventListener("click",change);
// e1.addEventListener("click",change,true);
// function change(){
//     alert(`this is ${this.id}`);
//     this.style.backgroundColor="red";
// }

//检查按键
//  window.addEventListener("keydown",event=>console.log(event.key));//在网页按什么，控制台输出什么
//方向控制，扩展
// const mydiv=document.getElementById("mydiv");
// window.addEventListener("keydown",move);
// let x=0,y=0;

// function move(event){
//     switch(event.key){
//         case "ArrowDown":
//             y+=5;
//             mydiv.style.top=y+"px";
//             break;
//         case "ArrowUp":
//             y-=5;
//             mydiv.style.top=y+"px";
//             break;
//         case "ArrowLeft":
//             x-=5;
//             mydiv.style.left=x+"px";
//             break;
//         case "ArrowRight":
//             x+=5;
//             mydiv.style.left=x+"px";
//             break;
//         default:
//             break;
//     }
// }

//animations
//类比于做ppt、剪辑时的一些转场动画
// const bt=document.getElementById("mybut");
// const mydiv=document.getElementById("mydiv");

// bt.addEventListener("click",begin);//添加点击事件

// function begin(){
//     let timerId=null;
//     let x=0,y=0; //移动
//     let degress=0; //旋转
//     let scareX=1,scareY=1;//延伸

//     timerId=setInterval(frame,5);

//     function frame(){
//         //右下角移动
//         if(x>=200 || y>=200){
//             clearInterval(timerId);
//         }
//         else{
//             x+=1;
//             y+=1;
//             mydiv.style.top=y+"px";
//             mydiv.style.left=x+"px";
//         }

//         //翻转
//         if(degress>=360){
//             clearInterval(timerId);
//         }
//         else{
//             degress+=1;
//             mydiv.style.transform="rotateZ("+degress+"deg)";
//             //rotateX、rotateY
//         }

//         //两功能合并
//         //  if(x>=200 || y>=200){
//         //     clearInterval(timerId);
//         // }
//         // else{
//         //     x+=1;
//         //     y+=1;
//         //     degress+=10;
//         //     mydiv.style.top=y+"px";
//         //     mydiv.style.left=x+"px";
//         //     mydiv.style.transform="rotateZ("+degress+"deg)";
//         // }
        
//         //延伸
      
//         if(scareX>=2){
//             clearInterval(timerId);
//         }
//         else{
//             scareX+=0.01;
//             mydiv.style.transform="scale("+scareX+","+scareY+")";
//         }
//     }
// }

//画布
// const cv=document.getElementById("mycanvas");
// let context=cv.getContext("2d");
// context.beginPath();
// context.moveTo(0,0);
// context.lineTo(250,250);
// context.lineTo(250,500);
// // context.moveTo(500,0);
// context.lineTo(250,250);
// context.stroke();

//cookies
// document.cookie="firstName=sdsd;expires=Sun;path=/";
// document.cookie="LastName=sdsd;expires=Sun;path=/";
// console.log(document.cookie);


// function deletecookie(name){
//     setCookie(name,null,null);
// }
// deletecookie("123");
// console.log(document.cookie);

//秒表
// const mytime=document.getElementById("myclock");
// let h=0,m=0,s=0;

// let miaobiao=null;
// //开始
// const start=document.getElementById("start");
// start.onclick=()=>{
//     miaobiao=setInterval(jishi,1000);
//     start.disabled=true;
//     pause.disabled=false; 
//     reset.disabled=false; 
// }
// //暂停
// const pause=document.getElementById("pause");
// pause.onclick=()=>{
//     clearInterval(miaobiao);   
//     pause.disabled=true; 
//     start.disabled=false;
//     reset.disabled=false; 
// }
// //重置
// const reset=document.getElementById("reset");
// reset.onclick=()=>{
//     clearInterval(miaobiao); //解决1：
//     miaobiao=null;//否则又会重新执行setInterval
//     h=0;
//     m=0;
//     s=0;
//     reset.disabled=true; 
//     start.disabled=false;
//     pause.disabled=false; 
//     mytime.innerHTML=`0${h}:0${m}:0${s}`;
// }
// function jishi(){
    
    // s+=1;
    // if(s>59){
    //     s=0;
    //     m+=1;
    // }
    // if(m>59){
    //     m=0;
    //     h+=1;
    // }
//     h1=get0(h);
//     m1=get0(m);
//     s1=get0(s);
//     mytime.innerHTML=`${h1}:${m1}:${s1}`;

//     //不够填0
//     function get0(m){
//         m=m.toString();
//         return m.length<2?"0"+m:m;
//     }
  
// }

/*
问题1：如果点了开始，再点重置，暂停就没用了，重置之后也会继续计数
A:见解决1：

问题2：多点几次开始，暂停和重置就无效了
A:看来要将button给失效化，即不能触发点击

*/
//教科书版
// const mytime=document.querySelector("#myclock");
// const mystart=document.querySelector("#start");
// const mypause=document.querySelector("#pause");
// const myreset=document.querySelector("#reset");
// let h=0,m=0,s=0;
// let starttime=0;
// let elapsedtime=0;
// let curtime=0;
// let IntervalId;
// let paused=true;

// mystart.addEventListener("click",()=>{
//     if(paused){
//         paused=false;
//         starttime=Date.now()-elapsedtime;
//         IntervalId=setInterval(updateTime,75);
//     }
// });
// mypause.addEventListener("click",()=>{
//     if(!paused){
//         paused=true;
//         elapsedtime=Date.now()-starttime;
//         clearInterval(IntervalId);
//     }

// });
// myreset.addEventListener("click",()=>{
//     paused=true;
//     clearInterval(IntervalId);
//     h=0;
//     m=0;
//     s=0;
//     starttime=0;
//     elapsedtime=0;
//     curtime=0;
//     mytime.textContent=`00:00:00`;
// });

// function updateTime(){
//     elapsedtime=Date.now()-starttime;
//     s=Math.floor((elapsedtime/1000)%60);
//     /*
//     elapsedtime/1000 将毫秒转换为秒
//      % 60 运算符取余数，确保秒数在 0 到 59 的范围内
//     Math.floor() 函数将结果向下取整，以确保返回整数值
//     */
//     m=Math.floor((elapsedtime/(1000*60))%60);
//     h=Math.floor((elapsedtime/(1000*60*60))%60);

//     s=get0(s);
//     m=get0(m);
//     h=get0(h);
//     mytime.textContent=`${h}:${m}:${s}`;


//     function get0(unit){
//         return (("0"+unit).length)>2?unit:"0"+unit;
//     }
// }

//石头剪刀布
// const me=document.querySelector("#me");
// const pc=document.querySelector("#pc");
// const shitou=document.querySelector("#shitou");
// const jiandao=document.querySelector("#jiandao");
// const bu=document.querySelector("#bu");
// const result=document.querySelector("#result");
// let res;//石头为1，剪刀为2，布为3
// //let x=Math.floor(Math.random()*3+1); //保证在1到3之间

// //键值对，方便查找
// const map=new Map();
// map.set(1,"石头");
// map.set(2,"剪刀");
// map.set(3,"布");

// shitou.addEventListener("click",()=>{
//     res=1;
//     x=Math.floor(Math.random()*3+1);
//     pc.textContent=map.get(x);
//     me.textContent="石头";
//     bijiao(x,res);
// });
// jiandao.addEventListener("click",()=>{
//     res=2;
//     x=Math.floor(Math.random()*3+1);
//     pc.textContent=map.get(x);
//     me.textContent="剪刀";
//     bijiao(x,res);
// });

// bu.addEventListener("click",()=>{
//     res=3;
//     x=Math.floor(Math.random()*3+1);
//     pc.textContent=map.get(x);
//     me.textContent="布";
//     bijiao(x,res);
// });

// function bijiao(p1,p2){
//     tem=p1-p2;
//     console.log(tem);
//     if(tem==-1||tem==2)
//     {
//         result.textContent="输了嘞！";
//     }
//     else if(tem==-2||tem==1){
//         result.textContent="赢了嘞！";
//     }
//     else result.textContent="平局嘞！";
    
// }

/*
Q1:双方都要同步显示出拳结果
A:
Q2:保证电脑在我点击时随机
*/
//优化版本

// const me=document.querySelector("#me");
// const pc=document.querySelector("#pc");
// const chuquan=document.querySelectorAll(".but");
// const result=document.querySelector("#result");
// let player,computer,res;
// chuquan.forEach(btn => btn.addEventListener("click",()=>{
//     player=btn.textContent;
//     cpturn();
//     //console.log(btn);
//     //console.log(player);
//     me.textContent=`${player}`;
//     pc.textContent=`${computer}`;
//     res=bijiao();
//     result.textContent=`展示结果：${res}`;

// }));

// function cpturn(){//电脑出拳
//     const x=Math.floor(Math.random()*3)+1;
//     switch(x){
//         case 1:
//             computer="石头";
//             break;
//         case 2:
//             computer="剪刀";
//             break;
//         case 3:
//             computer="布";
//             break;
//     }
// }

// function bijiao(){
//     if(player==computer){
//         return "平局啊！";
//     }
//     else if(computer=="石头"){
//         return player=="布"?"赢了嘞！":"输了诶！";
//     }
//     else if(computer=="剪刀"){
//         return player=="石头"?"赢了嘞！":"输了诶！";
//     }
//     else if(computer=="布"){
//         return player=="剪刀"?"赢了嘞！":"输了诶！";
//     }
// }

//井字棋
