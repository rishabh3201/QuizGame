const quizQuestions=[
{
	question:"HTML full form !",
	a:"Hyper text markup language",
	b:"Hpps", 
	c:"None of the above",
	d:"All",
	rightAns:"ans1"
},
{
	question:"Which are higher level programming language!",
	a:"java",
	b:"python", 
	c:"all of the above",
	d:"none of the above",
	rightAns:"ans3"
},
{
	question:"Which web Developer is necessary!",
	a:"Nobe",
	b:"Begginer", 
	c:"intermiadte",
	d:"Experienced",
	rightAns:"ans4"
}
];
const question=document.querySelector(".question");
const option1= document.querySelector("#option1");
const option2=document.querySelector("#option2");
const option3=document.querySelector("#option3");
const option4=document.querySelector("#option4");
const answers=document.querySelector(".answer");

const submit=document.querySelector("#submit");
const showScore=document.querySelector("#showScore");
let questionCount=0;
let score=0;

const loadQuestion=()=>{
	let list=quizQuestions[questionCount];
	question.innerText=list.question;
	option1.innerText=list.a;
	option2.innerText=list.b;
	option3.innerText=list.c;
	option4.innerText=list.d;
}
loadQuestion();
const getCheckedAnswer=()=>{
	let ans;
	answers.forEach((i)=>{
		if(i.checked){
			ans=i.id;
		}
	});
	return ans;
};
const uncheckAnswers=()=>{
	answers.forEach((i)=>{i.checked=false;})
}
submit.addEventListener("click",()=>{
	const x=getCheckedAnswer();
	if(x==quizQuestions[questionCount].rightAns){
		score++;
	}
	questionCount++;
	uncheckAnswers();
	if(questionCount<quizQuestion.length){
		loadQuestion();
	}
	else{
		showScore.innerHTML

		
		showScore.classList.remove("score");
	}
})