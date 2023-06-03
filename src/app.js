
// import { guigen } from "../guigen.main.js";

import { Container, Text } from "./components/guigen.components.js";

const body = document.body;

const myContainer = new Container(200, 100, 0, 0, "red");
myContainer.render(body);


myContainer.hover({
    containerColor: "cyan"
})

let namee = "hello world";

const name = new Text(namee,30,200,200,"arial","green");
name.render(myContainer.container);
name.unit("em")

myContainer.container.addEventListener("click", function() {
    myContainer.set({
        containerColor: "blue",
        containerWidth: "10",
        containerHeight: "10"
    });
    namee = "hello container";
    name.update();
});







