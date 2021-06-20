import Login from "../components/Login"
import Summary from "../components/Summary"
import Product from "../components/Product"
import ListingProducts from "../components/ListingProducts"
import ThankYou from "../components/ThankYou"



export const routes = [

    { path: "/", name: "login", component: Login },
    {
        path: "/our_products",
        name: "homepage",
        component: ListingProducts,
    },

    { path: "/our_products/:id", name: "product", component: Product },
    {
        path: "/summary", name: "summary", component: Summary,
        beforeEnter: (to, from, next) => {
            (localStorage.isLogged === "true") ? next() : next({ path: "/our_products" })
        }
    },
    { path: "/thankyou", name: "thankyou", component: ThankYou,
        beforeEnter: (to, from, next) => {
            (localStorage.orderDone === "true") ? next() : next({ path: "/our_products" })
        }
    },
    { path: "/*", redirect: "/" },
]