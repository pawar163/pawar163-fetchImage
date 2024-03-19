
function fetchRandomDogImage(){ 

    var xhrRequest = new XMLHttpRequest();

    xhrRequest.onload = function(){
        console.log(xhrRequest.response);

        var responseJSON = JSON.parse(xhrRequest.response);//convert string to JSON object 
        //Json.parse is use to pass the response

        // JSON.stringify // convert JSON to string
        var imageUrl = responseJSON.message; 
        $('#dog-image').attr('src',imageUrl);

    };
    //To Initialize the request(it will open the request)
     xhrRequest.open('get','https://dog.ceo/api/breeds/image/random',true); 

     xhrRequest.send(); //it will make the request  to the server
}




$("#fetch-dog-image-button").click(fetchRandomDogImage); 