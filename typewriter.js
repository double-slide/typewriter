

const typeWriterFunc = function(inputSentence) {
  
  // add newline to end
  let stringToType = inputSentence += "\n";
  
  // counter for use with timing each print
  let counter = 0;
  
  for (const char of stringToType) {
    
    // to make more human-like, add additional delay when typing spaces
    if (char === " ") {
      if (counter % 3 === 0) {
        counter += 5;
      } else {
        counter += 1;
      }

    }

    // increase counter whether char or space
    counter++;

    // set timer and print
    setTimeout(() => {
      process.stdout.write(char);
    }, 80 * counter);
  }
};

// sentence to type out
const sentence = "hey there it's Iaan typing this out";

//call function
typeWriterFunc(sentence);