let MyResult = document.getElementById("MyResult")

function DeleteMe(){
    MyResult.value = ""
}

function calculator(NewValue){
    MyResult.value += NewValue;
}

function Answer() {
    let a = MyResult.value
    let b = eval(a)
    MyResult.value = b
}