function firstNonRepeatedChar(str) {
 // Write your code here
	for(int i=1;i<str.size()-1;i++){
		if(str[i-1] != str[i] && str[i] != str[i+1]) return str[i];
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
