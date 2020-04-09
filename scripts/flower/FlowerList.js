import { useFlowers } from "./FlowerProvider.js";
import { Flower } from "./Flower.js";

//DOM reference with a class of flowerContainer
const contentTarget = document.querySelector(".flowerContainer")

const renderFlowers = (flowersToRender) => {
    /*
        adding a property to the DOM to insert the HTML
        .map transforms the data to HTML and iterates over each flower object
    */
    contentTarget.innerHTML = flowersToRender.map(
        flowerObject => {
            return Flower(flowerObject)
        }
    ).join("")
}

export const FlowerList = () => {
    const allFlowers = useFlowers()
    renderFlowers(allFlowers)
}
