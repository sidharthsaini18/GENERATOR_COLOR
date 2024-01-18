const colorgenerate = () =>{
    const randomnumber = Math.floor(Math.random()*16777215);
    const randomcode = "#"+randomnumber.toString(16);
    document.querySelector(".container").style.backgroundColor = randomcode;
    document.querySelector("#coloorid").innerText = randomcode;
    navigator.clipboard.writeText(randomcode)
}
document.querySelector(".generatebtn").addEventListener("click",colorgenerate);



