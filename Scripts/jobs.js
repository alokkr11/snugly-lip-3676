let query;
let loc;
let result = false;
document.getElementById("search-data").addEventListener("click", () => {
  getData();
  console.log(result);
  if (result == false) {
    window.location.href = "./jobsec.html";
  }
});
async function getData() {
  query = document.getElementById("Skills").value;
  loc = document.getElementById("location").value;
  if (query == "" || loc == "") {
    alert("Something going wrong search again!!!");
    result = true;
    return;
  }
  //   let url = `https://swapi.dev/api/people/?search=${query}`;
  let url = `http://localhost:3000/api/job_Data/?title=${query}&&location=${loc}`;
  let res = await fetch(url);

  let data = await res.json();
  localStorage.setItem("jobs-data", JSON.stringify(data));
  console.log(data);
  //append(data);
}
//getData();

// function append(data) {
//   let container = document.getElementById("data-container");
//   container.innerHTML = "";
//   data.forEach(function (el) {
//     let div = document.createElement("div");
//     // div.setAttribute("class", "parent-div");

//     // div1.addEventListener("click", () => {
//     //   localStorage.setItem("Item", JSON.stringify(el));
//     //   starWar();
//     // });
//     let title = document.createElement("p");
//     title.innerText = el.title;
//     console.log(el);
//     div.append(title);
//     container.append(div);
//   });
// }
// let id;
// let debounce = (delay, func) => {
//   if (id) {
//     clearTimeout(id);
//   }
//   id = setTimeout(() => {
//     func();
//   }, delay);
// };

async function fetchData(){
    query = document.getElementById("Skills").value;
  let res = await fetch(
    `http://localhost:3000/api/job_Data/?title=${query}`
  );
  let data=await res.json();
  console.log(data);
}