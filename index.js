let onePoint = 1
let twoPoint = 2
let threePoint = 3
let score = 0

let homeScore = document.getElementById("home-score")

let guestScore = document.getElementById("guest-score")



function add1point() {
    homeScore.textContent = score += onePoint
}
function add2point() {
    homeScore.textContent = score += twoPoint
}
function add3point() {
    homeScore.textContent = score += threePoint
}

function add1pointG() {
    guestScore.textContent = score += onePoint
}
function add2pointG() {
    guestScore.textContent = score += twoPoint
}
function add3pointG() {
    guestScore.textContent = score += threePoint
}

let winner = document.getElementById("winner")
if (homeScore > guestScore) {
    winner.textContent = homeScore
}