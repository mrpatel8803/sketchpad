let gridrow = document.getElementById("grid-row");
let gridcol = document.getElementById("grid-col");
let creategridbtn = document.getElementById("creategrid-btn");
let container = document.querySelector(".container");
let table = document.getElementById("table");
let hide = document.getElementById("hide");
let show = document.getElementById("show");
let reset = document.getElementById("reset");
let color = document.getElementById("color");
let eraser = document.getElementById("eraser");
let check = true;
function Creategrid()
{
    container.innerHTML=" ";
    for(let i = 0;i < gridrow.value; i ++)
    {
        let tr = table.insertRow(i);

        for(j = 0; j < gridcol.value; j++ )
        {
            let td = tr.insertCell(j);
            td.classList.add("tablecell");
            
            container.appendChild(table);
            condition();
        }
    }
    Hide();
    Show();
}

eraser.addEventListener("click", () => {
    if (eraser.value == "ON") {
        check = false;
        arrayOfColor = [];
        let tablecell = document.querySelectorAll('.tablecell');
        for (let erase = 0; erase < tablecell.length; erase++) {
            tablecell[erase].addEventListener('mouseover', () => tablecell[erase].style.background = "white");
        }
        eraser.value = "OFF";
    }
    else if (eraser.value == "OFF") {
        eraser.value = "ON";
        check = true;
        condition();
    }
});

function condition() {
    check = true;
    if (!color == "") {
        let tablecell = document.querySelectorAll('.tablecell');
        for (let stat = 0; stat < tablecell.length; stat++) {
            tablecell[stat].addEventListener('mouseover', () => { onover(tablecell, stat, check) });
        }
    }
}

let arrayOfColor = [];

function onover(arr, num, check) {
    if (check) {
        if (arrayOfColor.length <= 10) {
            arr[num].style.background = color.value;
            arrayOfColor.push(num);
            console.log(arrayOfColor + " Length :" + arrayOfColor.length)
            if (arrayOfColor.length > 10) {
                let GoOutEle = arrayOfColor.shift();
                arr[GoOutEle].style.background = "black";
                arr[num].style.background = color.value;
            }
        }
    }

}

function Hide()
{
    hide.style.display = "none";
}

function Show()
{
    eraser.style.display = "block";
    color.style.display = "block";
    reset.style.display = "block";
    show.style.display = "block";
}
container.addEventListener("mouseleave" ,() => {
    arrayOfColor = [];
    console.log("out");
});