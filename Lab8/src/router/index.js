import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import BlogList from '../views/BlogList.vue'
import BlogPost from '../views/BlogPost.vue'
import UserProfile from '../views/UserProfile.vue'
import UserProfileInfo from '../views/UserProfileInfo.vue'
import UserProfileSettings from '../views/UserProfileSettings.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'

const routes = [
    { 
        path: '/', 
        name: 'Home', 
        component: Home 
    },
    { 
        path: '/blog', 
        name: 'BlogList', 
        component: BlogList 
    },
    { 
        path: '/blog/:id', 
        name: 'BlogPost', 
        component: BlogPost 
    },
    { 
        path: '/profile', 
        name: 'UserProfile', 
        component: UserProfile,
        alias: '/me',
        children: [
            {
                path: 'info',
                name: 'UserProfileInfo',
                component: UserProfileInfo
            },
            {
                path: 'settings',
                name: 'UserProfileSettings',
                component: UserProfileSettings
            }
        ]
    },
    { 
        path: '/login', 
        name: 'Login', 
        component: Login 
    },
    { 
        path: '/dashboard', 
        name: 'Dashboard', 
        component: Dashboard,
        meta: { requiresAuth: true }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    
    if (to.matched.some((record) => record.meta.requiresAuth) && !isAuthenticated) {
        alert('Bạn cần đăng nhập để truy cập trang này!');
        next({ name: 'Login' }); 
    } else {
        next(); 
    }
});

export default router