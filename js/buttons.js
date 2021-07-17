import { buttons } from "./variables";
import * as Color from "color";

// console.log(Color)

buttons.forEach(button => {
    if (button.classList.contains("outline")) {
        let bg_color = getComputedStyle(button).getPropertyValue("background-color");

        button.style.cssText += `
            background-color: transparent;
            color: ${bg_color};
            border: 1px solid ${bg_color};
            --rippleColor: ${Color(bg_color).alpha(0.3).string()};
        `;
    }
})