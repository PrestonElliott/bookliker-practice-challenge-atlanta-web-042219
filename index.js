document.addEventListener("DOMContentLoaded", () => {
    getBooks()
})

function getBooks() {
        fetch("http://localhost:3000/books")
        .then(res => res.json())
        .then(res => 
            {res.forEach(book => populateBook(book))
        })
}

function populateBook(book) {
    const ul = document.getElementById("list")
    const li = document.createElement("li")
    li.innerText = book.title
        li.addEventListener("click", () => {
            const showPanel = document.getElementById("show-panel")
            const h1 = document.createElement("h1")
            h1.innerText = book.title
            const img = document.createElement("img")
            img.src = book.img_url
            const p = document.createElement("p")
            p.innerText = book.description

            const button = document.createElement("button")
            button.innerText = "Like...Subscribe: "
            const btn_span = document.createElement("span")
            btn_span.innerText = book.likes
            button.append(btn_span)

                button.addEventListener("click", () => {
                    btn_span.innerText = parseInt(btn_span.innerText) + 1
                    fetch(`http://localhost:3000/books/${book.id}`,{
                        method: "PATCH",
                        headers: {"Content-Type":"application/json"},
                        body: JSON.stringify({"likes": btn_span.innerText})
                    })
                })
                showPanel.innerHTML = ""
                showPanel.append(h1, img, p, button)       
    })
    ul.append(li)
}

















// function displayBook(book) {

//     const list = document.getElementById("list")
    
//     list.innerHTML +=
//     `<li class="book_class" 
//         data-description="${book.description}"
//         data-image="${book.image}"
//         data-likes="${book.likes}"
//         id="${book.id}"> 
//         ${book.title}   
//     </li>`

//     list.addEventListener("click", (e) => {
//         console.log(e.target)
//         // (e.target.id === book.id) showBook(book)
//     })
// }

// function showBook(book) {
// }

























// document.addEventListener("DOMContentLoaded", () => {
//     getBooks()
//     document.addEventListener("click", handleClickEvents)
// })

// function handleClickEvents(e) {
//     if(e.target.className === "book_class") bookDetails(e.target)
// }

// function getBooks() {
//     fetch("http://localhost:3000/books")
//     .then(res => res.json())
//     .then(res => 
//         {res.forEach(book => displayBook(book))
//         })
//         // form.addEventListener("submit", readBook)
// } 

// function displayBook(book) {
//     const bookList = document.querySelector("#list")
//     bookList.innerHTML += 
//         `<li id=${book.id} class="book_class"> 
//             ${book.title}
//             <data-description="${book.description}"
//             data-image="${book.img_url}"
//             </data>
//         </li>`
// }

// function bookDetails(book_class) {
//     console.log("This is the description: ",book_class.description)

//     document.querySelector("#show-panel").innerHTML = 
//     `${book_class.id}
//     <h3>${book_class.dataset.title}</h3>
//     <img src=${book_class.dataset.img_url}>
//     <p>${book_class.dataset.description}</p>
//     `  
// }
