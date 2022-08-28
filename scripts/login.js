let logindata=JSON.parse(localStorage.getItem("user_data"))||[];

let login=()=>{
    let email=document.getElementById("email").value ;
    let password=document.getElementById("password").value ;
    
    let user={email,password}


    if((checkdetail(email,password))===true){
        
        logindata.push(user)
        localStorage.setItem("login_user",JSON.stringify(user))
        alert(`User Login Successfully`)
        window.location.href="./jobs.html"
    }else{
        alert("Invalid Email and Password")
    }

    document.getElementById("email").value=null;
    document.getElementById("password").value=null;

}

let checkdetail=(email,password)=>{
    let filtered=logindata.filter((el)=>{
        return email==el.email && password==el.password
    })
    if(filtered.length>0){
        return true
    }else {
        return false
    }
}

let register=()=>{
    window.location.href="./register.html"
}

