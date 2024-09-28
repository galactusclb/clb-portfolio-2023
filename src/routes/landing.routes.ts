import Home from "@pages/landing/Home"


const routes = [
    {
        path: "/",
        redirectTo: "/home"
    },
    // {
    //     path: "*",
    //     redirectTo: "/notices"
    // },
    {
        path: "/home",
        component: Home
    },
]

export default routes
