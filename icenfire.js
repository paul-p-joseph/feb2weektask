

 let viewagot = document.getElementById("agot").addEventListener("click",renderagot);
 let viewagotd = document.getElementById("agotd").addEventListener("click",renderagot);

 let viewacok = document.getElementById("acok").addEventListener("click",renderacok);
 let viewacokd = document.getElementById("acokd").addEventListener("click",renderacok);

 let viewasos = document.getElementById("asos").addEventListener("click",renderasos);
 let viewasosd = document.getElementById("asosd").addEventListener("click",renderasos);

 let viewthk = document.getElementById("thk").addEventListener("click",renderthk);
 let viewthkd = document.getElementById("thkd").addEventListener("click",renderthk);

 let viewaffc = document.getElementById("affc").addEventListener("click",renderaffc);
 let viewaffcd = document.getElementById("affcd").addEventListener("click",renderaffc);

 let viewtss = document.getElementById("tss").addEventListener("click",rendertss);
 let viewtssd = document.getElementById("tssd").addEventListener("click",rendertss);

 let viewtmk = document.getElementById("tmk").addEventListener("click",rendertmk);
 let viewtmkd = document.getElementById("tmkd").addEventListener("click",rendertmk);

 let viewadwd = document.getElementById("adwd").addEventListener("click",renderadwd);
 let viewadwdd = document.getElementById("adwdd").addEventListener("click",renderadwd);


 let viewtpatq = document.getElementById("tpatq").addEventListener("click",rendertpatq);
 let viewtpatqd = document.getElementById("tpatqd").addEventListener("click",rendertpatq);

 let viewtrp = document.getElementById("trp").addEventListener("click",rendertrp);
 let viewtrpd = document.getElementById("trpd").addEventListener("click",rendertrp);




 async function renderagot(){
     let book = await fetch("https://www.anapioficeandfire.com/api/books/1");
     data = await book.json();
    
      let rendr = document.getElementById("bdy")

     rendr.innerHTML = 

     `         <nav class="navbar navbar-expand-lg navbar-dark bg-info">
     <h1 class="navbar-brand text-dark pt-2">A Song of Ice and Fire</h1>
     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>

       <div class="collapse navbar-collapse" id="navbarSupportedContent">
         <ul class="navbar-nav mr-auto">
           <li class="nav-item active">
             <a class="nav-link text-dark" href="icenfire.html">Home <span class="sr-only">(current)</span></a>
           </li>
           <li class="nav-item dropdown">
             <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               Books
             </a>
             <div class="dropdown-menu bg-info" aria-labelledby="navbarDropdown">
             <a class="dropdown-item text-dark" id="agotd">A Game of Thrones</a>
             <a class="dropdown-item text-dark" id="acokd">A Clash of Kings</a>
             <a class="dropdown-item text-dark" id="asosd">A Storm of Swords</a>
             <a class="dropdown-item text-dark" id="thkd">The Hedge Knight</a>
             <a class="dropdown-item text-dark" id="affcd">A Feast for Crows</a>
             <a class="dropdown-item text-dark" id="tssd">The Sworn Sword</a>
             <a class="dropdown-item text-dark" id="tmkd">The Mystery Knight</a>
             <a class="dropdown-item text-dark" id="adwdd">A Dance with Dragons</a>
             <a class="dropdown-item text-dark" id="tpatqd">The Princess and the Queen</a>
             <a class="dropdown-item text-dark" id="trpd">The Rogue Prince</a>
             </div>
           </li>
         </ul>
 </nav>

     <div class="row">

     <div class="col col-lg-5 col-md-5 p-3">
         <div class="card bg-info h-100" style="width: 18rem;">
             <img class="card-img-fluid h-100" src="agameofthrones.jpg" alt="Card image cap">
           </div>
       </div>
   
   <div class="col col-lg-7 col-md-7 p-3 bg-dark text-info">

     <h2>Book Title: ${data.name} </h2>
     <h4>Author: ${data.authors}</h4>
     <h4>Number Of Pages: ${data.numberOfPages}</h4>
     <h4>Media Type: ${data.mediaType}</h4>
     <h4>Released: ${data.released}</h4>
     <h4>Country: ${data.country}</h4>
     <h4>Publisher: ${data.publisher}</h4>
</div>
</div>
<div class="row">
  <div class="col-12 text-info">
     <hr>
     <div>Main Characters</div>
     <hr>
  </div>
</div>

<div class="row" id="rowin">
</div>`
for(i=0;i<data.povCharacters.length;i++){
    let char = await fetch(`${data.povCharacters[i]}`)
    chardata = await char.json();
    
    let row = document.getElementById("rowin");
    let card = document.createElement("div");
    card.setAttribute("class","card bg-dark text-info p-3 m-3 h-100");
    card.setAttribute("style","width: 18rem");
    card.innerHTML=
    `<p>Name: ${chardata.name}</p>
    <p>Gender: ${chardata.gender}</p>
    <p>Born: ${chardata.born}</p>
    <p>Culture: ${chardata.culture}</p>
    <p>Titles: ${chardata.titles}</p>
    <p>Died: ${chardata.died}</p>
    <p>Aliases: ${chardata.aliases}</p>`
    row.append(card);
}
let viewagotd = document.getElementById("agotd").addEventListener("click",renderagot);
let viewacokd = document.getElementById("acokd").addEventListener("click",renderacok);
let viewasosd = document.getElementById("asosd").addEventListener("click",renderasos);
let viewthkd = document.getElementById("thkd").addEventListener("click",renderthk);
let viewaffcd = document.getElementById("affcd").addEventListener("click",renderaffc);
let viewtssd = document.getElementById("tssd").addEventListener("click",rendertss);
let viewtmkd = document.getElementById("tmkd").addEventListener("click",rendertmk);
let viewadwdd = document.getElementById("adwdd").addEventListener("click",renderadwd);
let viewtpatqd = document.getElementById("tpatqd").addEventListener("click",rendertpatq);
let viewtrpd = document.getElementById("trpd").addEventListener("click",rendertrp);

}

