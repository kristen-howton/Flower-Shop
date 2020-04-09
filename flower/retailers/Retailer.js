export const Retailer = (retailerObject, foundDistributor) => {
    return `
        <section class="retailer">
            <h3>Retailer Name: ${retailerObject.name}</h3>
            <article>Location: ${retailerObject.city}, ${retailerObject.state}</article>
            <section>: ${foundDistributor.name} in ${foundDistributor.city}, ${foundDistributor.state}</section>
    `
}
