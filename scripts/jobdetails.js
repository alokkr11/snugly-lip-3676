import { navBar } from "../components/nav.js";
document.getElementById("navbar").innerHTML = navBar();

let data = JSON.parse(localStorage.getItem("job-div"));
console.log(data);
let container = document.getElementById("job-details");
let append = (data) => {
  // container.innerHTML="";
  let div = document.createElement("div");
  div.style = "padding:20px 40px;";
  let title = document.createElement("h4");
  title.innerText = data.title;
 let comp = document.createElement("p");
comp.innerText = data.comapany;
  let exp1 = document.createElement("i");
  exp1.setAttribute("class", "fa fa-calendar-o");
  let exp2 = document.createElement("p");
  exp2.innerText = data.experience;

  let div1 = document.createElement("div");

  div1.append(exp1, exp2);
  div1.style = "display:flex;gap:10px;";
  let sal1 = document.createElement("i");
  sal1.setAttribute("class", "fa fa-rupee");

  let sal2 = document.createElement("p");
  sal2.innerText = data.salary;
  let div2 = document.createElement("div");

  div2.append(sal1, sal2);
  div2.style = "display:flex;gap:10px;";


   let loc1 = document.createElement("i");
   loc1.setAttribute("class", "fa fa-map-marker");

   let loc2 = document.createElement("p");
  loc2.innerText = data.location;
   let div3 = document.createElement("div");

   div3.append(loc1, loc2);
   div3.style = "display:flex;gap:10px;";
   let apply=document.createElement("button");
  apply.innerText="Apply";
  apply.style="background:green;padding:8px 30px;border:none;border-radius:8px;color:white;font-weight:bold;margin-top:20px;text-transform:uppercase;"
  
  apply.onclick=()=>{
    alert(`Successfully appplied for ${data.title}`);
    window.location.href="./jobs.html";
  }
  div.append(title,comp ,div1,div2,div3,apply);
  container.append(div);
};
append(data);