async function renderacok(){

    let book = await fetch("https://www.anapioficeandfire.com/api/books/2");
    data = await book.json();
    
     let rendr = document.getElementById("bdy")

    rendr.innerHTML = 

    `         <nav class="navbar navbar-expand-lg navbar-dark bg-info">
    <h1 class="navbar-brand text-dark pt-2">A Song of Ice and Fire</h1>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link text-dark" href="icenfire.html">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Books
            </a>
            <div class="dropdown-menu bg-info" aria-labelledby="navbarDropdown">
            <a class="dropdown-item text-dark" id="agotd">A Game of Thrones</a>
            <a class="dropdown-item text-dark" id="acokd">A Clash of Kings</a>
            <a class="dropdown-item text-dark" id="asosd">A Storm of Swords</a>
            <a class="dropdown-item text-dark" id="thkd">The Hedge Knight</a>
            <a class="dropdown-item text-dark" id="affcd">A Feast for Crows</a>
            <a class="dropdown-item text-dark" id="tssd">The Sworn Sword</a>
            <a class="dropdown-item text-dark" id="tmkd">The Mystery Knight</a>
            <a class="dropdown-item text-dark" id="adwdd">A Dance with Dragons</a>
            <a class="dropdown-item text-dark" id="tpatqd">The Princess and the Queen</a>
            <a class="dropdown-item text-dark" id="trpd">The Rogue Prince</a>
            </div>
          </li>
        </ul>
</nav>

    <div class="row">

    <div class="col col-lg-5 col-md-5 p-3">
        <div class="card bg-info h-100" style="width: 18rem;">
            <img class="card-img-fluid h-100" src="aclashofkings.jpg" alt="Card image cap">
          </div>
      </div>
  
  <div class="col col-lg-7 col-md-7 p-3 bg-dark text-info">

    <h2>Book Title: ${data.name} </h2>
    <h4>Author: ${data.authors}</h4>
    <h4>Number Of Pages: ${data.numberOfPages}</h4>
    <h4>Media Type: ${data.mediaType}</h4>
    <h4>Released: ${data.released}</h4>
    <h4>Country: ${data.country}</h4>
    <h4>Publisher: ${data.publisher}</h4>
</div>
</div>
<div class="row">
 <div class="col-12 text-info">
    <hr>
    <div>Main Characters</div>
    <hr>
 </div>
</div>

<div class="row" id="rowin">
</div>`
for(i=0;i<data.povCharacters.length;i++){
   let char = await fetch(`${data.povCharacters[i]}`)
   chardata = await char.json();
   
   let row = document.getElementById("rowin");
   let card = document.createElement("div");
   card.setAttribute("class","card bg-dark text-info p-3 m-3 h-100");
   card.setAttribute("style","width: 18rem");
   card.innerHTML=
   `<p>Name: ${chardata.name}</p>
   <p>Gender: ${chardata.gender}</p>
   <p>Born: ${chardata.born}</p>
   <p>Culture: ${chardata.culture}</p>
   <p>Titles: ${chardata.titles}</p>
   <p>Died: ${chardata.died}</p>
   <p>Aliases: ${chardata.aliases}</p>`
   row.append(card);
}

let viewagotd = document.getElementById("agotd").addEventListener("click",renderagot);
let viewacokd = document.getElementById("acokd").addEventListener("click",renderacok);
let viewasosd = document.getElementById("asosd").addEventListener("click",renderasos);
let viewthkd = document.getElementById("thkd").addEventListener("click",renderthk);
let viewaffcd = document.getElementById("affcd").addEventListener("click",renderaffc);
let viewtssd = document.getElementById("tssd").addEventListener("click",rendertss);
let viewtmkd = document.getElementById("tmkd").addEventListener("click",rendertmk);
let viewadwdd = document.getElementById("adwdd").addEventListener("click",renderadwd);
let viewtpatqd = document.getElementById("tpatqd").addEventListener("click",rendertpatq);
let viewtrpd = document.getElementById("trpd").addEventListener("click",rendertrp);

}

