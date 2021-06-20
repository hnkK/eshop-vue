export const mutations = {
    disConnected(state) {
        state.isConnected = false
    },
    setProducts(state, products) {
        state.products = products
    },
    fillWallet(state) {
        if (state.wallet < 500) {
            state.wallet += 50
            state.warning = ""
        } else {
            state.warning = "Limite de solde atteinte"
        }
    },
    closeOrder(state) {
        state.basket = []
    },

    /* Sort products array, by prices from lowest to highest and alphabetical orders */
    sortByLowestPrice(state) {
        state.products.sort(function (a, b) { return a.price - b.price })
    },
    sortByHighestPrice(state) {
        state.products.sort(function (a, b) { return b.price - a.price })
    },
    sortByNameAlpha(state) {
        state.products.sort(function (a, b) { return ((a.name < b.name) ? -1 : ((a.name > b.name) ? 1 : 0)); })
    },
    sortByNameInv(state) {
        state.products.sort(function (a, b) { return ((a.name > b.name) ? -1 : ((a.name < b.name) ? 1 : 0)); })
    },
    isUserConnected(state) {
        state.isConnected = true
    }
}