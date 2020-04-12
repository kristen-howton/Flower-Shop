let nurseryDistributors = []

export const useNurseryDistributors = () => nurseryDistributors.slice()

export const getNurseryDistributors = () => fetch("http://localhost:3000/nurserydistributor")
    .then(response => response.json())
    .then(parsedNurseryDistributors => nurseryDistributors = parsedNurseryDistributors)