async function renderasos(){
    let book = await fetch("https://www.anapioficeandfire.com/api/books/3");
    data = await book.json();
    
     let rendr = document.getElementById("bdy")

    rendr.innerHTML = 

    `         <nav class="navbar navbar-expand-lg navbar-dark bg-info">
    <h1 class="navbar-brand text-dark pt-2">A Song of Ice and Fire</h1>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link text-dark" href="icenfire.html">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Books
            </a>
            <div class="dropdown-menu bg-info" aria-labelledby="navbarDropdown">
            <a class="dropdown-item text-dark" id="agotd">A Game of Thrones</a>
            <a class="dropdown-item text-dark" id="acokd">A Clash of Kings</a>
            <a class="dropdown-item text-dark" id="asosd">A Storm of Swords</a>
            <a class="dropdown-item text-dark" id="thkd">The Hedge Knight</a>
            <a class="dropdown-item text-dark" id="affcd">A Feast for Crows</a>
            <a class="dropdown-item text-dark" id="tssd">The Sworn Sword</a>
            <a class="dropdown-item text-dark" id="tmkd">The Mystery Knight</a>
            <a class="dropdown-item text-dark" id="adwdd">A Dance with Dragons</a>
            <a class="dropdown-item text-dark" id="tpatqd">The Princess and the Queen</a>
            <a class="dropdown-item text-dark" id="trpd">The Rogue Prince</a>
            </div>
          </li>
        </ul>
</nav>

    <div class="row">

    <div class="col col-lg-5 col-md-5 p-3">
        <div class="card bg-info h-100" style="width: 18rem;">
            <img class="card-img-fluid h-100" src="AStormofSwords.jpg" alt="Card image cap">
          </div>
      </div>
  
  <div class="col col-lg-7 col-md-7 p-3 bg-dark text-info">

    <h2>Book Title: ${data.name} </h2>
    <h4>Author: ${data.authors}</h4>
    <h4>Number Of Pages: ${data.numberOfPages}</h4>
    <h4>Media Type: ${data.mediaType}</h4>
    <h4>Released: ${data.released}</h4>
    <h4>Country: ${data.country}</h4>
    <h4>Publisher: ${data.publisher}</h4>
</div>
</div>
<div class="row">
 <div class="col-12 text-info">
    <hr>
    <div>Main Characters</div>
    <hr>
 </div>
</div>

<div class="row" id="rowin">
</div>`
for(i=0;i<data.povCharacters.length;i++){
   let char = await fetch(`${data.povCharacters[i]}`)
   chardata = await char.json();
  
   let row = document.getElementById("rowin");
   let card = document.createElement("div");
   card.setAttribute("class","card bg-dark text-info p-3 m-3 h-100");
   card.setAttribute("style","width: 18rem");
   card.innerHTML=
   `<p>Name: ${chardata.name}</p>
   <p>Gender: ${chardata.gender}</p>
   <p>Born: ${chardata.born}</p>
   <p>Culture: ${chardata.culture}</p>
   <p>Titles: ${chardata.titles}</p>
   <p>Died: ${chardata.died}</p>
   <p>Aliases: ${chardata.aliases}</p>`
   row.append(card);
}

let viewagotd = document.getElementById("agotd").addEventListener("click",renderagot);
let viewacokd = document.getElementById("acokd").addEventListener("click",renderacok);
let viewasosd = document.getElementById("asosd").addEventListener("click",renderasos);
let viewthkd = document.getElementById("thkd").addEventListener("click",renderthk);
let viewaffcd = document.getElementById("affcd").addEventListener("click",renderaffc);
let viewtssd = document.getElementById("tssd").addEventListener("click",rendertss);
let viewtmkd = document.getElementById("tmkd").addEventListener("click",rendertmk);
let viewadwdd = document.getElementById("adwdd").addEventListener("click",renderadwd);
let viewtpatqd = document.getElementById("tpatqd").addEventListener("click",rendertpatq);
let viewtrpd = document.getElementById("trpd").addEventListener("click",rendertrp);

}

