const questions = [
    {
        question: "বাংলাদেশের জাতীয় ফুল কোনটি?",
        answer: [
        { text:"রজনীগন্ধা",correct:false},
        { text:"গোলাপ",correct:false},
        { text:"শাপলা",correct:true},
        { text:"কাঞ্চন",correct:false}

        ]
        
    },
    {
        question: "বঙ্গবন্ধু শেখ মুজিবুর রহমান কবে স্বাধীনতা ঘোষণা করেন?",
        answer: [
        { text:" ১৯৭০ সালের ৭ মার্চ",correct:false},
        { text:"১৯৭১ সালের ২৬ মার্চ",correct:true},
        { text:"১৯৭১ সালের ১৬ ডিসেম্বর",correct:false},
        { text:"১৯৭২ সালের ১০ জানুয়ারি",correct:false}

        ]
        
    },
    {
        question: "বাংলাদেশের সবচেয়ে বড় জেলা কোনটি?",
        answer: [
        { text:"কক্সবাজার",correct:false},
        { text:"রাঙ্গামাটি",correct:true},
        { text:"চট্টগ্রাম",correct:false},
        { text:"খুলনা",correct:false}

        ]
        
    },
    {
        question: "নদীমাতৃক বাংলাদেশের প্রধান নদীর নাম কী?",
        answer: [
        { text:"যমুনা",correct:false},
        { text:"মেঘনা",correct:false},
        { text:"পদ্মা",correct:true},
        { text:"কর্ণফুলী",correct:false}

        ]
        
    },
    {
        question: "বাংলাদেশের স্বাধীনতার স্থপতি কে?",
        answer: [
        { text:"শের-ই-বাংলা এ.কে. ফজলুল হক",correct:false},
        { text:"মাওলানা আবুল কালাম আজাদ",correct:false},
        { text:"হোসেন শহীদ সোহরাওয়ার্দী",correct:false},
        { text:" বঙ্গবন্ধু শেখ মুজিবুর রহমান",correct:true}

        ]
        
    }
];


const questionElement =document.getElementById("question");
const answerButton =document.getElementById("options");
const nextButton =document.getElementById("next-btn")

let currentQuestionIndex =0;
let score =0;


function startQuiz(){
    currentQuestionIndex =0;
    score =0;
    nextButton.innerHTML ="Next";
    showQuestion();
}


function showQuestion(){
    resetState();
    let currentQuestion =questions[currentQuestionIndex];
    let questionNo =currentQuestionIndex + 1;
    questionElement.innerHTML =questionNo + "." + currentQuestion.question;
    currentQuestion.answer.forEach(answer=>{
        const button =document.createElement("button");
        button.innerHTML =answer.text;
        button.classList.add("option");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct =answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}


function resetState(){
    nextButton.style.display ="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}


function selectAnswer(e){
 const selectedBtn =e.target;
 const isCorrect =selectedBtn.dataset.correct ==="true";
 if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
 }else{
    selectedBtn.classList.add("incorrect");
 }


 Array.from(answerButton.children).forEach(button=>{
    if(button.dataset.correct ==="true"){
        button.classList.add("correct")
    }
    button.disabled =true;
 });


 nextButton.style.display ="block"
 
}


function showScore(){
    resetState();
    questionElement.innerHTML =`You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML ="Play Again";
    nextButton.style.display ="block"
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex <questions.length){
        handleNextButton()
    }else{
        startQuiz()
    }
})


startQuiz()