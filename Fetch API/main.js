
function fetchContect(arg){
    fetch("https://www.googleapis.com/books/v1/volumes?q="+arg).then((res)=>res.json()).then((data)=>{
    for (let i = 0; i < data.items.length; i++) {
        let card = document.createElement('div')
        card.className = "card"
        let imgArea = document.createElement('img')
        imgArea.className = "imgArea"
        imgArea.src = data.items[i].volumeInfo.imageLinks.thumbnail
        card.appendChild(imgArea)
        let description = document.createElement('div')
        description.className = 'bookDescription'
        let title = document.createElement('p')
        title.className = "title"
        title.textContent = data.items[i].volumeInfo.title
        description.appendChild(title)
        let link = document.createElement('a')
        link.className = "readnow"
        link.href = data.items[i].volumeInfo.previewLink
        link.textContent = "view"
        link.target = 1
        description.appendChild(link)
        card.appendChild(description)
        let content =  document.getElementById('content')
        content.appendChild(card)
    }
})
}

let btn = document.getElementById('sbtn')
btn.addEventListener('click',function(){
    let value = document.getElementById('search').value
    if(value.length == 0){
        const ele = document.getElementById('content')
        for (let index = 0; index < 10; index++) {
            ele.removeChild(ele.firstElementChild)
        }
       fetchContect('html')
    }
    else{
        const ele = document.getElementById('content')
        for (let index = 0; index < 10; index++) {
            ele.removeChild(ele.firstElementChild)
        }
        fetchContect(value)
    }

})

fetchContect('html')
