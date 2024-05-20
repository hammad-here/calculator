var word = "";
var toBeAdded = [];
var toBeSubtracted = [];
var ans="";
//checking mathematical syntax error
function syntax(){
  let isSyntax = false;
  //if first letter has operators
  if(word[0]=="×"||word[0]=="÷"||word[0]=="+"||word[0]=="-"||word[0]=="!")
     {document.getElementById("display").innerHTML="SyntaxError";
     return true;}
  //if last letter has operator
     if(word[word.length-1]=="×"||word[word.length-1]=="÷"||word[word.length-1]=="+"||word[word.length-1]=="-")
     {document.getElementById("display").innerHTML="SyntaxError";
     return true;}
  //if operators are consecutively
for(let i = 0;i<=word.length;i++){
    if(word[i]=="×"||word[i]=="÷"||word[i]=="+"||word[i]=="-"||word[i]=="!")
    {  if(word[i+1]=="×"||word[i+1]=="÷"||word[i+1]=="+"||word[i+1]=="-"||word[i+1]=="!")
        { document.getElementById("display").innerHTML="SyntaxError";
        return true; }
    }
}
}
//saperating terms
function split(){
  let x = 0; 
  let tf=true;
  let sign="+";
  for(let a=0; a<=word.length-1;a++) { 
  //splitting first term(to be added)
    if((word.charAt(a)=="+"||word.charAt(a)=="-")&&tf){
       toBeAdded.push(word.slice(x,a));
       x=a+1;
       tf=false;   
       word.charAt(a)=="-"?sign="-":sign="+";
    }
  
  //splitting each term
    else if(word.charAt(a)=="+"||word.charAt(a)=="-"||a== word.length-1){
      if(sign=="+"){
       a==word.length-1? toBeAdded.push(word.slice(x,a+1)):toBeAdded.push(word.slice(x,a));
      }
       else {
        a==word.length-1? toBeSubtracted.push(word.slice(x,a+1)) : toBeSubtracted.push(word.slice(x,a));
      }
      x=a+1;
      sign=word.charAt(a);
    }
  }
}
//saperating numerators and denominator from each element of tobeadded and tobesubtracted and creating array
function splitMD(num){
  let Arr=["F"];
  let x = 0; 
  let tf=true;
  let sign="×";
  let fac=1;
  for(let a=0; a<=num.length-1;a++) { 
  //checking for factorial
  if(num.charAt(a)=="!"){
    for(let w=1;w<=Number(num.slice(x,a));w++){fac*=w;}
     tf=false;
      if(sign=="×"){
      Arr.unshift(fac);
      }
     else {
      Arr.push(fac);
       }
       x=a+1;
   }
  else{
  //splitting first number (to be multiplied)
  
  if((num.charAt(a)=="×"||num.charAt(a)=="÷")&&tf){
       Arr.unshift(num.slice(x,a)); 
       x=a+1;
       tf=false;   
       num.charAt(a)=="÷"?sign="÷":sign="×";
    }
  //splitting every number(numerator and denominator)
    else if(num.charAt(a)=="×"||num.charAt(a)=="÷"||a== num.length-1){
      if(sign=="×"){
       a==num.length-1? Arr.unshift(num.slice(x,a+1)):Arr.unshift(num.slice(x,a));
      }
       else {
        a==num.length-1? Arr.push(num.slice(x,a+1)): Arr.push(num.slice(x,a));
      }
      x=a+1;
      sign=num.charAt(a);
     } 
    }
   }
  return Arr;
  }
//solving each number
function simplifying(arr){
 let tf=true;
 let product=1;
 for(let i=0;i<=arr.length-1;i++){
  if(arr[i]=="F"){tf=false;}
  else if(tf){product*=Number(arr[i]);} else if(!tf){product/=Number(arr[i]);}
 }
 return product;
}
function solve(){
toBeAdded = [];
toBeSubtracted = [];
ans=0;
  if(!(syntax())){
    split();
  for (let i=0;i<=toBeAdded.length-1;i++){
   toBeAdded[i] = simplifying(splitMD(toBeAdded[i]));
  }
  for (let i=0;i<=toBeSubtracted.length-1;i++){
    toBeSubtracted[i] = simplifying(splitMD(toBeSubtracted[i]));
   }
  for(let k=0;k<=toBeAdded.length-1;k++){
    ans+=Number(toBeAdded[k]);
  }
  for(let w=0;w<=toBeSubtracted.length-1;w++){
    ans-=Number(toBeSubtracted[w]);
 }
 console.log(toBeAdded);
 console.log(toBeSubtracted);
document.getElementById("display").innerHTML=ans;
document.getElementById("ques").innerHTML=word;
}
}