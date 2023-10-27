let ar = document.querySelector("#ar")
let en = document.querySelector("#en")
let email = document.querySelector("#email")
let num = document.querySelector("#num")
let id = document.querySelector("#id")
let year = document.querySelector("#year")
let submit = document.querySelector("#submit")
let male = document.querySelector("#male")
let female = document.querySelector("#female")
let label = document.querySelectorAll("label")


let valid = (e)=>{
    let arv = false
    let env = false
    let emailv = false
    let numv = false
    let idv = false
    let yearv  = false
    let checkv  = false
// arabic valid
    var arRe =  /^[ء-ي ]+$/g;
    if (arRe.test(ar.value)){
    console.log("good")
    }else{
    ar.style.borderColor = "rgb(57, 15, 97)"
    }

    // english valid
    var enRe = /^[a-zA-Z]+$/; 
    if (enRe.test(en.value)) {
        env === true
        console.log("good")
    }else{
        en.style.borderColor = "rgb(57, 15, 97)"
    }
    // email valid
    var emailRe = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    if (emailRe.test(email.value)) {
        emailv === true
        console.log("good")
    }else{
        email.style.borderColor = "rgb(57, 15, 97)"
    }
    // phone valid
    var numRe = /\d{11}/; 
    if (numRe.test(num.value)) { 
        numv === true
        console.log("good")
    }else{
        num.style.borderColor = "rgb(57, 15, 97)"
    }
    
    // id valid
    let idRe = /\d{14}/;
    if(idRe.test(id.value)){
        idv === true
    console.log("good")
}else{
    id.style.borderColor = "rgb(57, 15, 97)"
}
    // year valid
    let yearRe = /\d/;
    if(yearRe.test(year.value)){
        yearv === true
    console.log("good")
}else{
    year.style.borderColor = "rgb(57, 15, 97)"
}
    // gender valid
if(male.checked ===true || female.checked ===true){
    checkv === true
    console.log("good")
}
    
    if (arv === false || env === false || emailv === false || numv ===false || idv ===false|| yearv === false || checkv === false){
        e.preventDefault()
        label[0].style.color="rgb(57, 15, 97)"
        label[1].style.color="rgb(57, 15, 97)"
        label[2].style.color="rgb(57, 15, 97)"
        
    } 
}


//events
submit.addEventListener("click", valid)