async function renderthk(){
    let book = await fetch("https://www.anapioficeandfire.com/api/books/4");
    data = await book.json();
   
     let rendr = document.getElementById("bdy")

    rendr.innerHTML = 

    `         <nav class="navbar navbar-expand-lg navbar-dark bg-info">
    <h1 class="navbar-brand text-dark pt-2">A Song of Ice and Fire</h1>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link text-dark" href="icenfire.html">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Books
            </a>
            <div class="dropdown-menu bg-info" aria-labelledby="navbarDropdown">
            <a class="dropdown-item text-dark" id="agotd">A Game of Thrones</a>
            <a class="dropdown-item text-dark" id="acokd">A Clash of Kings</a>
            <a class="dropdown-item text-dark" id="asosd">A Storm of Swords</a>
            <a class="dropdown-item text-dark" id="thkd">The Hedge Knight</a>
            <a class="dropdown-item text-dark" id="affcd">A Feast for Crows</a>
            <a class="dropdown-item text-dark" id="tssd">The Sworn Sword</a>
            <a class="dropdown-item text-dark" id="tmkd">The Mystery Knight</a>
            <a class="dropdown-item text-dark" id="adwdd">A Dance with Dragons</a>
            <a class="dropdown-item text-dark" id="tpatqd">The Princess and the Queen</a>
            <a class="dropdown-item text-dark" id="trpd">The Rogue Prince</a>
            </div>
          </li>
        </ul>
</nav>

    <div class="row">

    <div class="col col-lg-5 col-md-5 p-3">
        <div class="card bg-info h-100" style="width: 18rem;">
            <img class="card-img-fluid h-100" src="TheHedgeKnight.jpg" alt="Card image cap">
          </div>
      </div>
  
  <div class="col col-lg-7 col-md-7 p-3 bg-dark text-info">

    <h2>Book Title: ${data.name} </h2>
    <h4>Author: ${data.authors}</h4>
    <h4>Number Of Pages: ${data.numberOfPages}</h4>
    <h4>Media Type: ${data.mediaType}</h4>
    <h4>Released: ${data.released}</h4>
    <h4>Country: ${data.country}</h4>
    <h4>Publisher: ${data.publisher}</h4>
</div>
</div>
<div class="row">
 <div class="col-12 text-info">
    <hr>
    <div>Main Characters</div>
    <hr>
 </div>
</div>

<div class="row" id="rowin">
</div>`
for(i=0;i<data.povCharacters.length;i++){
   let char = await fetch(`${data.povCharacters[i]}`)
   chardata = await char.json();
 
   let row = document.getElementById("rowin");
   let card = document.createElement("div");
   card.setAttribute("class","card bg-dark text-info p-3 m-3 h-100");
   card.setAttribute("style","width: 18rem");
   card.innerHTML=
   `<p>Name: ${chardata.name}</p>
   <p>Gender: ${chardata.gender}</p>
   <p>Born: ${chardata.born}</p>
   <p>Culture: ${chardata.culture}</p>
   <p>Titles: ${chardata.titles}</p>
   <p>Died: ${chardata.died}</p>
   <p>Aliases: ${chardata.aliases}</p>`
   row.append(card);
}

let viewagotd = document.getElementById("agotd").addEventListener("click",renderagot);
let viewacokd = document.getElementById("acokd").addEventListener("click",renderacok);
let viewasosd = document.getElementById("asosd").addEventListener("click",renderasos);
let viewthkd = document.getElementById("thkd").addEventListener("click",renderthk);
let viewaffcd = document.getElementById("affcd").addEventListener("click",renderaffc);
let viewtssd = document.getElementById("tssd").addEventListener("click",rendertss);
let viewtmkd = document.getElementById("tmkd").addEventListener("click",rendertmk);
let viewadwdd = document.getElementById("adwdd").addEventListener("click",renderadwd);
let viewtpatqd = document.getElementById("tpatqd").addEventListener("click",rendertpatq);
let viewtrpd = document.getElementById("trpd").addEventListener("click",rendertrp);

}

async function renderaffc(){
    let book = await fetch("https://www.anapioficeandfire.com/api/books/5");
    data = await book.json();
   
     let rendr = document.getElementById("bdy")

    rendr.innerHTML = 

    `         <nav class="navbar navbar-expand-lg navbar-dark bg-info">
    <h1 class="navbar-brand text-dark pt-2">A Song of Ice and Fire</h1>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link text-dark" href="icenfire.html">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Books
            </a>
            <div class="dropdown-menu bg-info" aria-labelledby="navbarDropdown">
            <a class="dropdown-item text-dark" id="agotd">A Game of Thrones</a>
            <a class="dropdown-item text-dark" id="acokd">A Clash of Kings</a>
            <a class="dropdown-item text-dark" id="asosd">A Storm of Swords</a>
            <a class="dropdown-item text-dark" id="thkd">The Hedge Knight</a>
            <a class="dropdown-item text-dark" id="affcd">A Feast for Crows</a>
            <a class="dropdown-item text-dark" id="tssd">The Sworn Sword</a>
            <a class="dropdown-item text-dark" id="tmkd">The Mystery Knight</a>
            <a class="dropdown-item text-dark" id="adwdd">A Dance with Dragons</a>
            <a class="dropdown-item text-dark" id="tpatqd">The Princess and the Queen</a>
            <a class="dropdown-item text-dark" id="trpd">The Rogue Prince</a>
            </div>
          </li>
        </ul>
</nav>

    <div class="row">

    <div class="col col-lg-5 col-md-5 p-3">
        <div class="card bg-info h-100" style="width: 18rem;">
            <img class="card-img-fluid h-100" src="AFeastforCrows.jpg" alt="Card image cap">
          </div>
      </div>
  
  <div class="col col-lg-7 col-md-7 p-3 bg-dark text-info">

    <h2>Book Title: ${data.name} </h2>
    <h4>Author: ${data.authors}</h4>
    <h4>Number Of Pages: ${data.numberOfPages}</h4>
    <h4>Media Type: ${data.mediaType}</h4>
    <h4>Released: ${data.released}</h4>
    <h4>Country: ${data.country}</h4>
    <h4>Publisher: ${data.publisher}</h4>
</div>
</div>
<div class="row">
 <div class="col-12 text-info">
    <hr>
    <div>Main Characters</div>
    <hr>
 </div>
</div>

<div class="row" id="rowin">
</div>`
for(i=0;i<data.povCharacters.length;i++){
   let char = await fetch(`${data.povCharacters[i]}`)
   chardata = await char.json();
   
   let row = document.getElementById("rowin");
   let card = document.createElement("div");
   card.setAttribute("class","card bg-dark text-info p-3 m-3 h-100");
   card.setAttribute("style","width: 18rem");
   card.innerHTML=
   `<p>Name: ${chardata.name}</p>
   <p>Gender: ${chardata.gender}</p>
   <p>Born: ${chardata.born}</p>
   <p>Culture: ${chardata.culture}</p>
   <p>Titles: ${chardata.titles}</p>
   <p>Died: ${chardata.died}</p>
   <p>Aliases: ${chardata.aliases}</p>`
   row.append(card);
}

let viewagotd = document.getElementById("agotd").addEventListener("click",renderagot);
let viewacokd = document.getElementById("acokd").addEventListener("click",renderacok);
let viewasosd = document.getElementById("asosd").addEventListener("click",renderasos);
let viewthkd = document.getElementById("thkd").addEventListener("click",renderthk);
let viewaffcd = document.getElementById("affcd").addEventListener("click",renderaffc);
let viewtssd = document.getElementById("tssd").addEventListener("click",rendertss);
let viewtmkd = document.getElementById("tmkd").addEventListener("click",rendertmk);
let viewadwdd = document.getElementById("adwdd").addEventListener("click",renderadwd);
let viewtpatqd = document.getElementById("tpatqd").addEventListener("click",rendertpatq);
let viewtrpd = document.getElementById("trpd").addEventListener("click",rendertrp);

}

