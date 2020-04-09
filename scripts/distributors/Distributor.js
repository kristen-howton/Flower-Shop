//HTML representation of a Distributor
export const Distributor = distributorObject => {
    return `
        <article class="distributor">
            <h3>Distributor Name: ${distributorObject.name}</h3>
            <section>Location: ${distributorObject.city}, ${distributorObject.state}</section>
        </article>
    `
}