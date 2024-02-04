import { createRouter, createWebHashHistory } from "vue-router"
import Home from "./components/Home.vue";
import DescripcionExp from "./components/DescripcionExp.vue"
import Profile from "./components/Profile.vue"

const routes = [
	{
        path:"/",
        component: Home,
        name:"root",
        children: [
            
            {
                path: "/experiencia/:name",
                component: DescripcionExp
            },
            {
                path: "/perfil",
                component: Profile 
            }

        ]
    }
    
];
let router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;