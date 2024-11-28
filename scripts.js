let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("button-new");
let restartBtn = document.getElementById("restart");
let refMessage = document.getElementById("message");

//writtng the parten array

let winingPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6]
]
//play x is play first
let xTurn = true;
let count = 0;
//display x/0;

//disable all btn
const disableButton = () => {
    btnRef.forEach((element) => (element.disabled = true));
    //enable popup
    popupRef.classList.remove("hide");
}


const enableButton = () => {
    btnRef.forEach((element) => {
        element.innerText = "";
        element.disabled = "";
    });
    popupRef.classList.add("hide");

}
newgameBtn.addEventListener("click", () => {
    count = 0;
    enableButton();
});

restartBtn.addEventListener("click", () => {
    count = 0;
    enableButton();
});

//enable all btn
const winFunction = (letter) => {
    disableButton();
    if (letter == "X") {
        refMessage.innerHTML = "&#x1F389; <br/>  'x' wins";

    }
    else {
        refMessage.innerHTML = "&#x1F389; <br/>  'o' wins"
    }
};

const drawFunction = () => {
    disableButton();
    refMessage.innerHTML = "&#x1F60F; <br/> it's draw"
}

//win cheacker pointer
const winChecker = () => {
    for (let i of winingPattern) {
        let [element1, element2, element3] = [
            btnRef[i[0]].innerText,
            btnRef[i[1]].innerText,
            btnRef[i[2]].innerText
        ]
        //check if the element filled
        //if 3 element are same would give winner part element
        if (element1 != "" && element2 != "" && element3 != "") {
            if (element1 == element2 && element2 == element3)
                //if 3 element same valuse to diplay the winfuntion
                winFunction()

        }
    }

}


btnRef.forEach((element) => {
    element.addEventListener("click", () => {
        if (xTurn) {
            xTurn = false;
            element.innerText = "X";
            element.disabled = true;

        }
        else {
            xTurn = true;
            element.innerText = "0";
            element.disabled = true;

        }
        //increment count on every clcik
        count += 1
        if (count == 9) {
            //it's draw since click on 9 boxes
            drawFunction();

        }
        //winner boundry
        winChecker();

    })
});
window.onload = enableButton;
