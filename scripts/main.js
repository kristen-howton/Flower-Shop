import { getFlowers } from "./flower/FlowerProvider.js"
import { getRetailers } from "./retailers/RetailProvider.js"
import { getDistributors } from "./distributors/DistributorProvider.js"
import { FlowerList } from "./flower/FlowerList.js"
import { RetailerList } from "./retailers/RetailerList.js"
import { getNursery } from "./nursery/nurseryProvider.js"
import { getNurseryDistributors } from "./nursery/nurseryDistributorProvider.js"
import { getNurseryFlowers } from "./nursery/nurseryFlowerProvider.js"


getFlowers()
    .then(getRetailers)
    .then(getNursery)
    .then(getNurseryDistributors)
    .then(getNurseryFlowers)
    .then(getDistributors)
    .then(FlowerList)
    .then(RetailerList)
