let changeButton = document.getElementById("change_button");
let addButton = document.getElementById("add_button");
let deleteButton = document.getElementById("delete_button");
let imageDiv = document.getElementById("image_div");

imagesArray=["images/bulbasaur.png","images/charmander.png","images/squirtle.png","images/pikachu.png"];

//keep track of image to add
let counter=0;

// when the button is clicked, change first image to a new image
changeButton.onclick=function(){
//change the FIRST child of imageDiv

    imageDiv.children[0].src=imagesArray[counter];
    counter++;

    if (counter>3){
        counter=0;
    }
}

//ADD BUTTON - add a different Pokemon image each time it's pressed

addButton.onclick=function(){
    //creates an empty image tag and assigns it to newImage
    let newImage=document.createElement("img");
    //setting image source
    newImage.src=imagesArray[counter];

    counter++;

    if (counter>3){
        counter=0;
    }

    imageDiv.appendChild(newImage);
}

deleteButton.onclick=function(){
    let firstImage=imageDiv.children[0];
    firstImage.remove();
}
