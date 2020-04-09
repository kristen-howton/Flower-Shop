import { getFlowers } from "./flower/FlowerProvider.js"
import { getRetailers } from "./retailers/RetailProvider.js"
import { getDistributors } from "./distributors/DistributorProvider.js"
import { FlowerList } from "./flower/FlowerList.js"
import { RetailerList } from "./retailers/RetailerList.js"


getFlowers()
    .then(getRetailers)
    .then(getDistributors)
    .then(FlowerList)
    .then(RetailerList)
