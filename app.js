import { title,MakeColor,countrys } from "./helpers.js";
var root=document.getElementById("root");
var form=document.createElement("form");
form.setAttribute("method","GET")
root.appendChild(form);
form.appendChild(title);
const setAttributes=(el,attrs)=>{
    for (const [key,val] of Object.entries(attrs)){
    el.setAttribute(key,val);
    }
};
const attrs={
    type:"number",
    placeholder:"give value to",

};
var input1=document.createElement("input");
setAttributes(input1,attrs);
input1.setAttribute("id","n1");
var input2=document.createElement("input");
var input3=document.createElement("input");
setAttributes(input2,attrs);
setAttributes(input3,attrs);
input2.setAttribute("id","n2");
input3.setAttribute("id","n3");
form.appendChild(input1);
form.appendChild(input2);
form.appendChild(input3);

var btn=document.createElement("button");
btn.setAttribute("type","button");
btn.textContent="Change Color";
form.appendChild(btn);
btn.setAttribute("id","btn");
btn.addEventListener("click",()=>{
    var num1=document.getElementById("n1").value;
    var num2=document.getElementById("n2").value;
    var num3=document.getElementById("n3").value;
   var title= document.getElementById("title");
   title.style.color=MakeColor(num1,num2,num3);
  var button=  document.getElementById("btn")
  button.style.backgroundColor=MakeColor(num1,num2,num3);
});
var selcet=document.createElement("select");

selcet.setAttribute("id","myCountries");
for(var i=0;i<countrys.length;i++)
{
    var option=document.createElement("option");
    option.value=countrys[i];
    option.text=countrys[i];
    selcet.appendChild(option);
}



form.appendChild(selcet);
var mySelect=document.getElementById("myCountries");
mySelect.onchange=function(){
    console.log("change");
title.textContent=`I love ${mySelect.value}`;
};


