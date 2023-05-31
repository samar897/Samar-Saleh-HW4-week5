//قم بكتابة مصفوفة جديدة تحتوي على بقية ايام الاسبوع ,قم بدمج مصفوفة weekDays معها وحفظها في مصفوفة جديده باسم week :
console.log("//قم بكتابة مصفوفة جديدة تحتوي على بقية ايام الاسبوع ,قم بدمج مصفوفة weekDays معها وحفظها في مصفوفة جديده باسم week :");

const weekDays = ['Sunday','Monday','Tuesday'];

const week  = ['Wednesday','Thursday','Friday','Saturday'];

const AllDays = weekDays.concat(week);

console.log(AllDays);
console.log();
/*استخرج الكلمات التي تتكون من اكثر من 6 حروف وحفظ في مصفوفة longWords
استخرج الكلمات التي تتكون من 4 حروف فقط واحفظها في مصفوفة shortWords*/


const words = ['knot', 'roof', 'snake', 'humanity', 'available', 'automatic'];

const shortWords= words.filter((word)=> ( word.length ===4 ));

const longWords= words.filter((word)=> ( word.length > 6 ));

console.log("shortWords "+shortWords);
console.log();
console.log("longWords "+longWords);


/*من المصفوف التالية استخرج مصفوفة جديدة تقوم بتخزين مضروب العدد في نفسه
في مصفوفة جديده استخرج الجذر التربيعي للاعداد
const num = [1, 9, 16, 15, 36, 45];*/

console.log();

const num = [1, 9, 16, 15, 36, 45];

const factorials = num.map((n) => {
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
});


console.log(factorials);


/*
من مصفوفة num استخرج اول قيمة تقبل القسيمة على 3 و على 5 .

من مصفوفة num استخرج اول عدد يقبل القسمة على 2 


*/
console.log();

const square_roots = num.map((n) => Math.sqrt(n));
console.log();
console.log(square_roots);

const first_divisible_by_3_and_5 = num.find((n) => n % 3 === 0 && n % 5 === 0);
console.log();
console.log(first_divisible_by_3_and_5);
console.log();


const first_divisible_by_2 = num.find((n) => n % 2 === 0);

console.log(first_divisible_by_2);

console.log();


/*
قم بكتابة دالة جديدة تقوم بـدمج مصفوفة weekو مصفوفة num وحفظها في مصفوفه جديده وقم بطباعة محتويات المصفوفة الجديدة .
*/

console.log("قم بكتابة دالة جديدة تقوم بـدمج مصفوفة weekو مصفوفة num وحفظها في مصفوفه جديده وقم بطباعة محتويات المصفوفة الجديدة .");
console.log();

const AllElement = week.concat(num);

console.log(AllElement);
console.log();


console.log("//اكتب داله تبحث عن الرقم 3 في المصفوفة التالية :");

//اكتب داله تبحث عن الرقم 3 في المصفوفة التالية :

const findNumber3 = (number) => {
    return number.find((n) => n == 3);
  };
  
  const number = ["5", "6", "3"];
  
  const result = findNumber3(number);
  
  console.log(result); // 3

  console.log();



//حول مصفوفة week الى String
const strweek = week.join()
console.log(strweek) 


console.log();

/*
حول مصفوفة week الى String
حول مصفوفة num الى Stringو ضع بين عنصر @.

*/ 


const strweek2 = week.join("@")
console.log(strweek2) 


console.log();


/*
قم بعكس ترتيب مصفوفة week .
حول النص التالي الى مصفوفة
بحيث يكون كل عنصر هو جمله تنتهي بـفاصلة , :*/

week.reverse();

console.log(week);


console.log();

const text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit, Eveniet beatae ut sequi ipsa, labore commodi,'

const text2 = text.split(',');
console.log(text2); //output: [ 'red', 'green', 'blue', 'black' ]
console.log();
console.log();

/*
قم بعمل صفحة Html تحتوي على button و p باستخدام js غير قيمة النص عند الضغط على الزر .

قم بإضافة خيار زيادة حجم الخط و تقليص حجم الخط .

قم بعمل خيار وضع خلفية للنص .

*/

function changeText() {
    let text = document.getElementById("text");
    text.textContent = "This is the new text.";
  }
  
  function setBackground() {
    let text = document.getElementById("text");
    text.style.backgroundColor = "red";
  }
  
  function increaseFontSize() {
    let text = document.getElementById("text");
    text.style.fontSize = "16px";
  }
  
  function decreaseFontSize() {
    let text = document.getElementById("text");
    text.style.fontSize = "12px";
  }

  







