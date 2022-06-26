// Code here
//get the data for the first beer alone
fetch('http://localhost:3000/beers/1')
.then(res => res.json())
.then (data =>
    
    
// create variables for the description,name,reviews and image and replace the placeholder text with the values
  {  const description = document.querySelector('#beer-description').textContent = data.description
     const name = document.getElementById("beer-name").innerHTML = data.name
     const image = document.getElementById("beer-image").src = data.image_url
     const reviews = document.getElementById("review-list").textContent = data.reviews
     console.log(reviews)
    

})

    //get the data for all the beers and sort out the names alone
    fetch('http://localhost:3000/beers')
.then(res => res.json())
.then (data =>beerNav(data))
   //sort out the names alone and place them on the navbar  
function beerNav(data) {
        for (const names of data) {
          const unList = document.querySelector("#beer-list");
          const list= document.createElement("li");
          unList.dataset.id = names.id;
          list.innerHTML = `${names.name}`;
          unList.append(list);
        }
      }
    //
    const wordInput = document.getElementById("review");
    const formel = document.getElementById("review-form");
    const review = document.getElementById("review-list")
    const newReview = document.createElement('ul');
    //event listener for when somoene clicks on the submit button
    formel.addEventListener("submit", function (push)
    {
        push.preventDefault();
        addReview();
    })

     function addReview() {
         newReview.innerText = wordInput.value;
         //console.log(newReview)
        review.append(newReview);
     }

    
