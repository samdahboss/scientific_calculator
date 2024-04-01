const keys=document.getElementById('keys')

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
                let calculation = calcScreen.innerHTML
                calculation = calculation.replace(/x/g,"*")
                calculation = calculation.replace(/÷/g,"/")
                calcScreen.innerHTML=calculation?eval(calculation):""
            }else if(this.id == "factorial"){
                calcScreen.innerHTML+="!"
            }else{
                calcScreen.innerHTML+=button.innerHTML;
            }
        })
    }
}
let allBtn = [["ON/OFF","on-off"],["x!","factorial"],["(","opening-parentheses"],
              [")","closing-parentheses"],["%","mod"],["AC","ac"],["sin","sin"],
              ["π","pi"],["7","7"],["8","8"],["9","9"],["÷","divide"],["cos","cos"],
              ["log","log"],["4","4"],["5","5"],["6","6"],["x","multiply"],["tan","tan"],
              ["√","root"],["1","1"],["2","2"],["3","3"],["-","subtract"],["e","exp"],
              ["x^y","pwr"],["0","0"],[".","pnt"],["=","equal-to"],["+","add"],
             ]

let btnObject=[]
for (let index = 0; index < allBtn.length; index++) {
    btnObject.push(new button(allBtn[index][0], allBtn[index][1]))    
}
console.log(btnObject)
// let pwrBtn=new button("ON/OFF","on-off");
// let factorial=new button("x!","factorial")
// let openingParentheses= new button("(","opening-parentheses")
// let closingParentheses= new button(")","closing-parentheses")
// let mod= new button("%","mod")
// let acBtn= new button("AC","ac")
// let sinBtn= new button("sin","sin")
// let piBtn= new button("π","pi")
// let num7= new button("7","7")
// let num8= new button("8","8")
// let num9= new button("9","9")
// let divideBtn= new button("÷","divide")
// let cosBtn= new button("cos","cos")
// let logBtn= new button("log","log")
// let num4= new button("4","4")
// let num5= new button("5","5")
// let num6= new button("6","6")
// let multiply= new button("x","multiply")
// let tan= new button("tan","tan")
// let root= new button("√","root")
// let num1= new button("1","1")
// let num2= new button("2","2")
// let num3= new button("3","3")
// let subtract= new button("-","subtract")
// let exp= new button("e","exp")
// let pwr= new button("x^y","pwr")
// let num0= new button("0","0")
// let pnt= new button(".","pnt")
// let equalTo= new button("=","equal-to")
// let add= new button("+","add")