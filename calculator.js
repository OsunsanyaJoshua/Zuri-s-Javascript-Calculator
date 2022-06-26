let num1 = prompt ("Enter first number")
let num2 = prompt("Enter your operand") 
let num3 = prompt ("Enter second number")

num1 = parseFloat(num1)
num3 = parseFloat(num3)

 let ans= num2
 let text = " "

switch( ans) {
    case "+" :
        text = num1 + num3;
        break;
        
        case "-" :
            text = num1 - num3;
            break;

            case "/" :
                text= num1 / num3;
                break;

                case "*" :
                    text = num1 * num3;
                    break;

                    default:
                        text = "Error";

                      

}
alert (text)
document.getElementById("hmmn").innerHTML= text