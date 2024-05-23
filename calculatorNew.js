var word="";
        var word2=""
          Array.from(document.getElementsByClassName("btn")).forEach(element => {
            element.addEventListener("click",key=>{
              document.getElementById("ques").innerText=""
              if(element.innerHTML=="AC"){
                word=""
                word2=""
                document.getElementById("display").innerText="";
              } else if (element.innerHTML=="DEC"){
                word=Array.from(word);
                word2=Array.from(word2);
                word.pop();
                word2.pop();
                word2=word2.toString();
                word=word.toString();
                word2=word2.replace(/,/g, "");
                word=word.replace(/,/g, "");
                console.log(word,word2)
                document.getElementById("display").innerText=word;
              }else if(element.innerHTML=="="){
                console.log(word2)
                document.getElementById("display").innerText=eval(word2)=='undefined'?"syntax error": eval(word2);
              }else if(element.innerHTML=="+/-"){
                word2=Array.from(word2);
                word=Array.from(word);
                word2[0]=="-"?word2.shift():word2.unshift("-");
                word[0]=="-"?word.shift():word.unshift("-");
                word2=word2.toString();
                word=word.toString();
                word2=word2.replace(/,/g, "");
                word=word.replace(/,/g, "");
                 console.log(word,word2)
                document.getElementById("display").innerText=word;
              }else{
                word+=element.innerHTML;
               if(element.innerHTML=="÷"){
                 word2+="/"
               }else if(element.innerHTML=="×"){
                word2+="*"
               }else{
                word2+=element.innerHTML;
               }
               document.getElementById("display").innerText=word;
            }
          })
        });
