//assume data to be stored in vector database

const data = [
    {
        text: "cheetah",
        vector: [0.2,0.9]
    },
    {
        text: "falcon",
        vector: [0.25,0.88]
    },
    {
        text: "sailfish",
        vector: [0.3,0.95]
    },
    {
        text: "car",
        vector: [0.9,0.2]
    }
]

//Query vector
const query = {
    vector: [0.26,0.87]
}

//similarity function using dot product
function similarity(v1, v2) {
    return v1[0] * v2[0] + v1[1] * v2[1]
}

const results = data.map(item => {
    return {
        text: item.text,
        score: similarity(item.vector, query.vector)
    }
})

console.log(results)