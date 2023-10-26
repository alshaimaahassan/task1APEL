let ar = document.querySelector("#ar")
let en = document.querySelector("#en")
let email = document.querySelector("#email")
let num = document.querySelector("#num")
let id = document.querySelector("#id")
let year = document.querySelector("#year")
let submit = document.querySelector("#submit")
let male = document.querySelector("#male")
let female = document.querySelector("#female")



let valid = (e)=>{
    let arv = false
    let env = false
    let emailv = false
    let numv = false
    let idv = false
    let yearv  = false
    let checkv  = false

    var arRe =  /[\u0600-\u06FF\u0750-\u077F]/g;
    if (arRe.test(arv.valueOf)){
    console.log("good")
}else{
   ar.style.color("red")
}


    var enRe = /^[a-zA-Z]+$/; 
    if (enRe.test(en.value)) {
        env === true
        console.log("good")
    }else{
        console.log("bad")
    }
    


    var emailRe = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    if (emailRe.test(email.value)) {
        emailv === true
        console.log("good")
    }else{
        console.log("bad")
    }

    var numRe = /\d{11}/; 
    if (numRe.test(num.value)) { 
        numv === true
        console.log("good")
    }else{
        console.log("bad")
    }
    

    let idRe = /\d{14}/;
    if(idRe.test(id.value)){
        idv === true
    
    console.log("good")
}else{
    console.log("bad")
}
    let yearRe = /\d/;
    if(yearRe.test(year.value)){
        yearv === true
    
    console.log("good")
}else{
    console.log("bad")
}

if(male.checked ===true || female.checked ===true){
    checkv === true
}

    if (arv === false || env === false || emailv === false || numv ===false || idv ===false|| yearv === false || checkv === false){
        e.preventDefault()
        
    } 
}


//events
submit.addEventListener("click", valid)



// var isArabic = /[\u0600-\u06FF\u0750-\u077F]/;