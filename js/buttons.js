import {buttons} from "./variables";

if ((!buttons == undefined || null) || !buttons.length == 0)  {
    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            let x = e.clientX - button.offsetLeft;
            let y = e.clientY - button.offsetTop;

            let span = document.createElement("span");
            span.style.left = `${x}px`;
            span.style.top = `${y}px`;

            let rippleDuration =  parseInt(getComputedStyle(button).getPropertyValue("--rippleDuration"));

            // console.trace(button)
            button.style.cssText += `--width: ${button.getBoundingClientRect().width}px;`;
            button.appendChild(span)

            setTimeout(() => {
                span.remove()
            }, rippleDuration)
        })
    })
}