async function rendertss(){
    let book = await fetch("https://www.anapioficeandfire.com/api/books/6");
    data = await book.json();
    
     let rendr = document.getElementById("bdy")

    rendr.innerHTML = 

    `         <nav class="navbar navbar-expand-lg navbar-dark bg-info">
    <h1 class="navbar-brand text-dark pt-2">A Song of Ice and Fire</h1>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link text-dark" href="icenfire.html">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Books
            </a>
            <div class="dropdown-menu bg-info" aria-labelledby="navbarDropdown">
            <a class="dropdown-item text-dark" id="agotd">A Game of Thrones</a>
            <a class="dropdown-item text-dark" id="acokd">A Clash of Kings</a>
            <a class="dropdown-item text-dark" id="asosd">A Storm of Swords</a>
            <a class="dropdown-item text-dark" id="thkd">The Hedge Knight</a>
            <a class="dropdown-item text-dark" id="affcd">A Feast for Crows</a>
            <a class="dropdown-item text-dark" id="tssd">The Sworn Sword</a>
            <a class="dropdown-item text-dark" id="tmkd">The Mystery Knight</a>
            <a class="dropdown-item text-dark" id="adwdd">A Dance with Dragons</a>
            <a class="dropdown-item text-dark" id="tpatqd">The Princess and the Queen</a>
            <a class="dropdown-item text-dark" id="trpd">The Rogue Prince</a>
            </div>
          </li>
        </ul>
</nav>

    <div class="row">

    <div class="col col-lg-5 col-md-5 p-3">
        <div class="card bg-info h-100" style="width: 18rem;">
            <img class="card-img-fluid h-100" src="TheSwornSword.jpg" alt="Card image cap">
          </div>
      </div>
  
  <div class="col col-lg-7 col-md-7 p-3 bg-dark text-info">

    <h2>Book Title: ${data.name} </h2>
    <h4>Author: ${data.authors}</h4>
    <h4>Number Of Pages: ${data.numberOfPages}</h4>
    <h4>Media Type: ${data.mediaType}</h4>
    <h4>Released: ${data.released}</h4>
    <h4>Country: ${data.country}</h4>
    <h4>Publisher: ${data.publisher}</h4>
</div>
</div>
<div class="row">
 <div class="col-12 text-info">
    <hr>
    <div>Main Characters</div>
    <hr>
 </div>
</div>

<div class="row" id="rowin">
</div>`
for(i=0;i<data.povCharacters.length;i++){
   let char = await fetch(`${data.povCharacters[i]}`)
   chardata = await char.json();
  
   let row = document.getElementById("rowin");
   let card = document.createElement("div");
   card.setAttribute("class","card bg-dark text-info p-3 m-3 h-100");
   card.setAttribute("style","width: 18rem");
   card.innerHTML=
   `<p>Name: ${chardata.name}</p>
   <p>Gender: ${chardata.gender}</p>
   <p>Born: ${chardata.born}</p>
   <p>Culture: ${chardata.culture}</p>
   <p>Titles: ${chardata.titles}</p>
   <p>Died: ${chardata.died}</p>
   <p>Aliases: ${chardata.aliases}</p>`
   row.append(card);
}

let viewagotd = document.getElementById("agotd").addEventListener("click",renderagot);
let viewacokd = document.getElementById("acokd").addEventListener("click",renderacok);
let viewasosd = document.getElementById("asosd").addEventListener("click",renderasos);
let viewthkd = document.getElementById("thkd").addEventListener("click",renderthk);
let viewaffcd = document.getElementById("affcd").addEventListener("click",renderaffc);
let viewtssd = document.getElementById("tssd").addEventListener("click",rendertss);
let viewtmkd = document.getElementById("tmkd").addEventListener("click",rendertmk);
let viewadwdd = document.getElementById("adwdd").addEventListener("click",renderadwd);
let viewtpatqd = document.getElementById("tpatqd").addEventListener("click",rendertpatq);
let viewtrpd = document.getElementById("trpd").addEventListener("click",rendertrp);

}

