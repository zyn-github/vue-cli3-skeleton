import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue"
Vue.use(Router);

export default new Router({
    mode: "history",
    scrollBehavior(to) {
        if (to.path === "/article" || to.path === "/ranking") {
            return { x: 0, y: 0 };
        }
    },
    routes: [{
            path: "/",
            name: "首页",
            component: Home,
            meta: {
                index: 1,
                keepAlive: true
            }
        },
        {
            path: "/index",
            name: "首页",
            component: Home,
            meta: {
                index: 1,
                keepAlive: true
            }
        }, {
            path: "/search",
            name: "search",
            component: () =>
                import ("../views/Search.vue"),
            meta: {
                index: 2,
                keepAlive: false
            }
        },
        {
            path: "/ranking",
            name: "ranking",
            component: () =>
                import ("../views/Ranking.vue"),
            meta: {
                index: 3,
                keepAlive: true
            }
        },
        {
            path: "/detail/:id",
            name: "detail",
            component: () =>
                import ("../views/Detail.vue"),
            meta: {
                index: 4,
                keepAlive: true
            }
        },
        {
            path: "/chapter",
            name: "chapter",
            component: () =>
                import ("../views/Chapter.vue"),
            meta: {
                index: 5,
                keepAlive: true
            }
        },
        {
            path: "/article",
            name: "article",
            component: () =>
                import ("../views/Article.vue"),
            meta: {
                index: 6,
                keepAlive: false
            }
        },
        {
            path: '*',
            redirect: '/index'
        },
    ]
});