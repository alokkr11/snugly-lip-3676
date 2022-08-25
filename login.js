let user_data=JSON.parse(localStorage.getItem("user_data"))||[];

let login=()=>{
    let email=document.getElementById("email").value ;
    let password=document.getElementById("password").value ;
    
    let user={email,password}

    if((checkdetail(email,password))===true){
        alert(`User Login Successfully`)
        window.location.href="./index.html"
    }else{
        alert("Invailed Email and Password")
    }

}

let checkdetail=(email,password)=>{
    let filtered=user_data.filter((el)=>{
        return email==el.email && password==el.password
    })
    if(filtered.length>0){
        return true
    }else {
        return false
    }
}