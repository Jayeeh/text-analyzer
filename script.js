function textAnalyzer(text) {
    // Check if the input is not a string
    if (typeof text !== 'string') {
      // Print an error message if the input is not a string
      console.log("Cannot analyze text. Provided input is not valid. Please pass a string.");
      return; // Stop the function
    }
    
    // Check if the text is empty or just spaces
    if (text.trim().length < 1) {
      // Print an error message if the text is empty
      console.log("Cannot analyze text. Your text must include at least one character.");
      return; // Stop the function
    }
    
    let shortestWord = ''; // Variable to store the shortest word
    let longestWord = ''; // Variable to store the longest word
    const wordsArray = convertTextToWords(text); // Convert the text to an array of words
    
    // Find the longest word in the array
    longestWord = findLongestWord(wordsArray);
    console.log("Longest Word: " + longestWord); // Print the longest word
    
    // Find the shortest word in the array
    shortestWord = findShortestWord(wordsArray, longestWord);
    console.log("Shortest Word: " + shortestWord); // Print the shortest word
    
    let vowelWords = []; // Array to store words that start with a vowel
    vowelWords = findVowelWords(wordsArray); // Find words that start with a vowel
    console.log("Vowel Words: " + vowelWords); // Print the vowel words
    
    console.log("Words List: " + wordsArray); // Print the list of all words
    console.log("Total Words Count: " + wordsArray.length); // Print the total number of words
  }
  
  function convertTextToWords(text) {
    const lowerCaseText = text.toLowerCase(); // Convert the text to lowercase
    const words = lowerCaseText.split(' '); // Split the text into words
    return words; // Return the array of words
  }
  
  function findLongestWord(words) {
    let longestWord = ''; // Variable to store the longest word
    for (let i = 0; i < words.length; i++) { // Loop through each word
      let currentWord = words[i]; // Get the current word
      if (currentWord.length >= longestWord.length) { // Check if the current word is longer
        longestWord = currentWord; // Update the longest word
      }
    }
    return longestWord; // Return the longest word
  }
  
  function findShortestWord(words, longestWord) {
    let shortestWord = longestWord; // Start with the longest word as the shortest
    for (let i = 0; i < words.length; i++) { // Loop through each word
      let currentWord = words[i]; // Get the current word
      if (currentWord.length < shortestWord.length) { // Check if the current word is shorter
        shortestWord = currentWord; // Update the shortest word
      }
    }
    return shortestWord; // Return the shortest word
  }
  
  function findVowelWords(words) {
    const vowels = ['a', 'i', 'e', 'o', 'u']; // List of vowels
    let vowelWords = []; // Array to store words that start with a vowel
    for (let i = 0; i < words.length; i++) { // Loop through each word
      let word = words[i]; // Get the current word
      for (let j = 0; j < vowels.length; j++) { // Loop through each vowel
        let vowel = vowels[j]; // Get the current vowel
        if (word.startsWith(vowel)) { // Check if the word starts with the vowel
          vowelWords.push(word); // Add the word to the vowelWords array
        }
      }
    }
    return vowelWords; // Return the array of vowel words
  }
  
  textAnalyzer("You are an awesome developer"); // Call the function with a sample text
  