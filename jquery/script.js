//while using plain javascript code
// var para1 = document.getElementById('para1');
// para1.innerHTML = "Welcome";



//Using Jquery
/*there are two step 
    1 -> fetch the element and then change the text of the element
    for fetching the element we use $ and $ is an function
*/


//$('#para1').html('Welcome');

//if you want to hide paragraph
//$('#para1').hide();

//in case if we want to fetch the width and also we can set the width this work for both getter and setter for property
//$('para').width(100); 


//Modifying css using jQuery
//$('#para1').css('color','red');

// $('p').css('color','blue');

// $('p').css('fontSize','50px');

//change multiple property
$('p').css({
    fontSize : "30px",
    color : "red"
});

$('div').css({
    height: "80px",
    width: "80px",
    backgroundColor : "red",
    border:"2px solid blue"
});
