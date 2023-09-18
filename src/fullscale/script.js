class Stack {
    constructor() {
       this.stkArr = [];
    }
    // add element to the stack
    add(element) {
       return this.stkArr.push(element);
    }
    peek() {
    let inputData = document.getElementById("input").value;
       if (inputData != 0){
        document.getElementById("content").innerHTML = 
          "The Peek element of the stack is : " +
          this.stkArr[this.stkArr.length - 1]
       ;
       }
       else {
        document.getElementById("content").innerHTML = 
        "There's nothing to peek.  "
       }
    }
    // check if the stack is empty
    isEmpty() {
        if(this.stkArr.length != 0) {
            document.getElementById("content").innerHTML = 
            "The stack is NOT empty. ";
        }
        else {
            document.getElementById("content").innerHTML = 
            "The stack is EMPTY. ";
        }
    }
 }

let stack = new Stack();
arr = stack.stkArr;
i = 5;
function pushCreate(){
        if (i >= 5) {i = 5;}
        i--;
        let inputData = document.getElementById("input").value;
        let ele = document.getElementById('dropdown');
        let tBody = document.getElementsByTagName('tbody')[0];
        let txt = document.createTextNode(inputData);
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.setAttribute("class", "stack-item");
        td.setAttribute("id", [i+1]);
        td.setAttribute("data-testid", [i+1]);
       
        if (arr.length+1 <= 5){
            td.appendChild(txt);
            tr.appendChild(td);
            tBody.appendChild(tr);
            stack.add(inputData);
            console.log(arr);
        } else {
            document.getElementById("content").innerHTML = "Stack is already full!"
        }
  }

  function peek(){
    stack.peek(arr);
  }

  function empty(){
    stack.isEmpty(arr);
  }