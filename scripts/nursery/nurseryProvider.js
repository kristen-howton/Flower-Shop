let nursery = []

export const useNursery = () => nursery.slice()

export const getNursery = () => fetch("http://localhost:3000/nursery")
    .then(response => response.json())
    .then(parsedNursery => nursery = parsedNursery)