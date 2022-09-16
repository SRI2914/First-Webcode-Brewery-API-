// Taking body from Document and creating elements using DOM
document.body.innerHTML=`
<div class="Heading-container">
<h1>-:BREWERY:-</h1>
<img id="image-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGWV843l9SqqZ35rN1ld5Pj7dmHPh0iBsQew&usqp=CAU">
</div>
<div id="maincontainer" class="main-container"></div>
`;

//Get the breweries data from the breweries API 

const getBreweries=async() => {
    try {
        //Fetch the data from Breweries from API
        const data = await fetch("https://api.openbrewerydb.org/breweries");

        //convert the data to JSON formatt
        const brewerys =await data.json();
        maincontainer=document.getElementById('maincontainer');
        maincontainer.innerHTML = "";

        brewerys.forEach((brewery)=>{
            //Calling of the display function so that data from the brewery API will integrate with DOM.
            displayBrewery(brewery);
        })
    } catch (error) {
        console.log(error);
        //We can also write a message here with passing the error
       // maincontainer.innerHTML = error.message;
        
    }
}

getBreweries();


//Creating display brewery function:
const displayBrewery=(obj)=>{

    //As many div tags were added to the main container as the number of data present in the brewery API with all the necessary information
    maincontainer.innerHTML+=`
    <div class="container">
        <h3 class="test">Name: ${obj.name}</h3>
        <p class="para test">Type:${obj.brewery_type}</p>
        <div class="address">
             <h5 id="address-heading">ADDRESS</h5>
             <p class="address-1">City:${obj.city}</p>
             <p class="address-1">Street:${obj.street}</p>
             <p class="address-1">State:${obj.state}</p>
             <p class="address-1">Country:${obj.country}</p>
        </div>
        <p class="para test">Website-URL:-${obj.website_url}</p>
        <p class="para test">Contact No:${obj.phone}</p>



    </div>
    `;
}