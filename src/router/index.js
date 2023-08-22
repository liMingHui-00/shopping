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
import store from "@/store/index";

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
// 全局前置导航守卫
// 把需要拦截的页面存储到数组中
const authUrl = ["/pay", "/myorder"];
router.beforeEach((to, from, next) => {
  // 获取token
  const token = store.state.user.userInfo.token;
  if (!authUrl.includes(to.path)) {
    // 去的页面不需要权限验证  放行
    next();
    return;
  }
  // 去的页面需要权限验证
  if (token) {
    next();
  } else {
    // 没有token 直接去登录
    next("/login");
  }
});

export default router;
