// List of JavaScript tips
"use strict";
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
			},
			{
				name: "push and pop",
				code: "<span class='comm'>Push elements to the end of the array and delete the last element from an array.</span> <br> var arr = [1, 2, 3, 4]; <br />arr.push(5) // [1, 2, 3, 4, 5]<br /> arr.push(6, 7, 8); // [1, 2, 3, 4, 5, 6, 7, 8]<br /> arr.pop(); // [1, 2, 3, 4, 5, 6, 7]"
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
				code: "function AlphabetSoup(str) {<span class='comm'>Split string into an array, sort it and join it back to a string.</span>var stringSplit = str.split('');<br/>  var sortedArray = stringSplit.sort(); <br/> var joinedString = sortedArray.join('');<br />   return joinedString; <br /><span class='comm'> Shorthand would be: .split('').sort().join('');</span></span><p><span class='moz'><a href=''></a></p>"
			},
		],
		reference: "Global_Objects/Array/sort",
		link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"
	}

	/* copy this to a new array {object}
	{
		tipId: "",
		title: "",
		subHead: ["", ""],
		subElement: "",
		codeBlock: "",
		reference: "",
		link: ""
	},
	*/
];

// Tip Limit counter
var tipLimit = tipsListAsObjects.length; // how many items in our object do we have?
var someArray = Array.apply(null, {length: tipLimit}).map(Function.call, Number);
console.log("Tips: "+ tipLimit +" "+ someArray);

//es6 version of a shuffle
function remainingNumber() {
	someArray.sort( () => Math.random() * 2 - 1);
	//someArray.shift();
	console.log("Starting with tip " + someArray[0] +", random remaining order is: "+ someArray);
	return someArray[0];
}

// Generate a tip:
// 1. Get random number from generateNumber()
// 2. Use the random number to get the tip from the array
// 3. Show the tip
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
	var codeBlockName = document.querySelector('.tip-container.code-block-name');
	var codeBlock = document.querySelector('.code-block');
	// clear our codeBlock
	//

	var i, item, key;
	for (i = 0; i < tip.codeBlock.length; i++) {
		//codeBlock.innerHTML = "";

	    for (item in tip.codeBlock[i] ) {
	        codeBlock.innerHTML = tip.codeBlock[i][item] + "<br>";
	    }
	}


	var tipLimitCount = document.querySelector('.tip-limit-count');
	tipLimitCount.innerHTML = tipLimit;
	someArray.shift();

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

onTipButtonClick();
// Get the first tip
generateTip();
