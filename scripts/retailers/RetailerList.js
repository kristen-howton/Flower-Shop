
import { useRetailers } from "./RetailProvider.js"
import { useDistributors } from "../distributor/DistributorProvider.js"
import { Retailer } from "./Retailer.js"

const contentTarget = document.querySelector(".retailerContainer")

const renderRetailers = (retailersToRender) => {
    const allDistributors = useDistributors()
    contentTarget.innerHTML = retailersToRender.map(
        (retailerObject) => {
            const foundDistributor = allDistributors.find (distributor => distributor.id === retailerObject.distributorId)
            return Retailer(retailerObject, foundDistributor)
        }
    ).join("")
}

export const RetailerList = () => {
    const allRetailers = useRetailers()
    renderRetailers(allRetailers)
}