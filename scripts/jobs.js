let query;
let loc;
let result = false;
let data=[];
document.getElementById("search-data").addEventListener("click", () => {
  getData();
  console.log(result);
 
  document.getElementById("Skills").value = "";
  document.getElementById("location").value = "";

});
async function getData() {
 query = document.getElementById("Skills").value;
  loc = document.getElementById("location").value;
  if (query == "") {
    alert("Something going wrong search again!!!");
    result = true;
    return;
  }
  if (loc == "") {
    let url = `https://vast-falls-97578.herokuapp.com/api/job_Data?title=${query}`;
    let res = await fetch(url);

     data = await res.json();
    console.log(data);
    localStorage.setItem("jobs-data", JSON.stringify(data));
     window.location.href = "jobsec.html";
    console.log(data);
  } else {
    let url = `https://vast-falls-97578.herokuapp.com/api/job_Data?title=${query}&&location=${loc}`;
    let res = await fetch(url);

     data = await res.json();
    console.log(data);
    localStorage.setItem("jobs-data", JSON.stringify(data));
    window.location.href = "jobsec.html";
    console.log(data);
    //append(data);
  }
  // document.getElementById("Skills").value = "";
  // document.getElementById("location").value = "";
  //   let url = `https://swapi.dev/api/people/?search=${query}`;
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
