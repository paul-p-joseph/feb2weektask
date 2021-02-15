
async function searchshow(query){
    const url =  `https://api.tvmaze.com/search/shows?q=${query}`
    
        let res = await fetch(url)

        let data = await res.json();
   
        const shows = data.map(ele => ele.show);
   
        renderres(shows);
   
}

function renderres (res){
   const list = document.getElementById("resultlist");
   list.innerHTML = "";
   res.forEach(result => {

        let formattedResult = `<div class="card h-100" style="width: 18rem; margin-left: 25px">
        <img class="card-img-top" src="${result.image.medium}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${result.name}</h5>
          <p><b>Genre : ${result.genres}</b></p>
          <p><b>Premiere Date : ${result.premiered}</b></p>
          <p><b>Type : ${result.type}</b></p>
        </div>
      </div>`
       const element = document.createElement("div");
       element.setAttribute("class","col p-3");
       element.innerHTML = formattedResult;
       list.appendChild(element)

       
   });
}


let searchtimeouttoken = 0
window.onload = () => {
    const searchfieldelement = document.getElementById("searchfield");
    searchfieldelement.onkeyup = (evnt) =>{

        clearTimeout(searchtimeouttoken);

        searchtimeouttoken =setTimeout(()=>{
            searchshow(searchfieldelement.value);
        },1000);
        
    }
}


