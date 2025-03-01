function countVowels(str) {
  let vowels = 0;
  let stringArray = str.toLowerCase().split(''); // Convert to lowercase and split into an array
  
  for (let i = 0; i < stringArray.length; i++) {
    if (
      stringArray[i] === 'a' || 
      stringArray[i] === 'e' || 
      stringArray[i] === 'i' || 
      stringArray[i] === 'o' || 
      stringArray[i] === 'u'
    ) {
      vowels += 1;
    }
  }
  
  return vowels;
}

// Testing the function
console.log(countVowels("pratik")); 
