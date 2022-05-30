// Add the coffee to local storage with key "coffee" 

fetch(URL) 
   .then(function (res) { 
       return res.json(); 
   }) 
   .then(function (res) { 
       console.log(res) 

       var products = res.data 

       display(products)
   }) 
   .catch(function (arr) { 
       console.log("arr", arr) 
   }) 

   var emptyArray = []; 

   function display(data) { 
       data.map(function(data) { 
           var div = document.createElement("div"); 

           var title = document.createElement("p") 
           title.innerText = data.title; 

           div.append(title) 

           document.getElementById("menu").append(div) 
       })
   }
