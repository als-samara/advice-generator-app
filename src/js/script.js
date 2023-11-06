const button = document.getElementById("button")
const adviceID = document.getElementById("advice-id")
const description = document.getElementById("description-id")

button.addEventListener('click', () => {
    generateRandomAdvice()
})

async function generateRandomAdvice(){
    const url = 'https://api.adviceslip.com/advice'
    const answer = await fetch(url)
    const json = await answer.json()
    adviceID.innerHTML = `ADVICE #${await json.slip.id}`
    description.innerHTML = await json.slip.advice
}

generateRandomAdvice()