async function rendertmk(){
    let book = await fetch("https://www.anapioficeandfire.com/api/books/7");
    data = await book.json();
 
     let rendr = document.getElementById("bdy")

    rendr.innerHTML = 

    `         <nav class="navbar navbar-expand-lg navbar-dark bg-info">
    <h1 class="navbar-brand text-dark pt-2">A Song of Ice and Fire</h1>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link text-dark" href="icenfire.html">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Books
            </a>
            <div class="dropdown-menu bg-info" aria-labelledby="navbarDropdown">
            <a class="dropdown-item text-dark" id="agotd">A Game of Thrones</a>
            <a class="dropdown-item text-dark" id="acokd">A Clash of Kings</a>
            <a class="dropdown-item text-dark" id="asosd">A Storm of Swords</a>
            <a class="dropdown-item text-dark" id="thkd">The Hedge Knight</a>
            <a class="dropdown-item text-dark" id="affcd">A Feast for Crows</a>
            <a class="dropdown-item text-dark" id="tssd">The Sworn Sword</a>
            <a class="dropdown-item text-dark" id="tmkd">The Mystery Knight</a>
            <a class="dropdown-item text-dark" id="adwdd">A Dance with Dragons</a>
            <a class="dropdown-item text-dark" id="tpatqd">The Princess and the Queen</a>
            <a class="dropdown-item text-dark" id="trpd">The Rogue Prince</a>
            </div>
          </li>
        </ul>
</nav>

    <div class="row">

    <div class="col col-lg-5 col-md-5 p-3">
        <div class="card bg-info h-100" style="width: 18rem;">
            <img class="card-img-fluid h-100" src="TheMysteryKnight.jpg" alt="Card image cap">
          </div>
      </div>
  
  <div class="col col-lg-7 col-md-7 p-3 bg-dark text-info">

    <h2>Book Title: ${data.name} </h2>
    <h4>Author: ${data.authors}</h4>
    <h4>Number Of Pages: ${data.numberOfPages}</h4>
    <h4>Media Type: ${data.mediaType}</h4>
    <h4>Released: ${data.released}</h4>
    <h4>Country: ${data.country}</h4>
    <h4>Publisher: ${data.publisher}</h4>
</div>
</div>
<div class="row">
 <div class="col-12 text-info">
    <hr>
    <div>Main Characters</div>
    <hr>
 </div>
</div>

<div class="row" id="rowin">
</div>`
for(i=0;i<data.povCharacters.length;i++){
   let char = await fetch(`${data.povCharacters[i]}`)
   chardata = await char.json();
 
   let row = document.getElementById("rowin");
   let card = document.createElement("div");
   card.setAttribute("class","card bg-dark text-info p-3 m-3 h-100");
   card.setAttribute("style","width: 18rem");
   card.innerHTML=
   `<p>Name: ${chardata.name}</p>
   <p>Gender: ${chardata.gender}</p>
   <p>Born: ${chardata.born}</p>
   <p>Culture: ${chardata.culture}</p>
   <p>Titles: ${chardata.titles}</p>
   <p>Died: ${chardata.died}</p>
   <p>Aliases: ${chardata.aliases}</p>`
   row.append(card);
}

let viewagotd = document.getElementById("agotd").addEventListener("click",renderagot);
let viewacokd = document.getElementById("acokd").addEventListener("click",renderacok);
let viewasosd = document.getElementById("asosd").addEventListener("click",renderasos);
let viewthkd = document.getElementById("thkd").addEventListener("click",renderthk);
let viewaffcd = document.getElementById("affcd").addEventListener("click",renderaffc);
let viewtssd = document.getElementById("tssd").addEventListener("click",rendertss);
let viewtmkd = document.getElementById("tmkd").addEventListener("click",rendertmk);
let viewadwdd = document.getElementById("adwdd").addEventListener("click",renderadwd);
let viewtpatqd = document.getElementById("tpatqd").addEventListener("click",rendertpatq);
let viewtrpd = document.getElementById("trpd").addEventListener("click",rendertrp);

}

