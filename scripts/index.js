let dataInt = [
    {
        logo: "https://img.naukimg.com/logo_images/groups/v1/3315308.gif",
        day: "1d ago",
        title: "SDE - MERN/ Java/ Python/ Scala/ Big Data..",
        comp: "Unify Technologies",
        img1: "https://static.naukimg.com/s/7/0/assets/images/src/widgets/popular-jobs-wdgt/v1/resources/location-icon.c9524903.svg",
        location: "Hyderabad",
        img2: "https://static.naukimg.com/s/7/0/assets/images/src/widgets/popular-jobs-wdgt/v1/resources/experience-icon.6dd9384e.svg",
        exp: "0-1 Yrs"
    },
    {
        logo: "https://img.naukimg.com/logo_images/groups/v1/3147538.gif",
        day: "1d ago",
        title: "Android Developer",
        comp: "DigiMantra Enterprise",
        img1: "https://static.naukimg.com/s/7/0/assets/images/src/widgets/popular-jobs-wdgt/v1/resources/location-icon.c9524903.svg",
        location: "Mohali",
        img2: "https://static.naukimg.com/s/7/0/assets/images/src/widgets/popular-jobs-wdgt/v1/resources/experience-icon.6dd9384e.svg",
        exp: "1-3 Yrs"
    },
    {
        logo: "https://img.naukimg.com/logo_images/groups/v1/4577913.gif",
        day: "1d ago",
        title: "Integration Engineer | Noida",
        comp: "CRMNEXT",
        img1: "https://static.naukimg.com/s/7/0/assets/images/src/widgets/popular-jobs-wdgt/v1/resources/location-icon.c9524903.svg",
        location: "Noida",
        img2: "https://static.naukimg.com/s/7/0/assets/images/src/widgets/popular-jobs-wdgt/v1/resources/experience-icon.6dd9384e.svg",
        exp: "1-3 Yrs"
    },
    {
        logo: "https://img.naukimg.com/logo_images/groups/v1/4624935.gif",
        day: "1d ago",
        title: "Dot Net Developer",
        comp: "SEW Engineering",
        img1: "https://static.naukimg.com/s/7/0/assets/images/src/widgets/popular-jobs-wdgt/v1/resources/location-icon.c9524903.svg",
        location: "Noida",
        img2: "https://static.naukimg.com/s/7/0/assets/images/src/widgets/popular-jobs-wdgt/v1/resources/experience-icon.6dd9384e.svg",
        exp: "1-5 Yrs"
    }
]
function intAppend(data) {
    let cont = document.getElementById("intdiv");
    data.forEach((el) => {
        div1 = document.createElement("div")
        let img = document.createElement("img");
        img.src = el.logo;
        img.setAttribute("class", "Ilogo")
        let d = document.createElement("span")
        d.innerText = el.day;
        div1.append(img, d)
        let h2 = document.createElement("h3")
        h2.innerText = el.title;
        let c = document.createElement("p")
        c.innerText = el.comp;
        let img1 = document.createElement("img");
        img1.src = el.img1;
        let img2 = document.createElement("img");
        img2.src = el.img2;
        let s = document.createElement("span")
        s.append(img1, el.location, img2, el.exp)

        let div = document.createElement("div");
        div.append(div1, h2, c, s)
        cont.append(div)
    })
}
intAppend(dataInt)