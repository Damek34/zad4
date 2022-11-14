function przedzial()
{
    var przedzialStr = document.getElementById("przedzial").value;
    
    var liczby = przedzialStr.split(";");

    var min = parseInt(liczby[0]);
    var max = parseInt(liczby[1]);

    document.getElementById("wynik").innerHTML = "";

    wypiszPrzedzial(min, max);

}

function wypiszPrzedzial (min, max)
{
   document.getElementById("wynik").innerHTML += min + "; ";

   if(min < max)
   {
    return wypiszPrzedzial(min+1, max);
   }
   
    
}