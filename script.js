var myFirstString = 'Ez egy string.';
var mySecondString = "Ez is egy string.";
var myThirdString = `Ez pedig egy többsoros string.`;

var myFirstNumber = 0;
var mySecondNumber = 15;
var myThirdNumber = 6518000;

var myFirstBoolean = true;
var mySecondBoolean = false;

var myFirstArray = ["1984", "Száz év magány", "Mester és Margarita", "39 kulcs", "Homo sapiens"];

var mySecondArray = [1984, "Száz év magány", "Mester és Margarita", "39 kulcs", "Homo sapiens"];

var myFirstObject = {
    title: "Mester és Margarita",
    year: 1966,
    author: "Mikhail Bulgakov",
    translations: ["hu", "en", "de", "fr"]
};

console.log(myFirstArray[0]);
console.log(myFirstObject.title);
console.log(myFirstObject["title"]);

var a = 1;
var b = 2;
var c = a + b;
console.log(c);

function add(firstNumber, secondNumber) {
    if (firstNumber > 0) {
        console.log("Az első szám nagyobb, mint 0.")
    }
    else {
        console.log("Az első szám kisebb vagy egyenlő 0.")
    }
    console.log(firstNumber + secondNumber);
}

add(1, 2);

add(17948, 679);

function substract(firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
        console.log(firstNumber - secondNumber)
    }
    else if (secondNumber > firstNumber) {
        console.log(secondNumber - firstNumber)
    }
    else {
        console.log("The two numbers are the same.")
    }
}

substract(100, 25);
substract(50, 50);
