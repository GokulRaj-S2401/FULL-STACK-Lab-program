document.getElementById('form').addEventListener('submit',(e)=>{
    let user = document.getElementById('name')
    let phno = document.getElementById('phno')

    if(user.value.length<3 || user.value.match(/^[a-zA-Z]+$/) ){
        alert("User Name Not valid")
    }
    
    e.preventDefault();

})