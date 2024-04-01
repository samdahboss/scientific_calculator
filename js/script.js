const calcScreen = document.getElementById('calc-screen')
const allBtns= document.querySelector("button")
const keys=document.getElementById('keys')
const key=document.getElementsByClassName('key')

keys.innerHTML=""
class button{
    constructor(content,id){
        this.content=content;
        this.id= id
        this.create()
    }
    create(){
        let button =document.createElement('button');
        button.innerHTML=this.content;
        button.id=this.id;
        button.className="key"
        keys.appendChild(button)
        button.addEventListener('click',()=>{
            if(this.id == "ac"){
                calcScreen.innerHTML=""
            }else if(this.id == "on-off"){
                for(let index=1; index<key.length; index++){
                    key[index].toggleAttribute("disabled")
                    key[index].classList.toggle("disable-btn")
                }
                calcScreen.innerHTML=""
            }else if(this.id=="equal-to"){
                this.equalTo()
            }else if(this.id == "factorial"){
                calcScreen.innerHTML+="!"
            }else if(this.id == "cos" || this.id== "tan" || this.id == "sin" || this.id =="log"){
                calcScreen.innerHTML+=button.innerHTML+"(";
            }else if(this.id == "pwr"){
                calcScreen.innerHTML+="&#xb2";
            }else{
                calcScreen.innerHTML+=button.innerHTML;
            }
        })
    }
}

button.prototype.equalTo = function(){
    let calculation = calcScreen.innerHTML
    calculation = calculation.replace(/x/g,"*")
    calculation = calculation.replace(/÷/g,"/")
    if(typeof eval(calculation) !== "number"){
        calcScreen.innerHTML="SYNTAX ERROR"
    }else{
        calcScreen.innerHTML= eval(calculation);
    }
}

let allBtn = [["ON/OFF","on-off"],["x!","factorial"],["(","opening-parentheses"],
              [")","closing-parentheses"],["%","mod"],["AC","ac"],["sin","sin"],
              ["π","pi"],["7","7"],["8","8"],["9","9"],["÷","divide"],["cos","cos"],
              ["log","log"],["4","4"],["5","5"],["6","6"],["x","multiply"],["tan","tan"],
              ["√","root"],["1","1"],["2","2"],["3","3"],["-","subtract"],["e","exp"],
              ["x&#xb2","pwr"],["0","0"],[".","pnt"],["=","equal-to"],["+","add"],
             ]

let btnObject=[]
for (let index = 0; index < allBtn.length; index++) {
    btnObject.push(new button(allBtn[index][0], allBtn[index][1]))    
}