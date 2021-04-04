const txtElement = ['Haya sayang, sayang lagi bikin apa ya? sayang sudah makan dan minum kah sayang sayang gimna kabar dimana ini sayan. saya mau supaya sayang juga tau saya punya kabar dimalam ini sayang gimana dang kabar dimalam ini?'];
let count =0;
let txtIndex =0;
let currentTxt ='';
let words = '';

(function ngetik (){
	if ( count == txtElement.length){
		count=0;
	}
	currentTxt = txtElement[count];

	words = currentTxt.slice(0, ++txtIndex)
	document.querySelector('.efek-ngetik').textContent = words;

	if (words.length == currentTxt.length) {
		count ++;
		txtIndex = 0;
	}
	

	setTimeout(ngetik,129);

})();