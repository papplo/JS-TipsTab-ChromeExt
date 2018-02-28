// List of JavaScript tips
var tipsList = [
	"Don't forget the <span class='code'>var</span> keyword when assigning a variable's value for the first time.",

	"<span class='code'>undefined</span>, <span class='code'>null</span>, <span class='code'>0</span>, <span class='code'>false</span>, <span class='code'>NaN</span>, and <span class='code'>''</span> (empty string) are all falsy.",

	"Declare a function with<br/> <span class='code-block'>function <em>myFunctionName</em>() { <br>&nbsp;&nbsp;...<br> }</span>",

	"<span class='code'>if</span>/<span class='code'>else</span> statements look like <br/> <span class='code-block'>if (<em>condition</em>) { <br/>&nbsp;&nbsp;...<br/>} else { <br/>&nbsp;&nbsp;...<br/>}",

	"You can return the result of a function into a variable with <span class='code'>return</span>:<br><span class='code-block'>function timesFive(inputNumber) {<br> &nbsp;&nbsp;return inputNumber * 5; <br>}<br>console.log(timesFive(6));<br>// Output: 30</span> ",

	"The <span class='code'>&&</span> operator means both things must be true: <br/> <span class='code-block'> true && true = true<br>true && false = false<br>false && false = false</span>",

	"The <span class='code'>||</span> operator means either can be true: <br/> <span class='code-block'> true || true = true<br>true || false = true<br>false || false = false</span>",

	"A <span class='code'>for</span> has three condtions: a start condition, a stop condition, and an iterator: <br> <span class='code-block'>for (var i = 0; i < myArray.length; i++) { <br>&nbsp;&nbsp;...<br>}</span>",

	"To interpolate a variable into a string, use the <span class='code'>+</span> operator, like this: <br> <span class='code-block'>var myName = 'Jon';<br/> 'Hello, my name is ' + myName;</span>",

	"To generate a random number, use JavaScript's built in function <span class='code'>Math.random()</span>.",

	"Arrays hold lists of data. You can access any of the list items by using bracket notation, like this: <br> <span class='code-block'>var myArray = ['pears', 'asparagus', 'bananas'];<br>myArray[1]; // asparagus</span>"
];

var tipsListCodeByte = [
	"Take an incoming string and reorder it alphabetically using the Array.prototype.method <span class='code'>.sort()</span><br><span class='code-block'>function AlphabetSoup(str) {<span class='comm'>Split string into an array, sort it and join it back to a string.</span>var stringSplit = str.split('');<br/>  var sortedArray = stringSplit.sort(); <br/> var joinedString = sortedArray.join('');<br />   return joinedString; <br /><span class='comm'> Shorthand would be: .split('').sort().join('');</span></span><p><span class='moz'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort'>Global_Objects/Array/sort</a>"

]
// Tip Limit counter
var tipLimit = tipsListCodeByte.length;
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
	var tip = tipsListCodeByte[generateNumber()];

	var myJsTipElement = document.querySelector('.js-tip');
	myJsTipElement.innerHTML = tip;

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
