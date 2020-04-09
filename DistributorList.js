import { Distributor } from "./scripts/distributors/Distributor.js";
import { useDistributors } from "./scripts/distributors/DistributorProvider.js";

const contentTarget = document.querySelector(".distributorContainer")

const renderDistributors = (distributorsToRender) => {
    contentTarget.innerHTML = distributorsToRender.map(
        (distributorObject) => {
            return Distributor(distributorObject)
        }
    ).join("")
}

export const DistributorList = () => {
    const allDistributors = useDistributors()
    renderDistributors(allDistributors)
}
