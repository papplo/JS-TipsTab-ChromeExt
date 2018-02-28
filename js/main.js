// List of JavaScript tips

var tipsListCodeByte = [
	"Take an incoming string and reorder it alphabetically using the Array.prototype.method <span class='code'>.sort()</span><br><span class='code-block'>function AlphabetSoup(str) {<span class='comm'>Split string into an array, sort it and join it back to a string.</span>var stringSplit = str.split('');<br/>  var sortedArray = stringSplit.sort(); <br/> var joinedString = sortedArray.join('');<br />   return joinedString; <br /><span class='comm'> Shorthand would be: .split('').sort().join('');</span></span><p><span class='moz'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort'>Global_Objects/Array/sort</a></p>",
	"What does <span class='code'>use strict</span> do? <span class='code-block'>function doSomething(val) {<span class='comm'> Throws error</span>\"use strict\";<br/> x = val + 10; <br />}<span class='comm'>The 'use strict' literal is entered at the top of a JavaScript program or function - it helps you write safer JavaScript code by throwing an error if a _global variable_ is created by mistake.</span></span><p><span class='quiz'><a href='https://coderbyte.com/algorithm/10-common-javascript-interview-questions'>common-javascript-interview-questions</a></span></p>"
]

var tipsListAsObjects = [
	{
		tipId: 1,
		title: "Codebyte Quizzie",
		subHead: ["What does <span class='code'>use strict</span> do?", "use strict"],
		subElement: "use strict",
		codeBlock: "function doSomething(val) {<span class='comm'> Throws error</span>\"use strict\";<br/> x = val + 10; <br />}<span class='comm'>The 'use strict' literal is entered at the top of a JavaScript program or function - it helps you write safer JavaScript code by throwing an error if a _global variable_ is created by mistake.</span>",
		reference: "common-javascript-interview-questions",
		link: "https://coderbyte.com/algorithm/10-common-javascript-interview-questions"
	},

	{
		//second object
	}
];

// Tip Limit counter
var tipLimit = tipsListAsObjects.length;
console.log(tipLimit);

// Generate a number
function generateNumber() {
	return Math.floor(Math.random() * Math.floor(tipLimit));
}
// Generate a tip:
// 1. Get random number from generateNumber()
// 2. Use the random number to get the tip from the array
// 3. Show the tip
function generateTip() {
	// get a tip {obj} from array
	var tip = tipsListAsObjects[generateNumber()];

	// get object.title and object.tipId
	var tipTitle = document.querySelector('.tip-number');
	tipTitle.innerHTML = tip.title + " # " + tip.tipId;

	var tipSubHead = document.querySelector('.js-tip');
	tipSubHead.innerHTML = tip.subHead[0] + "<span class='code right'><a href='https://lmgtfy.com/?q="+ tip.subHead[1].replace(/\s/g, "+") +"'>" + tip.subHead[1] + "</a></span>";

	var tipLimitCount = document.querySelector('.tip-limit-count');
	tipLimitCount.innerHTML = tipLimit;
}

// Tip button click
// 1. Select the tip button
// 2. Add a click event listener
// 3. When the button is clicked:
// 3a. Subtract 1 from the tipLimit
// 3b. If the tipLimit is still above or equal to 0, generate a new tip
// 3c. If not, change the button text and look
function onTipButtonClick() {
	var tipButton = document.querySelector('.tip-button');
	var clickyClippy = tipButton.addEventListener('click', function(){
		if(tipLimit > 0) {
			tipLimit--;
			generateTip();
			console.log(tipLimit + "left");
		} else if (tipLimit === 0){
			tipButton.classList.add('disabled');
			tipButton.insertAdjacentHTML('afterend', '<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">Find more tips at Mozilla Developer Docs</a></p>');
		}
	});
};

onTipButtonClick();
// Get the first tip
generateTip();
