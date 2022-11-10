// Your code here
console.log("test") 


const baseUrl = "http://localhost:3000/films/"
const filmsPoster = document.getElementById("poster")
const filmsTitle = document.getElementById("title")
const filmsShowtime = document.getElementById("showtime")
const filmsCapacity = document.getElementById("capacity")
const filmsAvailableTickets = document.getElementById("tickets_sold")
const filmsFilmItem = document.getElementById("film-item")


const request = async () => {
    let req = await fetch("http://localhost:3000/films")
    let res = await req.json()
    res.forEach((films) => {
        let img = document.getElementById("poster")
        img.src = films.poster
        filmsFilmItem.innerText = films.title 
        filmsShowtime.innerText = films.showtime
        filmsCapacity.innerText = films.capacity



    })
    
} 
request() 
 

