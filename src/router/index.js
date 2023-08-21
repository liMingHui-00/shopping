import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/layout";
import Home from "@/views/layout/home";
import Category from "@/views/layout/category";
import Cart from "@/views/layout/cart";
import User from "@/views/layout/user";
import Search from "@/views/search";
import SearchList from "@/views/search/list";
import ProDetail from "@/views/prodetail";
import Login from "@/views/login";
import Pay from "@/views/pay";
import MyOrder from "@/views/myorder";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/",
    component: Layout,
    redirect: "home",
    children: [
      {
        path: "/user",
        component: User,
      },
      {
        path: "/category",
        component: Category,
      },
      {
        path: "/cart",
        component: Cart,
      },
      {
        path: "/home",
        component: Home,
      },
    ],
  },
  {
    path: "/search",
    component: Search,
  },
  {
    path: "/searchlist",
    component: SearchList,
  },
  // 动态路由传参
  {
    path: "/prodetail/:id",
    component: ProDetail,
  },
  {
    path: "/pay",
    component: Pay,
  },
  {
    path: "/myorder",
    component: MyOrder,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
