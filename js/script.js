const calcScreen = document.getElementById('calculator-screen')
const calculatorKeys=document.getElementById('calculator-keys')
const key=document.getElementsByClassName('key')


const BUTTON_TYPES ={
    ON_OFF: "on-off",
    EQUAL_TO : "equal-to"
}
class Button{
    constructor(content,id, parentElement){
        this.content=content;
        this.id= id
        this.parentElement =parentElement;
        this.buttonElement = this.create()
    }

    create(){
        const button =document.createElement('button');
        button.innerHTML=this.content;
        button.id=this.id;
        button.classList.add("key")
        button.addEventListener('click' , this.handleClick)
        this.parentElement.appendChild(button)
        return button
    }

    handleClick = () => {
        switch (this.id){
            case BUTTON_TYPES.ON_OFF:
                this.toggleButtonsState()
                calcScreen.innerHTML=""
                break;
            case BUTTON_TYPES.EQUAL_TO:
                this.equalTo()
                break;
            default:
                calcScreen.innerHTML+=this.buttonElement.innerHTML;
        }
    }

    toggleButtonsState() {
        for (let index = 0; index < key.length; index++) {
            if (index === 3) continue;
            key[index].toggleAttribute("disabled");
            key[index].classList.toggle("disable-btn");
        }
    }

    equalTo(){
        let calculation = calcScreen.innerHTML.replace(/x/g,"*").replace(/÷/g,"/")
        if(typeof eval(calculation) !== "number"){
            calcScreen.innerHTML="SYNTAX ERROR"
        }else{
            calcScreen.innerHTML= eval(calculation);
        }
    }
}

let allBtn = [
                ["7","7"],["8","8"],["9","9"],["ON/OFF","on-off"],
                ["4","4"],["5","5"],["6","6"],["÷","divide"],
                ["1","1"],["2","2"],["3","3"],["-","subtract"],
                ["0","0"],["*","multiply"],["+","add"],["=","equal-to"],
             ]

const buttonInstance = allBtn.map(([content, id]) => new Button (content, id, calculatorKeys))