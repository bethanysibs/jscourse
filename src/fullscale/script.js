class Stack {
    constructor() {
       this.stkArr = [];
    }
    // add element to the stack
    add(element) {
       return this.stkArr.push(element);
    }
    // // remove element from the stack
    // remove() {
    //    if (this.stkArr.length > 0) {
    //       document.write("<br>");
    //       return "The Popped element is : " + this.stkArr.pop();
    //    }
    // }
    // // view the last element
    peek() {
    //    document.write("asdfdasf");
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
    //    document.write("<br>");
    //    return this.stkArr.length == 0;
        if(this.stkArr.length != 0) {
            document.getElementById("content").innerHTML = 
            "The stack is NOT empty. ";
        }
        else {
            document.getElementById("content").innerHTML = 
            "The stack is EMPTY. ";
        }
    }
    // // the size of the stack
    // size() {
    //    document.write("<br>");
    //    return "The size of the stack is : " + this.stkArr.length;
    // }
    // display() {
    //    if (this.stkArr.length !== 0) {
    //       return "The stack elements are : " + this.stkArr + "<br>";
    //    } else {
    //       document.write("The Stack is Empty..! <br>");
    //    }
    // }
    // // empty the stack
    // clear() {
    //    document.write("The stack is cleared..!" + "<br>");
    //    this.stkArr = [];
    // }
 }
 let stack = new Stack();


arr = stack.stkArr;
i = 5;
function pushCreate(){
        if (i >= 5) {i = 5;}
        i--;
        let inputData = document.getElementById("input").value;
        let ele = document.getElementById('dropdown');
        let txt = document.createTextNode(inputData);
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.setAttribute("class", "stack-item");
        td.setAttribute("id", [i+1]);
        td.setAttribute("data-testid", [i+1]);
       
        if (arr.length+1 <= 5){
            td.appendChild(txt);
            tr.appendChild(td);
            ele.appendChild(tr);

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