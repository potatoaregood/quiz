const data = [
    {
    question: "who is mr thomas",
    a:"A janitor",
    b:" A teacher",
    c: " A social worker",
    d: " A ceo",
    correct: "b",
    },
    {
    question: "whats my favorite color",
    a:"Blue",
    b:" Red",
    c: " Green",
    d: " Hot pink",
    correct: "a",
    },
    {
    question: "who is my best friend",
    a:"Lee ",
    b:" Schina",
    c: " Jude",
    d: " Autumn",
    correct: "d",
    },
    {
    question: "what do i like to do",
    a:"tennis",
    b:" baseball",
    c: " kickball",
    d: " football",
    correct: "a",
    },
    {
    question: "what do i not like to eat",
    a:"lemons",
    b:" brocoli",
    c: " steak",
    d: " eggrolls",
    correct: "b",
    } ,
    {
    question: "what class is my first period",
    a:"advanced math",
    b:" history",
    c: " science",
    d: " english",
    correct: "a",
    }, 
    {
    question: "what is my mom ",
    a:"A janitor",
    b:" A teacher",
    c: " A social worker",
    d: " A ceo",
    correct: "b",
    }, 
    {
    question: "who is mrs baulch",
    a:"A super hero",
    b:" A teacher",
    c: " A spy",
    d: " An amazing person",
    correct: "d",
    }, 
    {
    question: "whats one of my dogs name",
    a:"Piglet",
    b:" Doggo",
    c: " soup",
    d: " grilled cheese",
    correct: "a",
    }, 
    {
    question: "when is my birthday",
    a:"2012",
    b:" 2010",
    c: " 2009",
    d: " 2011",
    correct: "d",
    }
]

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionE1 = document.getElementById("question")
const optionA = document.getElementById("optionA")
const optionB = document.getElementById("optionB")
const optionC = document.getElementById("optionC")
const optionD = document.getElementById("optionD")

const submitBtn = document.getElementById("submit")

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
    deselectAnswers()

    const currentQuizData = data[currentQuiz]

    questionE1.innerText = currentQuizData.question
    optionA.innerText = currentQuizData.a
    optionB.innerText = currentQuizData.b
    optionC.innerText = currentQuizData.c
    optionD.innerText = currentQuizData.d

}

function deselectAnswers(){
    answerEls.forEach((answerEls) =>(
        answerEls.checked = false
    ))
}

function getSelected(){
    let answer

    answerEls.forEach((answerE1) =>{
        if(answerE1.checked){
            answer = answerE1.id
        }
    })

    return answer
}

submitBtn.addEventListener("click", () =>{
    const answer = getSelected()

    if(answer){
        if(answer === data[currentQuiz].correct){
            score++
        } 
        currentQuiz++
        if (currentQuiz < data.length){
            loadQuiz()
        }
        else{
            quiz.innerHTML= `
            <h2> You Answered ${score}/${data.length} Question correctly</h2>

        <button onclick="location.reload()"> do it again</button>
            `
        }
    }
})