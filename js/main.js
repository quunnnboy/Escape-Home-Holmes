startGameButton = document.getElementById("start-button");

startGameButton.addEventListener("click", () =>{
    room1Left();
});

function room1Left() {
    document.body.classList.add("room1left");
    document.body.classList.remove("room1right");
    document.body.classList.remove("room2desk");
    document.body.classList.remove("roomexitclosed");

    document.body.innerHTML = `
    <main>
        <div class="container">
            <img id="arrow-down-r1l" class="arrow-down" src="./images/arrow-down.png" alt="">
            <img id="arrow-left-r1l" class="arrow-left" src="./images/arrow-left.png" alt="">
            <img id="arrow-right-r1l" class="arrow-right" src="./images/arrow-right.png" alt="">

            <img id="note" class="note" src="./images/paper-scrible.png" alt="">
        </div>

        <div id="result-modal" class="modal-backdrop">
			<article class="modal">
				<img src="./images/arrow-back.png" id="arrow-close" class="arrow-close"></img>
                <img src="./images/paper-code.png" alt="">
			</article>
		</div>
    </main>
    <script src="js/main.js"></script>
    `

    const noteButton = document.getElementById("note");

    arrowLeftButtonRoom1Left = document.getElementById("arrow-left-r1l");
    arrowRightButtonRoom1Left = document.getElementById("arrow-right-r1l");
    arrowDownButtonRoom1Left = document.getElementById("arrow-down-r1l");

    modal = document.getElementById("result-modal");

    modalClose = document.getElementById("arrow-close");
    modalClose.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    noteButton.addEventListener("click", () =>{
        modal.classList.add("active");
    });

    arrowRightButtonRoom1Left.addEventListener("click", () =>{
        room1Right();
    });

    arrowLeftButtonRoom1Left.addEventListener("click", () =>{
        roomExit();
    });

    arrowDownButtonRoom1Left.addEventListener("click", () =>{
        room2Desk();
    });
};

function room1Right() {
    document.body.classList.add("room1right");
    
    document.body.innerHTML = `
    <main>
        <div class="container">
            <img id="arrow-down-r1r" class="arrow-down" src="./images/arrow-down.png" alt="">
            <img id="arrow-left-r1r" class="arrow-left" src="./images/arrow-left.png" alt="">
        </div>
    </main>
    <script src="js/main.js"></script>
    `

    arrowLeftButtonRoom1Right = document.getElementById("arrow-left-r1r");
    arrowDownButtonRoom1Right = document.getElementById("arrow-down-r1r");

    arrowLeftButtonRoom1Right.addEventListener("click", () =>{
        room1Left();
    });

    arrowDownButtonRoom1Right.addEventListener("click", () =>{
        room2Desk();
    });

};

function room2Desk() {
    document.body.classList.add("room2desk");

    document.body.innerHTML= `
    <main>
        <div class="container">
            <img id="arrow-down-r2" class="arrow-down" src="./images/arrow-down.png" alt="">

            <img id="laptop" class="laptop" src="./images/Laptop.png" alt="">
        </div>

        <div id="result-modal-R2" class="modal-backdrop">
			<article class="modal-laptop">
				<div class="computer-border">
                    <div class="computer-screen">
                        <h2 class="title-computer">Enter Password</h2>
                        <div class="input-button">
                            <input class="input-field" type="text" placeholder="Enter secret password">
                            <button class="button-password">Enter</button>
                        </div>
                    </div>
                </div>
				<img src="./images/arrow-back.png" id="arrow-close-R2" class="arrow-close-r2"></img>
			</article>
		</div>
    </main>
    <script src="js/main.js"></script>
    `
    arrowDownButtonRoom2 = document.getElementById("arrow-down-r2");
    arrowDownButtonRoom2.addEventListener("click", () =>{
        room1Left();
    });

    modal = document.getElementById("result-modal-R2");
    modalClose = document.getElementById("arrow-close-R2");
    modalClose.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    laptopElement = document.getElementById("laptop")
    laptopElement.addEventListener("click", () =>{
        modal.classList.add("active");
    });
    

    const laptopCode = "0546"
    let codeInputElement = document.querySelector(".input-field");
    const buttonElement = document.querySelector(".button-password")
    const titleScreen = document.querySelector(".title-computer")
    buttonElement.addEventListener("click", () => {
        if (codeInputElement.value == laptopCode) {
            nextscreen() 
        } else {
            titleScreen.textContent = "Wrong Password!"
            titleScreen.classList.add("error")
            setTimeout(() => {
                titleScreen.classList.remove("error")
                titleScreen.textContent = "Enter Password"
            }, 2000)
        } 
    });

    function nextscreen(){
        document.querySelector(".computer-screen").innerHTML = `
            <h2 class="title-computer">logging in</h2>
            `
        setTimeout(() => {
            document.querySelector(".computer-screen").innerHTML = `
            <h2 class="title-computer">logging in.</h2>
            `
        }, 1000);
        setTimeout(() => {
            document.querySelector(".computer-screen").innerHTML = `
            <h2 class="title-computer">logging in..</h2>
            `
        }, 2000);
        setTimeout(() => {
            document.querySelector(".computer-screen").innerHTML = `
            <h2 class="title-computer">logging in...</h2>
            `
        }, 3000);
        setTimeout(() => {
            document.querySelector(".computer-screen").innerHTML = `
            <h2 class="title-computer">Welcome back Mr. Holmes</h2>
            `
        }, 4000);
        setTimeout(() => {
            document.querySelector(".computer-screen").innerHTML = `
            <h2 class="title-computer">How to exit?</h2>
            <p class="info-text-exit">The code for the exit is 1803</p>
            <p class="info-text-exit">Also, pull the right switches (hint: look on some painting)</p>
            `
        }, 5000);
    }
};

