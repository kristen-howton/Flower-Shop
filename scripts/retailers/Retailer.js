export const Retailer = (retailerObject, foundDistributor) => {
    return `
        <article class="retailer">
            <h3>Retailer Name: ${retailerObject.name}</h3>
            <section>Location: ${retailerObject.city}, ${retailerObject.state}</section>
            <section>: ${foundDistributor.name}</section>
            <section>${foundDistributor.city}, ${foundDistributor.state}</section>
        </article>
    `
}
