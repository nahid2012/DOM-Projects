const DragArea = document.getElementsByClassName("container")[0],
DragText = DragArea.querySelector("h3"),
btn = DragArea.querySelector("button"),
input = DragArea.querySelector("input");

let MyFile

btn.onclick = () => {
    input.click()
}

input.addEventListener("change", function(){
    MyFile = this.files[0]
    DragArea.classList.add("active")
    show()
})

DragArea.addEventListener("dragover", (e)=> {
    e.preventDefault()
    DragArea.classList.add("active")

    DragText.textContent = "Release to Upload File"
})

DragArea.addEventListener("dragleave", () => {
    DragArea.classList.remove("active")
    DragText.textContent = "Drag & Drop"
})

DragArea.addEventListener("drop", (e) => {
    e.preventDefault()
    MyFile = e.dataTransfer.files[0]
    show()
})

function show () {
    let filetype = MyFile.type
    let valid = ["image/jpeg", "image/jpg", "image/png"]

    if(valid.includes(filetype)) {
        let filereturn = new FileReader()
        filereturn.onload = () => {
            let imgurl = filereturn.result
            let img = `<img src="${imgurl}" alt=""></img>`

            DragArea.innerHTML = img
        }
        filereturn.readAsDataURL(MyFile)
    } else {
        alert("Give a valid Image format")
        DragArea.classList.remove("active")
        DragArea.textContent("Drag & Drop")
    }
}