
let total=+document.getElementById("price").innerText

let discount=total*(20/100)

let gst=total*(8/100)

let estimate=total+gst-discount

document.getElementById("total").innerText=total;
document.getElementById("discount").innerText=-discount;
document.getElementById("gst").innerText=gst;

document.getElementById("estimate").innerText=estimate;

let pay=()=>{
    window.location.href="./payment.html"
}

let shop=()=>{
    window.location.href="./services1.html"
}


