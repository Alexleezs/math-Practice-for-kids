class Question {
    constructor (num1, num2, operation) {
        this.num1=num1;
        this.num2=num2;
        this.operation=operation;
        this.correctAnswer=eval(num1+operation+num2)
        this.answerCheck=false;
    }
}

const questions=[];
// var answerChecked=[];
var name=document.querySelector('.name').value;
if (localStorage.getItem('scores')==null) {
    var scores={Alex:0, Phoebe:0, Charlotte:0};
    let scoresJSON=JSON.stringify(scores);
    localStorage.setItem('scores', scoresJSON)
} else {
}   var scores=JSON.parse(localStorage.getItem('scores'))
document.getElementById('score').textContent=scores[name];
const nameSelect=document.querySelector('.name');
    nameSelect.addEventListener('change', ()=>{
    name=document.querySelector('.name').value;
    document.getElementById('score').textContent=scores[name]
})


function createQuestions(qty) {
    const operations=['+','-']
    questions.length=0;
    for (index=0; index<qty; index++) {
       let a=Math.floor(Math.random()*50)
        let b=Math.floor(Math.random()*50)
        let num1=0, num2=0;
        if (a>b) {
            num1=a  ;
            num2=b  ;
        } else {
            num1=b;
            num2=a;
        }
        let operation=operations[Math.floor(Math.random()*operations.length)]
        questions.push(new Question(num1, num2,operation))
        // answerChecked.push(false)
        // questions.push(question)
    }
    // return questions
}

function addHTML() {
        // let questions=JSON.parse(localStorage.getItem('questions'));
    let section=document.querySelector('.content')
    section.innerHTML='';

    // get the detail from the question, inject to the HTML text 
     questions.forEach(question => {  
        let htmlText=
        `<div class="number1">${question.num1}</div>
        <div class="operation">${question.operation}</div>
        <div class="number2">${question.num2}</div>
        <div class="equal">=</div>
        <input type="number" class="answer">
        <div class="result">
            <img class="resultImg" src="./img/wrong.png" alt="">
        </div>`
        //get class=content as obj, then add the tag items to there.
        let container=document.createElement('div');
        container.className='container';
        container.innerHTML=htmlText;
        section.appendChild(container)        
    } )
}
    
function checkAnswer() {
    // let questions=JSON.parse(localStorage.getItem('questions'))
    let answers=document.querySelectorAll('.answer');
    let results=document.querySelectorAll('.resultImg');
    for (let index=0; index<questions.length; index++) {
        results[index].style.visibility='visible'
            if (answers[index].value==questions[index].correctAnswer) {
                results[index].src='./img/correct.png';
                if (questions[index].answerCheck==false) 
                {
                questions[index].answerCheck=true;
                // localStorage.setItem(questions[index].answerCheck, true)
                scores[name]+=1                
                document.getElementById('score').textContent=scores[name];
                let scoreJSON=JSON.stringify(scores)
                localStorage.setItem('scores', scoreJSON)
                }
            }}
    }

//eventListeners:
const buttonCreateQuestion=document.getElementById('generateQuestions');
buttonCreateQuestion.addEventListener('click', ()=> {
    document.querySelector('.content').innerHTML="";
    let qty=document.getElementById('qtySelect').value;
    createQuestions(qty)
    addHTML()
})







