let user_data=JSON.parse(localStorage.getItem("user_data"))||[];

let register=()=>{
    let name=document.getElementById("name").value ;
    let email=document.getElementById("email").value ;
    let password=document.getElementById("password").value ;
    let number=document.getElementById("number").value ;

    let user={name,email,password,number}



   

    
    if((checkEmail(email))===true){
        user_data.push(user);

    }else{
        alert("user already exist")
    }
    
    localStorage.setItem("user_data",JSON.stringify(user_data))

    document.getElementById("name").value=null;
    document.getElementById("email").value=null;
    document.getElementById("password").value=null;
    document.getElementById("number").value=null;
}

let checkEmail=(email)=>{
    let filtered=user_data.filter((el)=>{
        return email===el.email
    })
    if(filtered.length>0){
        return false
    }else{
        return true;
    }
}