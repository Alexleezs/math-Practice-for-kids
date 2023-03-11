// class Question {
//     constructor (num1, num2, operation) {
//         this.num1=num1;
//         this.num2=num2;
//         this.operation=operation;
//         this.correctAnswer=eval(num1+operation+num2)
//     }
// }

// function createQuestions(qty) {
//     const operations=['+','-','*']
//     const questions=[];
//     for (index=0; index<qty; index++) {
//        let a=Math.floor(Math.random()*200)
//         let b=Math.floor(Math.random()*200)
//         let num1=0, num2=0;
//         if (a>b) {
//             num1=a  ;
//             num2=b  ;
//         } else {
//             num1=b;
//             num2=a;
//         }
//         let operation=operations[Math.floor(Math.random()*operations.length)]
//         questions.push(new Question(num1, num2,operation))
//         // questions.push(question)
//     }
//     return questions
// }





//check the answer.


// const scoreJSON=localStorage.getItem('scores');
// const scores=JSON.parse(scoreJSON)
// if (scores==null) {
//     scores={
//         Phoebe:0,
//         Charlotte: 0
//     }
// scoreJSON=JSON.stringify(scores)
// localStorage.setItem('scores',scoreJSON)
// }   

// const updateScores=document.querySelector('.name');
// updateScores.addEventListener('change', ()=> {
//     document.getElementById('score').textContent=JSON.parse(scores)[name];
// })







