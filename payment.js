
let total=625

let discount=total*(20/100)

let gst=total*(8/100)

let estimate=total+gst-discount

document.getElementById("total").innerText=total;
document.getElementById("discount").innerText=-discount;
document.getElementById("gst").innerText=gst;

document.getElementById("estimate").innerText=estimate;