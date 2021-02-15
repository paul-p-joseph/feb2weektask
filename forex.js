
let button = document.getElementById("convertButton");
button.addEventListener('click',convert)

async function convert(){
let forex = await fetch("https://api.exchangeratesapi.io/latest ");
let res = await forex.json();
console.log(res);
let amt = document.getElementById('input').value;
console.log(amt);
let curr = document.getElementById('firCurr').value;
console.log(curr);

if(curr=='Australian Dollar'){
  let aud = amt;
  aud=parseFloat(aud);
  aud=aud.toFixed(2);
  let cad = amt*(res.rates.CAD/res.rates.AUD);
  cad=parseFloat(cad);
  cad=cad.toFixed(2);
  let inr = amt*(res.rates.INR/res.rates.AUD);
  inr=parseFloat(inr);
  inr=inr.toFixed(2);
  let eur = amt*(1/res.rates.AUD);
  eur=parseFloat(eur);
  eur=eur.toFixed(2);
  let usd = amt*(res.rates.USD/res.rates.AUD);
  usd=parseFloat(usd);
  usd=usd.toFixed(2);
 
  let resaud = document.getElementById("aud");
  resaud.innerHTML=`$${aud}`;
  let rescad = document.getElementById("cad");
  rescad.innerHTML=`$${cad}`;
  let resinr = document.getElementById("inr");
  resinr.innerHTML=`₹${inr}`;
  let reseur = document.getElementById("eur");
  reseur.innerHTML=`€${eur}`;
  let resusd = document.getElementById("usd");
  resusd.innerHTML=`$${usd}`;
  
}
else if(curr=='Canadian Dollar'){
  let aud = amt*(res.rates.AUD/res.rates.CAD);
  aud=parseFloat(aud);
  aud=aud.toFixed(2);
  let cad = amt;
  cad=parseFloat(cad);
  cad=cad.toFixed(2);
  let inr = amt*(res.rates.INR/res.rates.CAD);
  inr=parseFloat(inr);
  inr=inr.toFixed(2);
  let eur = amt*(1/res.rates.CAD);
  eur=parseFloat(eur);
  eur=eur.toFixed(2);
  let usd = amt*(res.rates.USD/res.rates.CAD);
  usd=parseFloat(usd);
  usd=usd.toFixed(2);

  let resaud = document.getElementById("aud");
  resaud.innerHTML=`$${aud}`;
  let rescad = document.getElementById("cad");
  rescad.innerHTML=`$${cad}`;
  let resinr = document.getElementById("inr");
  resinr.innerHTML=`₹${inr}`;
  let reseur = document.getElementById("eur");
  reseur.innerHTML=`€${eur}`;
  let resusd = document.getElementById("usd");
  resusd.innerHTML=`$${usd}`;

  
}
else if(curr=='Indian Rupee'){
  let aud = amt*(res.rates.AUD/res.rates.INR);
  aud=parseFloat(aud);
  aud=aud.toFixed(2);
  let cad = amt*(res.rates.CAD/res.rates.INR);
  cad=parseFloat(cad);
  cad=cad.toFixed(2);
  let inr = amt;
  inr=parseFloat(inr);
  inr=inr.toFixed(2);
  let eur = amt*(1/res.rates.INR);
  eur=parseFloat(eur);
  eur=eur.toFixed(2);
  let usd = amt*(res.rates.USD/res.rates.INR);
  usd=parseFloat(usd);
  usd=usd.toFixed(2);
  
  let resaud = document.getElementById("aud");
  resaud.innerHTML=`$${aud}`;
  let rescad = document.getElementById("cad");
  rescad.innerHTML=`$${cad}`;
  let resinr = document.getElementById("inr");
  resinr.innerHTML=`₹${inr}`;
  let reseur = document.getElementById("eur");
  reseur.innerHTML=`€${eur}`;
  let resusd = document.getElementById("usd");
  resusd.innerHTML=`$${usd}`;

  
}
else if(curr=='Euro'){
  let aud = amt*(res.rates.AUD);
  aud=parseFloat(aud);
  aud=aud.toFixed(2);
  let cad = amt*(res.rates.CAD);
  cad=parseFloat(cad);
  cad=cad.toFixed(2);
  let inr = amt*(res.rates.INR);
  inr=parseFloat(inr);
  inr=inr.toFixed(2);
  let eur = amt;
  eur=parseFloat(eur);
  eur=eur.toFixed(2);
  let usd = amt*(res.rates.USD);
  usd=parseFloat(usd);
  usd=usd.toFixed(2);

let resaud = document.getElementById("aud");
resaud.innerHTML=`$${aud}`;
let rescad = document.getElementById("cad");
rescad.innerHTML=`$${cad}`;
let resinr = document.getElementById("inr");
resinr.innerHTML=`₹${inr}`;
let reseur = document.getElementById("eur");
reseur.innerHTML=`€${eur}`;
let resusd = document.getElementById("usd");
resusd.innerHTML=`$${usd}`;


}
else if(curr=='United States Dollar'){
  let aud = amt*(res.rates.AUD/res.rates.USD);
  aud=parseFloat(aud);
  aud=aud.toFixed(2);
  let cad = amt*(res.rates.CAD/res.rates.USD);
  cad=parseFloat(cad);
  cad=cad.toFixed(2);
  let inr = amt*(res.rates.INR/res.rates.USD);
  inr=parseFloat(inr);
  inr=inr.toFixed(2);
  let eur = amt*(1/res.rates.USD);
  eur=parseFloat(eur);
  eur=eur.toFixed(2);
  let usd = amt;
  usd=parseFloat(usd);
  usd=usd.toFixed(2);
 
  let resaud = document.getElementById("aud");
  resaud.innerHTML=`$${aud}`;
  let rescad = document.getElementById("cad");
  rescad.innerHTML=`$${cad}`;
  let resinr = document.getElementById("inr");
  resinr.innerHTML=`₹${inr}`;
  let reseur = document.getElementById("eur");
  reseur.innerHTML=`€${eur}`;
  let resusd = document.getElementById("usd");
  resusd.innerHTML=`$${usd}`;

  
}



}

