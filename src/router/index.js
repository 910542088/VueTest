import Vue from 'vue'
import VueRouter from 'vue-router'
import {nextDate} from "element-ui/src/utils/date-util";

//采用这种懒加载方式方便管理
const Login = () => import('../views/Login')
const BlogDetail = () => import('../views/BlogDetail')
const BlogEdit = () => import('../views/BlogEdit')
const route_multi = () => import('../views/route-multi')
const news = () => import('../views/route-first')
const message = () => import('../views/route-second')
//使用插件
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        //重定向
        redirect: '/route/message'
    },
    {
        path: '/route',
        component: route_multi,
        //对原始数据的说明
        meta:{
            title: 'route'
        },
        children:[
            {
                path: '/',
                redirect: 'message',
            },
            {
                path: 'message',
                component: message,
                //route的守卫函数，相当于拦截器，对其进行增强操作
                beforeEnter: (to,from,next) => {
                    //在页面加载之前做一些处理
                    alert('Welcome~~~')
                    next()
                }
            },
            {
                path: 'news',
                component: news,
            }
        ]
    },
    {
        path: '/blogs',
        //路由的懒加载（用到的时候才去加载），这种不方便管理
        component: () => import('../views/Blogs'),
        meta:{
            title: 'blogs'
        }
    },
    {
        path: '/login/:id',
        component: Login,
        meta:{
            title: 'login'
        },
    },
    {
        path: '/login',
        component: Login,
        meta:{
            title: 'login'
        },
    },
    {
        path: '/BlogEdit',
        component: BlogEdit,
        meta:{
            title: 'edit'
        },
    },
    {
        path: '/BlogDetail',
        component: BlogDetail,
        meta:{
            title: 'detail'
        },
    }
]


const router = new VueRouter({
    //默认使用的是location.hash模式
    mode: 'history',
    base: process.env.BASE_URL,
    //配置路由与组件之间的关系
    routes,
    //设置路由active时的class样式名称
    linkActiveClass: 'active'
})

//前置守卫，跳转界面的时候对标题进行修改
router.beforeEach((to,from,next) => {
    // console.log(to);
    document.title = to.matched[0].meta.title;
    next()
})
//当然还有后置钩子函数，对页面跳转完毕后进行操作
// router.afterEach(((to, from) => {
//     console.log('我是后置函数');
// }))


//传入Vue对象中
export default router
