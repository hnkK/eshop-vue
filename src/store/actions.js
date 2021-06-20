import axios from 'axios'

export const actions = {
    loadProducts({ commit }) {
        axios
            .get("https://5df6a0ebc1b62e0014e2088c.mockapi.io/products")
            .then(response => {
                this.products = response.data;
                commit("setProducts", this.products)
            }).catch(error => {
                console.log(error)
            });
    },
    fillWallet({ commit }) {
        commit("fillWallet")
    },
    closeOrder({ commit }) {
        commit("closeOrder")
    }
}