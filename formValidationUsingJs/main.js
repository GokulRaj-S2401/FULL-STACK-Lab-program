document.getElementById('form').addEventListener('submit',(e)=>{
    e.preventDefault()
    
    let name = document.getElementById('name')
    let error = []
    let nameCondition = /^[A-Za-z]+$/;
    if(name.value.length == 0){
        error.push({'id':name.id,'error':'required'})
    }
    else if(!name.value.match(nameCondition)){
        error.push({'id':name.id,'error':'Name Must be Letters'})
    }
    
    for (const x of error) {
        document.getElementById(x.id+"Error").innerText = x.error
    }
})