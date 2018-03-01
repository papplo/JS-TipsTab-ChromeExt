// List of JavaScript tips
var tipsListAsObjects = [
	{
		tipId: 1,
		title: "Codebyte Quizzie",
		subHead: [
			"What does <span class='code'>use strict</span> do?",
			"use strict"
		],
		codeBlock: [
			{
			name: "use strict",
			code: "function doSomething(val) {<span class='comm'> Throws error</span>\"use strict\";<br/> x = val + 10; <br />}<span class='comm'>The 'use strict' literal is entered at the top of a JavaScript program or function - it helps you write safer JavaScript code by throwing an error if a _global variable_ is created by mistake.</span>"
		}],
		reference: "common-javascript-interview-questions",
		link: "https://coderbyte.com/algorithm/10-common-javascript-interview-questions"
	},
	{
		tipId: 2,
		title: "Common array methods in Js",
		subHead: [
			"Below are some array functions that are commonly required in order to complete Coderbyte challenges.",
			"array methods"
		],
		codeBlock: [
			{
				name: "indexOf",
				code: "<span class='comm'>Return the index of a specific element in the array. If the element does not exist in the array, the function returns -1.</span> <br> var arr = [1, 2, 100, 12, -1]; <br />arr.indexOf(100);// 2 <br /> arr.indexOf(5); // -1"
			}
		],
		reference: "Coderbyte Tutorial",
		link: "https://coderbyte.com/tutorial/common-array-methods-in-javascript"
	},
	{
		tipId: 3,
		title: "AlphabetSoup",
		subHead: [
			"Take an incoming string and reorder it alphabetically using the Array.prototype.method <span class='code'>.sort()</span>",
			".sort()"],
		codeBlock: [
			{
				name: "soup",
				code: "function AlphabetSoup(str) {<span class='comm'>Split string into an array, sort it and join it back to a string.</span>var stringSplit = str.split('');<br/>  var sortedArray = stringSplit.sort(); <br/> var joinedString = sortedArray.join('');<br />   return joinedString; <br /><span class='comm'> Shorthand would be: .split('').sort().join('');</span>"
			},
		],
		reference: "Global_Objects/Array/sort",
		link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"
	},

	{
		tipId: "4",
		title: "Type conversion",
		subHead: [
			"<span class='code'>==</span> performs implicit type conversion to check if values are equal to each other. So it will convert the values to true or false boolean values and then compare them.",
			"== and ==="],
		codeBlock: [
			{
				name: "implicit type conversion",
				code: "\"1\" == 1 // true <br /> true == 1 // true <br /> [] == false // true <br /> \"\" == false // true <br /> undefined == null // true <br /> <br /> \"1\" === 1 // false <br />true === 1 // false <br/>[] === false // false<br /> \"\" === false // false <br /> undefined === null // false"
			},
		],
		reference: "",
		link: ""
	},
	{
		tipId: "5",
		title: "Add own methods to the Array object",
		subHead: [
			"JavaScript is a <span class='code'>prototype-based language</span>. Each object is linked to another object, its prototype, and it inherits its methods. You can follow the prototype chain for each object up until you reach the null object which has no prototype.",
			"Object prototype"
		],
		codeBlock: [
			{
				name: "Using the prototype Property",
				code: "Array.prototype.average = function() {  <span class='comm'>calculate sum</span>  var sum = this.reduce(function(prev, cur) { return prev + cur; });<br />  <span class='comm'>return sum divided by number of elements</span>  return sum / this.length;}<br />var arr = [1, 2, 3, 4, 5]; <br />var avg = arr.average(); <br />console.log(avg); // => 3"
			}
		],
		reference: "",
		link: ""
	},
	/* copy this to a new array {object}
	{
		tipId: "",
		title: "",
		subHead: ["", ""],
		codeBlock: [
			{
				name: "",
				code: ""
			}
		],
		reference: "",
		link: ""
	},
	*/
];

// Tip Limit counter
var tipLimit = tipsListAsObjects.length; // how many items in our object do we have?
var currOrder = Array.apply(null, {length: tipLimit}).map(Function.call, Number);
console.log("Tips: "+ tipLimit +" "+ currOrder);

//es6 version of a shuffle
function remainingNumber() {
	currOrder.sort( () => Math.random() * 2 - 1);
	console.log("Starting with tip " + currOrder[0] +", random remaining order is: "+ currOrder);
	return currOrder[0];
}

// Generate a tip:
function generateTip() {
	//remainingNumber();

	// get a tip {obj} from array
	var tip = tipsListAsObjects[remainingNumber()];
	// get object.title and object.tipId
	var tipTitle = document.querySelector('.tip-number');
	tipTitle.innerHTML = "#" + tip.tipId +" "+ tip.title;

	var tipSubHead = document.querySelector('.js-tip');
	tipSubHead.innerHTML = tip.subHead[0] + "<span class='code right'><a href='https://lmgtfy.com/?q="+ tip.subHead[1].replace(/\s/g, "+") +"'>" + tip.subHead[1] + "</a></span>";

	var container = document.querySelector('.tip-container');
	var codeBlock = document.querySelector('.tip-container .code-block');
	var codeBlockName = document.querySelector('.code-block .code-block-name');


	var i, item, key;
	for (i = 0; i < tip.codeBlock.length; i++) {
	  for (key in tip.codeBlock[i] ) {
			codeBlock.innerHTML = "<h4>" + tip.codeBlock[i].name + "</h4>" + tip.codeBlock[i].code + "<br>";
		}
	}

	var tipLimitCount = document.querySelector('.tip-limit-count');
	tipLimitCount.innerHTML = tipLimit -1;
	currOrder.shift();
}

// addEventListener for button click
function onTipButtonClick() {
	var tipButton = document.querySelector('.tip-button');
	var clickyClippy = tipButton.addEventListener('click', function(){
		if(tipLimit > 1) {
			tipLimit--;
			generateTip();
			console.log(tipLimit + "left");
		} else if (tipLimit === 1){
			document.querySelector('.tip-limit-count').innerHTML = 0;
			tipButton.classList.add('disabled');
			tipButton.insertAdjacentHTML('afterend', '<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">Find more tips at Mozilla Developer Docs</a></p>');
		}
	});
};

// fire off addEventListener
onTipButtonClick();

// Get the first tip
generateTip();
