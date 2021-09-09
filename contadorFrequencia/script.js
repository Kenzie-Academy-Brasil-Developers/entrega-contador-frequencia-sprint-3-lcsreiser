const button = document.getElementById("countButton");


button.addEventListener("click", function() {  

    let typedText = document.getElementById("textInput").value;
    typedText = typedText.toLowerCase(); 

    // Isso se livra de todos os caracteres exceto letras comuns, espaços e apóstrofos. 
    typedText = typedText.replace(/[^a-z'\s]+/g, ""); 


    // CONTADOR DE LETRAS

    const letterCounts = {};

    for (let i = 0; i < typedText.length; i++) {



        let currentLetter = typedText[i];
        
        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1; 
        } else { 
            letterCounts[currentLetter]++; 
        }

    }

    for (let letter in letterCounts) { 
        const span = document.createElement("span"); 
        const textContent = `"${letter}": ${letterCounts[letter]}, `;
        span.innerText = textContent; 
        const letters = document.getElementById("lettersDiv");
        letters.appendChild(span); 
    }

// ----------------------------------------------------------------------------------------

    //CONTADOR DE PALAVRAS 
    const wordCounts = {};

    typedText = typedText.split(/\s/);

    for (let i = 0; i < typedText.length; i++) {

        

        let currentWord = typedText[i];
        
        if (wordCounts[currentWord] === undefined) {
            wordCounts[currentWord] = 1; 
        } else { 
            wordCounts[currentWord]++; 
        }

    }

    for (let word in wordCounts) { 
        const spanw = document.createElement("span"); 
        const textContent = `"${word}": ${wordCounts[word]}, `;
        spanw.innerText = textContent; 
        const words = document.getElementById("wordsDiv");
        words.appendChild(spanw); 
    }


});