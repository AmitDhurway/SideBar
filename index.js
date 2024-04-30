let sidebar = document.getElementById("sidebar");

let Pos = true;
function move()
{
   
    if(Pos==true)
    {
        Pos=false;
        sidebar.style.left = 0;
    }
    else
    {
        Pos=true;
        sidebar.style.left = "-300px";
    }
}