// set initial count
let count = 0;

// select value and buttons 
const value = document.querySelector("#value"); //este selecciona el nûmero 0 cero
const btns = document.querySelectorAll(".btn"); // all the buttons with .btn

btns.forEach(function(button) {
    button.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;

        // if (styles.contains("decrease")) {
        //     count--;
        // } else if (styles.contains("reset")) {
        //     count = 0;
        // } else {
        //     count++;
        // }

        // to set up the buttons
        if (styles.contains("decrease")) {
            count--;
        }
        if (styles.contains("reset")) {
            count = 0;
        }
        if (styles.contains("increase")) {
            count++;
        }
        // to change the color
        if (count < 0) {
           value.style.color = "red";
        }
        if (count > 0) {
            value.style.color = "green";
        }
        if (count === 0) {
            value.style.color = "#102a42";
        }

        value.textContent = count;

    });
});