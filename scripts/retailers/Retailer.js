export const Retailer = (retailerObject, foundDistributor, foundNurseries, foundFlowers) => {
    return `
        <article class="retailer">
            <h3>Retailer Name: ${retailerObject.name}</h3>
            <section>Location: ${retailerObject.city}, ${retailerObject.state}</section>
            <section>${foundDistributor.name}</section>
            <section>${foundDistributor.city}, ${foundDistributor.state}</section>
            <section><p>Nursery List: </p>
                <ul>
                    ${foundNurseries.map(foundNursery => `<li>${foundNursery.name}</li>`).join("")}
                </ul>
            </section>
            <section><p>Flower List: </p>
                <ul>
                    ${foundFlowers.map(foundFlower => `<li>${foundFlower.name}</li>`).join("")}
                </ul>
            </section>
        </article>
    `
}
