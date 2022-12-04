const cardArray = [
    {
        name: 'Unicorn1',
        img: 'Images/Unicorn1.jpg',
    },
    {
        name: 'Unicorn2',
        img: 'Images/Unicorn2.jpg',
    },
    {
        name: 'Unicorn3',
        img: 'Images/Unicorn3.jpg',
    },
    {
        name: 'Unicorn4',
        img: 'Images/Unicorn4.jpg',
    },
    {
        name: 'Unicorn5',
        img: 'Images/Unicorn5.jpg',
    },
    {
        name: 'Unicorn1',
        img: 'Images/Unicorn1.jpg',
    },
    {
        name: 'Unicorn2',
        img: 'Images/Unicorn2.jpg',
    },
    {
        name: 'Unicorn3',
        img: 'Images/Unicorn3.jpg',
    },
    {
        name: 'Unicorn4',
        img: 'Images/Unicorn4.jpg',
    },
    {
        name: 'Unicorn5',
        img: 'Images/Unicorn5.jpg',
    },
]

cardArray.sort(() => 0.5 - Math.Random)

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChoosen = []
let cardsChoosenIds = []
const cardsWon = []

function createBoard () {
    for (let i =0; i < 10; i++){
        const card =document.createElement('img')
        card.setAttribute('src', 'Images/freespace.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard();

function checkMatch (){
const cards = document.querySelectorAll('#grid img')
const optionOneId = cardsChoosenIds [0]
const optionTwoId = cardsChoosenIds [1]
if(optionOneId === optionTwoId){
    cards[optionTwoId].setAttribute('src', 'Images/freespace.jpg')
    cards[optionTwoId].setAttribute('src', 'Images/freespace.jpg')
    alert('You clicked the same card!')
}

if (cardsChoosen[0] == cardsChoosen[1]) {
        alert("You found a match!")
        cards[optionOneId].setAttribute('src', 'Images/white-background.jpg') //after they find match this makes the picture turn white
        cards[optionTwoId].setAttribute('src', 'Images/white-background.jpg')//this is the code to make the second picture in the match turn white
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChoosen)
    } else{
        cards[optionOneId].setAttribute('src', 'Images/freespace.jpg')
        cards[optionTwoId].setAttribute('src', 'Images/freespace.jpg')
        alert('Sorry try again!')
    }
    resultDisplay.innerHTML = cardsWon.length //you can also use textConect instead of innerhtml
    cardsChoosen = []
    cardsChoosenIds = []

    if (cardsWon.length == cardArray.length/2){
        resultDisplay.innerHTML = 'Congrats, you won!'
    }

}

function flipCard (){
    const cardId = this.getAttribute ('data-id')
   cardsChoosen.push(cardArray[cardId].name)
   cardsChoosenIds.push(cardId)
   this.setAttribute('src', cardArray[cardId].img)
   if (cardsChoosen.length === 2) {
    setTimeout(checkMatch, 500)
   }
}