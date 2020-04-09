import { useDistributors } from "./DistributorProvider.js"
import { Distributor } from "./Distributor.js"

//DOM reference with a class of distributorContainer
const contentTarget = document.querySelector(".distributorContainer")

const renderDistributors = distributorsToRender => {
    //property on the DOM element, .map is going to transform the data to HTML
    contentTarget.innerHTML = distributorsToRender.map(
        distributorObject => {
            return Distributor(distributorObject)
        }
        //turns the HTML into a single string
    ).join("")
}

export const DistributorList = () => {
    const allDistributors = useDistributors()
    renderDistributors(allDistributors)
}
