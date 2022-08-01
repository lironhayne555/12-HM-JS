export let title;
title = document.createElement("h1");
title.setAttribute("id","title");
title.textContent= "I love";
export const MakeColor= (num1,num2,num3) => {
    let r = Math.floor(num1);
    let g = Math.floor(num2);
    let b = Math.floor(num3);
  
    return `rgb(${r},${g},${b})`;
  };
  export let countrys=["Ostria","Israel","Island","Bulgaria","Belgia","Brazil","Denmark","Grmany","USA"];
