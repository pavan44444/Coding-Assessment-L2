var count=1;/*for incrementing and decrementing the cart items*/
function decrease(){
    if(count==1){
        count=1;
    }
    else{
        count--;
        document.getElementById("quantity").innerHTML=count;
    }
}
function increase(){
   count++;
   document.getElementById("quantity").innerHTML=count;
}
function displaymessage(){
    document.style.backgroundColor="red";
    document.getElementById("message").innerHTML="Embrace Sideboard with Color Yellow and Size Small added to cart";
    
}