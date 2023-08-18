export const setFilter = derpartment => {
    return {
        type: "SET_FILTER",
        filter: derpartment
    }
}
export const clearFilter = () => {
    return {
        type: "CLEAR_FILTER",
    }
}