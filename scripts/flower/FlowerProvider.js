//empty array for flowers
let flowers = []

//storing the array of flowers in a variable
export const useFlowers = () => flowers.slice()

//getting the flowers from the local server
export const getFlowers = () => fetch("http://localhost:3000/flowers")
    //turns the response into JavaScript
    .then(response => response.json())
    .then(parsedFlowers => flowers = parsedFlowers)