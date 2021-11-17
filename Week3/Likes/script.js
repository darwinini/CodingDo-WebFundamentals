function likes(element)
{
   
   var score = document.getElementById(element);
   var number = score.innerHTML;
   number++;
   score.innerHTML = number;
}