import { useRetailers } from "./RetailProvider.js"
import { useDistributors } from "../distributors/DistributorProvider.js"
import { Retailer } from "./Retailer.js"
import { useNurseryDistributors } from "../nursery/nurseryDistributorProvider.js"
import { useNursery } from "../nursery/nurseryProvider.js"
import { useFlowers } from "../flower/FlowerProvider.js"
import { useNurseryFlowers } from "../nursery/nurseryFlowerProvider.js"

const contentTarget = document.querySelector(".retailerContainer")

const renderRetailers = retailersToRender => {
    const allDistributors = useDistributors()
    const allNurseries = useNursery()
    const allNurseryFlowers = useNurseryFlowers()
    const allFlowers = useFlowers()
    const allNurseryDistributors = useNurseryDistributors()
    contentTarget.innerHTML = retailersToRender.map(
        retailerToRender => {
            const foundDistributor = allDistributors.find(distributor => distributor.id === retailerToRender.distributorId)
            const foundNurseryDistributors = allNurseryDistributors.filter(
                nurseryDistributor => foundDistributor.id === nurseryDistributor.distributorId
            )
            const foundNurseries = foundNurseryDistributors.map(
                nurseryDistributor => {
                    return allNurseries.find(nursery => nurseryDistributor.nurseryId === nursery.id)
                }
            )
            const foundFlowers = foundNurseries.map(
                foundNursery => {
                    const foundNurseryFlowers = allNurseryFlowers.filter(
                        nurseryFlower => foundNursery.id === nurseryFlower.nurseryId
                    )
                    return foundNurseryFlowers.map(
                        foundNurseryFlower => allFlowers.find(flower => foundNurseryFlower.flowerId === flower.id)
                    )
                }
            ).flat()

            return Retailer(retailerToRender, foundDistributor, foundNurseries, foundFlowers)
        }
    ).join("")
}

export const RetailerList = () => {
    const allRetailers = useRetailers()
    renderRetailers(allRetailers)
}