function roomExit() {
    document.body.classList.add("roomexitclosed");

    document.body.innerHTML= `
    <main>
        <div class="container">
            <img id="keypad-image" class="keypad-image" src="./images/Keypad.png" alt="">
            <img id="arrow-right-rex" class="arrow-right" src="./images/arrow-right.png" alt="">
        </div>


        <div id="result-modal-keypad" class="modal-backdrop">
			<article class="modal-keypad">
				<div class="keypad-border">
                    <div class="keypad-light">
                        <div id="red-light" class="red-light"></div>
                        <div id="green-light" class="green-light"></div>
                    </div>
                    <div class="keypad-screen">
                        ....
                    </div>
                    <div class="keypad-buttons">
                        <div class="keyrow">
                            <button id="b1" class="bkey">1</button>
                            <button id="b2" class="bkey">2</button>
                            <button id="b3" class="bkey">3</button>
                        </div>
                        <div class="keyrow">
                            <button id="b4" class="bkey">4</button>
                            <button id="b5" class="bkey">5</button>
                            <button id="b6" class="bkey">6</button>
                        </div>
                        <div class="keyrow">
                            <button id="b7" class="bkey">7</button>
                            <button id="b8" class="bkey">8</button>
                            <button id="b9" class="bkey">9</button>
                        </div>
                        <div class="keyrow">
                            <button id="b0" class="bkey">0</button>
                            <button id="button-enter" class="button-enter">Enter</button>
                        </div>
                    </div>
                </div>

                <div class="switch-border">
                    <div id="green-light2" class="green-light"></div>
                    <div class="row">
                        <label id="switch1" class="switch">
                            <input type="checkbox">
                            <span class="slider"></span>
                        </label>
                        <label id="switch2" class="switch">
                            <input type="checkbox">
                            <span class="slider"></span>
                        </label>
                        <label id="switch3" class="switch">
                            <input type="checkbox">
                            <span class="slider"></span>
                        </label>
                        <label id="switch4" class="switch">
                            <input type="checkbox">
                            <span class="slider"></span>
                        </label>
                    </div>
                    <div class="row">
                        <label id="switch5" class="switch">
                            <input type="checkbox">
                            <span class="slider"></span>
                        </label>
                        <label id="switch6" class="switch">
                            <input type="checkbox">
                            <span class="slider"></span>
                        </label>
                        <label id="switch7" class="switch">
                            <input type="checkbox">
                            <span class="slider"></span>
                        </label>
                        <label id="switch8" class="switch">
                            <input type="checkbox">
                            <span class="slider"></span>
                        </label>
                    </div>
                </div>
				<img src="./images/arrow-back.png" id="arrow-close-rex" class="arrow-close-rex"></img>
			</article>
		</div>
    </main>
    <script src="js/main.js"></script>
    `

    arrowRightButtonRoomExit = document.getElementById("arrow-right-rex");

    arrowRightButtonRoomExit.addEventListener("click", () =>{
        room1Left();
    });

    modalKeypad = document.getElementById("result-modal-keypad");

    modalClose = document.getElementById("arrow-close-rex");
    modalClose.addEventListener("click", () => {
        modalKeypad.classList.remove("active");
    });

    keypad = document.getElementById("keypad-image")
    keypad.addEventListener("click", () =>{
        modalKeypad.classList.add("active");
    });

    keypadInput = document.querySelector(".keypad-screen");
    keypadInput.textContent = " "

    b0 = document.getElementById("b0");
    b1 = document.getElementById("b1");
    b2 = document.getElementById("b2");
    b3 = document.getElementById("b3");
    b4 = document.getElementById("b4");
    b5 = document.getElementById("b5");
    b6 = document.getElementById("b6");
    b7 = document.getElementById("b7");
    b8 = document.getElementById("b8");
    b9 = document.getElementById("b9");
    buttonEnter = document.getElementById("button-enter");

    b1.addEventListener("click", () =>{
        keypadInput.textContent = keypadInput.textContent + "1"
    });

    b2.addEventListener("click", () =>{
        keypadInput.textContent = keypadInput.textContent + "2"
    });

    b3.addEventListener("click", () =>{
        keypadInput.textContent = keypadInput.textContent + "3"
    });

    b4.addEventListener("click", () =>{
        keypadInput.textContent = keypadInput.textContent + "4"
    });

    b5.addEventListener("click", () =>{
        keypadInput.textContent = keypadInput.textContent + "5"
    });

    b6.addEventListener("click", () =>{
        keypadInput.textContent = keypadInput.textContent + "6"
    });

    b7.addEventListener("click", () =>{
        keypadInput.textContent = keypadInput.textContent + "7"
    });

    b8.addEventListener("click", () =>{
        keypadInput.textContent = keypadInput.textContent + "8"
    });

    b9.addEventListener("click", () =>{
        keypadInput.textContent = keypadInput.textContent + "9"
    });

    b0.addEventListener("click", () =>{
        keypadInput.textContent = keypadInput.textContent + "0"
    });

    document.addEventListener("keydown", (event) => { 
        if (event.key === "0") { 
            keypadInput.textContent += "0"; 
        } 
        else if (event.key === "1") { 
            keypadInput.textContent += "1"; 
        } 
        else if (event.key === "2") { 
            keypadInput.textContent += "2"; 
        } 
        else if (event.key === "3") { 
            keypadInput.textContent += "3"; 
        } 
        else if (event.key === "4") { 
            keypadInput.textContent += "4"; 
        } 
        else if (event.key === "5") { 
            keypadInput.textContent += "5"; 
        } 
        else if (event.key === "6") { 
            keypadInput.textContent += "6"; 
        } 
        else if (event.key === "7") { 
            keypadInput.textContent += "7"; 
        } 
        else if (event.key === "8") { 
            keypadInput.textContent += "8"; 
        } 
        else if (event.key === "9") { 
            keypadInput.textContent += "9"; 
        } 
    });
    

    greenLight = document.getElementById("green-light");
    redLight = document.getElementById("red-light");

    controlKeypad = 0
    controlSwitches = 0

    buttonEnter.addEventListener("click", () =>{
        if (keypadInput.textContent == 1803){
            greenLight.classList.add("active");
            keypadInput.textContent = "Correct"
            controlKeypad = 1
        } else{
            redLight.classList.add("active");
            keypadInput.textContent = "Wrong"
            setTimeout(() => {
                redLight.classList.remove("active");
                keypadInput.textContent = " "
            }, 1000)
        }
    });

    // Hier heb ik wat gpt voor moeten gebruiken Omdat ik maar niet de checked vallue heb kunnen inlezen.
    // De reden dat dit niet gelukt is was omdat ik "#switch1" deed idp van "#switch1 input".

    let switch1 = document.querySelector("#switch1 input");
    let switch2 = document.querySelector("#switch2 input");
    let switch3 = document.querySelector("#switch3 input");
    let switch4 = document.querySelector("#switch4 input");
    let switch5 = document.querySelector("#switch5 input");
    let switch6 = document.querySelector("#switch6 input");
    let switch7 = document.querySelector("#switch7 input");
    let switch8 = document.querySelector("#switch8 input");

    greenLight2 = document.getElementById("green-light2");

    setInterval(() => {
        if (
            switch2.checked && 
            switch5.checked && 
            switch7.checked && 
            switch8.checked && 
            !switch1.checked &&
            !switch3.checked &&
            !switch4.checked &&
            !switch6.checked
        ) {
            greenLight2.classList.add("active");
            controlSwitches = 1
        }
    }, 100);

    let loopStop = 1;

    let checkConditions = setInterval(() => {
        if (loopStop === 1 && controlKeypad === 1 && controlSwitches === 1) {
            roomExitOpen();
            modalKeypad.classList.remove("active");

            clearInterval(checkConditions);
            loopStop = 0;
        }
    }, 500);
};

function roomExitOpen() {
    document.body.classList.remove("roomexitclosed");
    document.body.classList.add("roomexitopen");

    document.body.innerHTML = `
    <main>
        <div id="container" class="container">
            <img id="keypad-image" class="keypad-image" src="./images/Keypad.png" alt="">
        </div>
    </main>
    `;

    clickDoor = document.getElementById("container");
    
    clickDoor.addEventListener("click", () =>{
        doneScreen()
    });

}


function doneScreen() {
    document.body.classList.remove("roomexitopen");
    document.body.classList.remove("room1left");

    document.body.innerHTML= `
    <main>
        <section id="outro-screen" class="outro-screen">
            <h1 id="outro-titel" class="outro-titel">Congrats, you've escaped!!!</h1>
            <p class="explain-text">
                Holmes and Watson were the only ones who were capable of doing this. You are an excellent detective!
            </p>
            <button id="reset-button" class="big-button">Restart Game</button>
        </section>
    </main>
    <script src="js/main.js"></script>
    `

    resetButton = document.getElementById("reset-button");
    resetButton.addEventListener("click", () =>{
        location.reload();
    });
}