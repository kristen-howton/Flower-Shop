import { getFlowers } from "./flower/FlowerProvider.js"
import { getRetailers } from "./flower/retailers/RetailProvider.js"
import { getDistributors } from "./DistributorProvider.js"
import { FlowerList } from "./flower/FlowerList.js"
import { RetailerList } from "./flower/retailers/RetailerList.js"
import { RetailerList } from "./retailer/RetailerList.js"

getFlowers()
    .then(getRetailers)
    .then(getDistributors)
    .then(FlowerList)
    .then(RetailerList)