async function renderadwd(){
    let book = await fetch("https://www.anapioficeandfire.com/api/books/8");
    data = await book.json();
 
     let rendr = document.getElementById("bdy")

    rendr.innerHTML = 

    `         <nav class="navbar navbar-expand-lg navbar-dark bg-info">
    <h1 class="navbar-brand text-dark pt-2">A Song of Ice and Fire</h1>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link text-dark" href="icenfire.html">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Books
            </a>
            <div class="dropdown-menu bg-info" aria-labelledby="navbarDropdown">
            <a class="dropdown-item text-dark" id="agotd">A Game of Thrones</a>
            <a class="dropdown-item text-dark" id="acokd">A Clash of Kings</a>
            <a class="dropdown-item text-dark" id="asosd">A Storm of Swords</a>
            <a class="dropdown-item text-dark" id="thkd">The Hedge Knight</a>
            <a class="dropdown-item text-dark" id="affcd">A Feast for Crows</a>
            <a class="dropdown-item text-dark" id="tssd">The Sworn Sword</a>
            <a class="dropdown-item text-dark" id="tmkd">The Mystery Knight</a>
            <a class="dropdown-item text-dark" id="adwdd">A Dance with Dragons</a>
            <a class="dropdown-item text-dark" id="tpatqd">The Princess and the Queen</a>
            <a class="dropdown-item text-dark" id="trpd">The Rogue Prince</a>
            </div>
          </li>
        </ul>
</nav>

    <div class="row">

    <div class="col col-lg-5 col-md-5 p-3">
        <div class="card bg-info h-100" style="width: 18rem;">
            <img class="card-img-fluid h-100" src="ADancewithDragons.jpg" alt="Card image cap">
          </div>
      </div>
  
  <div class="col col-lg-7 col-md-7 p-3 bg-dark text-info">

    <h2>Book Title: ${data.name} </h2>
    <h4>Author: ${data.authors}</h4>
    <h4>Number Of Pages: ${data.numberOfPages}</h4>
    <h4>Media Type: ${data.mediaType}</h4>
    <h4>Released: ${data.released}</h4>
    <h4>Country: ${data.country}</h4>
    <h4>Publisher: ${data.publisher}</h4>
</div>
</div>
<div class="row">
 <div class="col-12 text-info">
    <hr>
    <div>Main Characters</div>
    <hr>
 </div>
</div>

<div class="row" id="rowin">
</div>`
for(i=0;i<data.povCharacters.length;i++){
   let char = await fetch(`${data.povCharacters[i]}`)
   chardata = await char.json();

   let row = document.getElementById("rowin");
   let card = document.createElement("div");
   card.setAttribute("class","card bg-dark text-info p-3 m-3 h-100");
   card.setAttribute("style","width: 18rem");
   card.innerHTML=
   `<p>Name: ${chardata.name}</p>
   <p>Gender: ${chardata.gender}</p>
   <p>Born: ${chardata.born}</p>
   <p>Culture: ${chardata.culture}</p>
   <p>Titles: ${chardata.titles}</p>
   <p>Died: ${chardata.died}</p>
   <p>Aliases: ${chardata.aliases}</p>`
   row.append(card);
}

let viewagotd = document.getElementById("agotd").addEventListener("click",renderagot);
let viewacokd = document.getElementById("acokd").addEventListener("click",renderacok);
let viewasosd = document.getElementById("asosd").addEventListener("click",renderasos);
let viewthkd = document.getElementById("thkd").addEventListener("click",renderthk);
let viewaffcd = document.getElementById("affcd").addEventListener("click",renderaffc);
let viewtssd = document.getElementById("tssd").addEventListener("click",rendertss);
let viewtmkd = document.getElementById("tmkd").addEventListener("click",rendertmk);
let viewadwdd = document.getElementById("adwdd").addEventListener("click",renderadwd);
let viewtpatqd = document.getElementById("tpatqd").addEventListener("click",rendertpatq);
let viewtrpd = document.getElementById("trpd").addEventListener("click",rendertrp);

}

async function rendertpatq(){
    let book = await fetch("https://www.anapioficeandfire.com/api/books/9");
    data = await book.json();

     let rendr = document.getElementById("bdy")

    rendr.innerHTML = 

    `         <nav class="navbar navbar-expand-lg navbar-dark bg-info">
    <h1 class="navbar-brand text-dark pt-2">A Song of Ice and Fire</h1>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link text-dark" href="icenfire.html">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Books
            </a>
            <div class="dropdown-menu bg-info" aria-labelledby="navbarDropdown">
            <a class="dropdown-item text-dark" id="agotd">A Game of Thrones</a>
            <a class="dropdown-item text-dark" id="acokd">A Clash of Kings</a>
            <a class="dropdown-item text-dark" id="asosd">A Storm of Swords</a>
            <a class="dropdown-item text-dark" id="thkd">The Hedge Knight</a>
            <a class="dropdown-item text-dark" id="affcd">A Feast for Crows</a>
            <a class="dropdown-item text-dark" id="tssd">The Sworn Sword</a>
            <a class="dropdown-item text-dark" id="tmkd">The Mystery Knight</a>
            <a class="dropdown-item text-dark" id="adwdd">A Dance with Dragons</a>
            <a class="dropdown-item text-dark" id="tpatqd">The Princess and the Queen</a>
            <a class="dropdown-item text-dark" id="trpd">The Rogue Prince</a>
            </div>
          </li>
        </ul>
</nav>

    <div class="row">

    <div class="col col-lg-5 col-md-5 p-3">
        <div class="card bg-info h-100" style="width: 18rem;">
            <img class="card-img-fluid h-100" src="ThePrincessandtheQueen.jpg" alt="Card image cap">
          </div>
      </div>
  
  <div class="col col-lg-7 col-md-7 p-3 bg-dark text-info">

    <h2>Book Title: ${data.name} </h2>
    <h4>Author: ${data.authors}</h4>
    <h4>Number Of Pages: ${data.numberOfPages}</h4>
    <h4>Media Type: ${data.mediaType}</h4>
    <h4>Released: ${data.released}</h4>
    <h4>Country: ${data.country}</h4>
    <h4>Publisher: ${data.publisher}</h4>
</div>
</div>
<div class="row">
 <div class="col-12 text-info">
    <hr>
    <div>Main Characters</div>
    <hr>
 </div>
</div>

<div class="row" id="rowin">
</div>`
for(i=0;i<data.povCharacters.length;i++){
   let char = await fetch(`${data.povCharacters[i]}`)
   chardata = await char.json();
  
   let row = document.getElementById("rowin");
   let card = document.createElement("div");
   card.setAttribute("class","card bg-dark text-info p-3 m-3 h-100");
   card.setAttribute("style","width: 18rem");
   card.innerHTML=
   `<p>Name: ${chardata.name}</p>
   <p>Gender: ${chardata.gender}</p>
   <p>Born: ${chardata.born}</p>
   <p>Culture: ${chardata.culture}</p>
   <p>Titles: ${chardata.titles}</p>
   <p>Died: ${chardata.died}</p>
   <p>Aliases: ${chardata.aliases}</p>`
   row.append(card);
}

let viewagotd = document.getElementById("agotd").addEventListener("click",renderagot);
let viewacokd = document.getElementById("acokd").addEventListener("click",renderacok);
let viewasosd = document.getElementById("asosd").addEventListener("click",renderasos);
let viewthkd = document.getElementById("thkd").addEventListener("click",renderthk);
let viewaffcd = document.getElementById("affcd").addEventListener("click",renderaffc);
let viewtssd = document.getElementById("tssd").addEventListener("click",rendertss);
let viewtmkd = document.getElementById("tmkd").addEventListener("click",rendertmk);
let viewadwdd = document.getElementById("adwdd").addEventListener("click",renderadwd);
let viewtpatqd = document.getElementById("tpatqd").addEventListener("click",rendertpatq);
let viewtrpd = document.getElementById("trpd").addEventListener("click",rendertrp);

}

