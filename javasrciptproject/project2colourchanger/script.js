// const btn = document.getElementById("button");

const randomcolour = () =>{
    let val = "0123456789ABCDEF";
    let val2 = "#";
    for(let i=0;i<6;i++){
        val2 = val2+val[Math.floor(Math.random() *16)];

    }
    return val2;
};

console.log(randomcolour());

function changerandomclour(){
    document.body.style.backgroundColor = randomcolour();

}
// btn.addEventListener("click",changerandomclour);

