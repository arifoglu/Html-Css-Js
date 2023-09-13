document.querySelector("img.blue").onmouseover = function()
{
    this.src = "images/green.jpg";
    document.querySelector("div#container").style.backgroundColor = "green";
};
document.querySelector("img.blue").onmouseout = function()
{
    this.src = "images/blue.jpg";
    document.querySelector("div#container").style.backgroundColor = "#faebd7"
};
