export const getters = {
    getProductById: (state) => (id) => {
        return state.products.find(product => product.id === id)
    },
    filteredProducts(state) {
        return state.products.filter((product) => {
            return product.name.match(state.searchProduct);
        })
    },
}