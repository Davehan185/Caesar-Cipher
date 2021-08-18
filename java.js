//
// Variables
//

// Our base cipher
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ' '];
var cipherLen = letters.length;
var cipherMaxIndex = cipherLen - 1;

// Get encryption fields
var fields = document.querySelectorAll('.encrypt');
var cipher = document.querySelector('#cipher');


//
// Methods
//



var shiftMessage = function (char, shiftBy) {

	// Get the index of the character in the cipher
	var index = letters.indexOf(char.toLowerCase());

	// If it's not a cipher character, return it as-is
	if (index < 0) return char;

	// Get the shifted index
	var shiftedIndex = shiftBy + index;

	// If shifted index is greater than cipher length, start at the beginning
	if (shiftedIndex > cipherMaxIndex) {
  	shiftedIndex = shiftedIndex - cipherLen;
	}

	// If shifted index is lower than cipher length, start at the end
	if (shiftedIndex < 0) {
	shiftedIndex = shiftedIndex + cipherLen;
	}

	// Return the shifted letter
	return letters[shiftedIndex];

};

var runEncryption = function (message, shiftBy) {
	return message.split('').map(function (char) {
	return shiftMessage(char, shiftBy);
}).join('');
};




var encrypt = function () {

// Get the number of characters to shift by

var shiftBy = parseInt(fields[1].value, 10);

// Encrypt the message
			
var encrypted = fields[0].value;
encrypted = runEncryption(encrypted, shiftBy)


// Show the encrypted message

cipher.value = encrypted;

};

var inputHandler = function (event) {

// Only run on .encrypt fields
if (!event.target.matches('.encrypt')) return;

// Otherwise, encrypt the message
encrypt();

};

//
// Event Listeners
//

document.addEventListener('input', inputHandler);