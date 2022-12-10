
let photoList = document.querySelector('.photosList');

let request = new XMLHttpRequest();

request.open('GET', 'https://jsonplaceholder.typicode.com/albums/2/photos');

request.send();
let i = 0;
request.addEventListener('load', function(){
  
    
    let list = JSON.parse(request.responseText);
    console.log(list);
let i = 0;
let count = 0;
list.forEach(data => 

//for(var i = 0; i < list.length;) 

{
    
    const html = `<button  class="removePhoto" id="removePhoto-${i}"><article class ="photo" id="photo">
    <img class ="photo_img" src="${data.url}"/>
    <div class ="title" id="title"> ${data.title}</div>
    </article></button>`;

    photosList.insertAdjacentHTML('beforeend', html);



    
    //document.querySelector('#removePhoto-'+ i)
    var image = document.getElementById("removePhoto-"+i)
    .addEventListener('click', function(ev){
      var opacity = 1;
    // var intervalID=0;
      let ele = ev.currentTarget;
      
        let intervalID = setInterval(function(){
          console.log(opacity);
          
           
          
            // let img = document.querySelector('#removePhoto-'+i);
            // opacity = Number(window.getComputedStyle(document.getElementById("removePhoto-"+i)).getPropertyValue("opacity"));
            

           
             if (opacity>0.05){
                 opacity = opacity-0.05;
                 ele.style.opacity = opacity;
                
             }
             else{
              clearInterval(intervalID);
                 ele.remove();
                count = count - 1;
                 document.getElementById("counter").innerHTML = "The value is"+count;
             }
            
          },10

        )
    })
    
  
  count  = count+1;
i+=1;
    

    })

    document.getElementById("counter").innerHTML = "The value is"+count;
  

  })
/*
    document.querySelector('#removePhoto-'+i)
    .addEventListener('click', function(){
        
        photosList.removeChild()
        */
      
       
       
          
    
    
   
   
   




//declaring global variables
  





/*
//code from online source
function fadeOut(id) {
    var element = document.getElementById(id);
    var op = 1; // initial opacity
    var timer = setInterval(function () {
      if (op <= 0.1) {
        clearInterval(timer);
        element.remove(); //removing the image when timer reaches its end
        num--; //updating image count
        document.getElementById(
          "counter"
        ).innerHTML = "The value is"+counter-1; //displaying new image count
      }
      element.style.opacity = op;
      op -= 0.1;
    }, 50);
  }

*/































    


/*

function buildCardsUsinJSAPI(containter, data) {
    let cardDiv = document.createElement("div"); //create div element
    cardDiv.setAttribute("class", "product-card"); //set class HTML attribute 
    let imgDiv = document.createElement("img"); //create img element
    imgDiv.setAttribute("src", data.thumbnail); //set src HTML attribute
    imgDiv.setAttribute("class", "prod-img"); //set class HTML attribute
    let infoDiv = document.createElement("div"); //create div element
    infoDiv.setAttribute("class", "prod-info"); //set class HTML attribute
    let titleP = document.createElement("p"); //create p element
    let costP = document.createElement("p");//create p element
    titleP.setAttribute("class", "prod-title"); //set class HTML attribute
   
    titleP.appendChild(document.createTextNode(data.title)); //adding a text node to the p tag
    
    infoDiv.appendChild(titleP) // add the p tag to prod-info div
    infoDiv.appendChild(costP) // add the p tag to prod-info div
    cardDiv.appendChild(imgDiv) // add the img tag to product-card div
  
    containter.appendChild(cardDiv); // add product-card div to prdouct list div
  }
  
  function fetchPhotos() {
    // where we will get products from
    var url = "https://jsonplaceholder.typicode.com/albums/2/photos";
    fetch(url)
      .then((response) => { 
        //extract the body from response object.
        return response.json();
      })
      .then((data) => {
        //get product-list div
        let containerDiv = document.getElementById("product-list");
        //get the array of products from data json object
        let  title = data.title;
        //create a document Fragment (https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment)
        let containerFragment = document.createDocumentFragment();
        //for each product , build a card HTML element
        products.forEach((product) => {
          buildCardsUsinJSAPI(containerFragment, product);
        });
        //add the container fragment to DOM(the product-list div)
        containerDiv.appendChild(containerFragment);
      })
      .catch((error) => {
        console.log(error);
      });
  
  }
  fetchPhotos();
*/