//    const btn = document.getElementById("button")
function mixcolor(){
    const color1= document.getElementById("color1").value.toLocaleLowerCase();
    const color2 = document.getElementById("color2").value.toLocaleLowerCase();
    let result;

    switch(true){
        case (color1==="red" && color2==="blue"):
        case (color2==="blue" && color1==="red" ):
            result = "purple";
            break;

            case (color1 === "red" && color2 === "yellow"):
                case (color1 === "yellow" && color2 === "red"):
                    result = "orange";
                    break;


                    case (color1 === "blue" && color2 === "yellow"):
                        case (color1 === "yellow" && color2 === "blue"):
                            result = "green";
                            break;



            default:
                result="invalid color"

            
    }
    document.getElementById("result").innerText=result;
    document.getElementById("result").style.color=result;
    document.getElementById("result").style.backgroundColor=result;
}

// btn.addEventListener("click",mixcolor)
