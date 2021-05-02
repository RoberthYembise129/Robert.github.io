const txtElement = ['Today is a very special day, because in today beautiful woman named Given Wulandari Nussy Birthday. Thank God for looking after the woman I love from my womb to this day.',
'Thank You for giving him one more age so that he is now 21 years old,','the same care and blessing will be upon you until the Lord comes to second',
'Today I cannot give you flowers and presents for your,','but today i wish to counsel the word of the Lord to strengthen the faith of my dear and lead the baby closer to the Lord']; 




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
	

	setTimeout(ngetik,200);

})();