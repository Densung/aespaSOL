function readMore() 
{
    var dot = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var buttonText = document.getElementById("readButton");
  
    if (dot.style.display === "none") 
    {
      dot.style.display = "inline";
      buttonText.innerHTML = "See more"; 
      moreText.style.display = "none";
    } 
    else 
    {
      dot.style.display = "none";
      buttonText.innerHTML = "See less"; 
      moreText.style.display = "inline";
    }
}
function readMore1() 
{
    var dot = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var buttonText = document.getElementById("readButton1");
  
    if (dot.style.display === "none") 
    {
      dot.style.display = "inline";
      buttonText.innerHTML = "See more"; 
      moreText.style.display = "none";
    } 
    else 
    {
      dot.style.display = "none";
      buttonText.innerHTML = "See less"; 
      moreText.style.display = "inline";
    }
}