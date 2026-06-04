const btnli=document.querySelectorAll("ul li");
btnli.forEach(node=>{


    node.addEventListener("click",function(){
        const value=node.innerText.trim();
        const result=document.querySelector(".result");
         const resultText=result.innerText.trim();
       // console.log(value);
       // result.innerText=value;
      // console.log(resultText);
       //console.log(value);
       if(resultText=="0"|| resultText=="infinity" || resultText=="undefined"){
        result.innerText="";
       }
       if(value=="="){
        const solution=eval(resultText);
        result.innerText=solution;
        return true;
       }
       if(value.toLowerCase()=="c"){
        result.innerText="";
        return true;
       }
       result.append(value);


    })
   
})