async function rendertrp(){
    let book = await fetch("https://www.anapioficeandfire.com/api/books/10");
    data = await book.json();
 
     let rendr = document.getElementById("bdy")

    rendr.innerHTML = 

    `         <nav class="navbar navbar-expand-lg navbar-dark bg-info">
    <h1 class="navbar-brand text-dark pt-2">A Song of Ice and Fire</h1>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link text-dark" href="icenfire.html">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Books
            </a>
            <div class="dropdown-menu bg-info" aria-labelledby="navbarDropdown">
            <a class="dropdown-item text-dark" id="agotd">A Game of Thrones</a>
            <a class="dropdown-item text-dark" id="acokd">A Clash of Kings</a>
            <a class="dropdown-item text-dark" id="asosd">A Storm of Swords</a>
            <a class="dropdown-item text-dark" id="thkd">The Hedge Knight</a>
            <a class="dropdown-item text-dark" id="affcd">A Feast for Crows</a>
            <a class="dropdown-item text-dark" id="tssd">The Sworn Sword</a>
            <a class="dropdown-item text-dark" id="tmkd">The Mystery Knight</a>
            <a class="dropdown-item text-dark" id="adwdd">A Dance with Dragons</a>
            <a class="dropdown-item text-dark" id="tpatqd">The Princess and the Queen</a>
            <a class="dropdown-item text-dark" id="trpd">The Rogue Prince</a>
            </div>
          </li>
        </ul>
</nav>

    <div class="row">

    <div class="col col-lg-5 col-md-5 p-3">
        <div class="card bg-info h-100" style="width: 18rem;">
            <img class="card-img-fluid h-100" src="TheRoguePrince.jpg" alt="Card image cap">
          </div>
      </div>
  
  <div class="col col-lg-7 col-md-7 p-3 bg-dark text-info">

    <h2>Book Title: ${data.name} </h2>
    <h4>Author: ${data.authors}</h4>
    <h4>Number Of Pages: ${data.numberOfPages}</h4>
    <h4>Media Type: ${data.mediaType}</h4>
    <h4>Released: ${data.released}</h4>
    <h4>Country: ${data.country}</h4>
    <h4>Publisher: ${data.publisher}</h4>
</div>
</div>
<div class="row">
 <div class="col-12 text-info">
    <hr>
    <div>Main Characters</div>
    <hr>
 </div>
</div>

<div class="row" id="rowin">
</div>`
for(i=0;i<data.povCharacters.length;i++){
   let char = await fetch(`${data.povCharacters[i]}`)
   chardata = await char.json();
 
   let row = document.getElementById("rowin");
   let card = document.createElement("div");
   card.setAttribute("class","card bg-dark text-info p-3 m-3 h-100");
   card.setAttribute("style","width: 18rem");
   card.innerHTML=
   `<p>Name: ${chardata.name}</p>
   <p>Gender: ${chardata.gender}</p>
   <p>Born: ${chardata.born}</p>
   <p>Culture: ${chardata.culture}</p>
   <p>Titles: ${chardata.titles}</p>
   <p>Died: ${chardata.died}</p>
   <p>Aliases: ${chardata.aliases}</p>`
   row.append(card);
}

let viewagotd = document.getElementById("agotd").addEventListener("click",renderagot);
let viewacokd = document.getElementById("acokd").addEventListener("click",renderacok);
let viewasosd = document.getElementById("asosd").addEventListener("click",renderasos);
let viewthkd = document.getElementById("thkd").addEventListener("click",renderthk);
let viewaffcd = document.getElementById("affcd").addEventListener("click",renderaffc);
let viewtssd = document.getElementById("tssd").addEventListener("click",rendertss);
let viewtmkd = document.getElementById("tmkd").addEventListener("click",rendertmk);
let viewadwdd = document.getElementById("adwdd").addEventListener("click",renderadwd);
let viewtpatqd = document.getElementById("tpatqd").addEventListener("click",rendertpatq);
let viewtrpd = document.getElementById("trpd").addEventListener("click",rendertrp);

}

 