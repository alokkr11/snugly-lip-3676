import { navBar } from "../components/nav.js";
document.getElementById("navbar").innerHTML = navBar();

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
 document.getElementById("cz").addEventListener("click",()=>{
  filter(job_Data);
 })
// document.getElementById("in").addEventListener("click", () => {
//   filter(job_Data);
// });
 let filter=(data)=>{

   let container = document.getElementById("data-container");
   container.innerHTML = "";
  
   let cmp = document.getElementById("cz").innerText;
   
   console.log(cmp)
   data.forEach(function (el) {
     let div = document.createElement("div");
     div.style =
       "padding:30px;box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;margin-bottom:20px;";
     div.addEventListener("click", () => {
       localStorage.setItem("job-div", JSON.stringify(el));
       window.location.href = "./jobdetails.html";
     });
     if(cmp===el.comapany){
  let div1 = document.createElement("div");
  div1.style = "display:flex;gap:10px;align-items:center";

  let title = document.createElement("h4");
  title.innerText = el.title;
  title.style = "margin-top:20px;margin-bottom:10px;";
  let compn = document.createElement("p");
  compn.innerText = el.comapany;

  let exp1 = document.createElement("i");
  exp1.setAttribute("class", "fa fa-calendar-o");
  let exp2 = document.createElement("p");
  exp2.innerText = `${el.experience}`;

  let sal = document.createElement("i");
  sal.setAttribute("class", "fa fa-rupee");

  let sal1 = document.createElement("p");
  sal1.innerText = el.salary;

  let div3 = document.createElement("div");
  div3.style = "display:flex;gap:7px;";

  let desc1 = document.createElement("i");
  let desc2 = document.createElement("p");

  desc2.innerText = el.desc;
  desc1.setAttribute("class", "fa fa-file-word-o");
  let role = document.createElement("p");

  let img = document.createElement("img");
  img.src = el.image;
  img.style = "width:20%;";
  role.innerText = el.role;
  console.log(el);
  div3.append(desc1, desc2);
  div1.append(exp1, exp2, sal, sal1, img);
  div.append(title, compn, div1, div3);
  container.append(div);
     }
   
   });

 }
// async function getData() {
//   // let query = document.getElementById("Skills").value;
//   //let loc = document.getElementById("location").value;
//   //   let url = `https://swapi.dev/api/people/?search=${query}`;
//   let url = `http://localhost:3000/api/job_Data`;
//   let res = await fetch(url);

//   let data = await res.json();

//   console.log(data);
//   append(data);
// }
// getData();

let job_Data=JSON.parse(localStorage.getItem("jobs-data"));
let job_arr=JSON.parse(localStorage.getItem("job-div"));
function append(data) {
  let container = document.getElementById("data-container");
  container.innerHTML = "";
  data.forEach(function (el) {
    let div = document.createElement("div");
    div.style =
      "padding:30px;box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;margin-bottom:20px;";
      div.addEventListener("click",()=>{
      
        localStorage.setItem("job-div",JSON.stringify(el));
        window.location.href="./jobdetails.html";
      })
    let div1 = document.createElement("div");
    div1.style = "display:flex;gap:10px;align-items:center";


    let title = document.createElement("h4");
    title.innerText = el.title;
   title.style = "margin-top:20px;margin-bottom:10px;";
    let compn = document.createElement("p");
    compn.innerText = el.comapany;

    let exp1 = document.createElement("i");
    exp1.setAttribute("class", "fa fa-calendar-o");
    let exp2 = document.createElement("p");
    exp2.innerText = `${el.experience}`;

    let sal = document.createElement("i");
    sal.setAttribute("class", "fa fa-rupee");

    let sal1 = document.createElement("p");
    sal1.innerText = el.salary;

    let div3 = document.createElement("div");
    div3.style = "display:flex;gap:7px;";

    let desc1 = document.createElement("i");
    let desc2 = document.createElement("p");

    desc2.innerText = el.desc;
    desc1.setAttribute("class", "fa fa-file-word-o");
    let role = document.createElement("p");

    let img=document.createElement("img");
    img.src=el.image;
    img.style="width:20%;"
    role.innerText = el.role;
    console.log(el);
    div3.append(desc1, desc2);
    div1.append(exp1, exp2, sal, sal1,img);
    div.append(title, compn, div1, div3);
    container.append(div);
  });
}
append(job_Data);

document.getElementById(
  "search-section-detail"
).innerText = `Showing data::: '${job_Data[0].title},${job_Data[0].location}'`;
