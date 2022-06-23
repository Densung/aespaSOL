function readMore() 
{
    var dot = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var buttonText = document.getElementById("readButton");
  
    if (dot.style.display === "none") 
    {
      dot.style.display = "inline";
      buttonText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dot.style.display = "none";
      buttonText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
}