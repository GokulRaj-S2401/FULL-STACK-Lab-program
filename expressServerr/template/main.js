document.getElementById('form').addEventListener('submit',(e)=>{
    let user = document.getElementById('name')
    let phno = document.getElementById('phno')

    // if(user.value.length < 3 || !user.value.match(/^[a-zA-Z]+$/) ){
    //     alert("User Name Not valid")
    // }
    if(phno.value.length !=10 || !phno.value.match(/^[0-9]+$/) ){
        alert("Enter valid phone number")
    }
    
    $.ajax({
        url:'/save',
        method:"post",
        data:{name:user.value,phno:phno.value},
    })

})