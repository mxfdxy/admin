import userManage from './page/user/manage.vue'
import user from './page/user/index.vue'
import userVip from './page/user/vip.vue'
import userIntegral from './page/user/integral.vue'
import userCard from './page/user/card.vue'

import course from './page/course/index.vue'
import courseCategory from './page/course/category.vue'
import courseManage from './page/course/manage.vue'
import coursePayment from './page/course/payment.vue'
import courseComment from './page/course/comment.vue'
import courseRecommend from './page/course/recommend.vue'

import revenue from './page/revenue/index.vue'
import revenueManage from './page/revenue/manage.vue'
import revenueTrade from './page/revenue/trade.vue'
//import revenueFinance from './page/revenue/finance.vue'
import revenueCourse from './page/revenue/course.vue'
import revenueTeacher from './page/revenue/teacher.vue'

import oam from './page/oam/index.vue'
import oamMessage from './page/oam/message.vue'
import oamPage from './page/oam/page.vue'
import oamDiscussion from './page/oam/discussion.vue'
import oamData from './page/oam/data.vue'
import oamCrontab from './page/oam/crontab.vue'

import setting from './page/setting/index.vue'
import settingRole from './page/setting/role.vue'
import settingPayment from './page/setting/payment.vue'
import settingSystem from './page/setting/payment.vue'

export default [
    {
        path: '',
        component: user,
        children: [{
                path: '',
                component: userManage
            }]
    },
    {
        path: '/user',
        component: user,
        children: [
            {
                path: '',
                component: userManage
            },
            {
                path: 'vip',
                component: userVip
            },
            {
                path: 'integral',
                component: userIntegral
            },
            {
                path: 'card',
                component: userCard
            }
        ]
    },
    {
        path: '/course',
        component: course,
        children: [
            {
                path: '',
                component: courseManage
            },
            {
                path: 'category',
                component: courseCategory
            },
            {
                path: 'payment',
                component: coursePayment
            },
            {
                path: 'comment',
                component: courseComment
            },
            {
                path: 'recommend',
                component: courseRecommend
            }
        ]
    },
    {
        path: '/revenue',
        component: revenue,
        children: [
            {
                path: '',
                component: revenueManage
            },
            {
                path: 'trade',
                component: revenueTrade
            },
            {
                path: 'course',
                component: revenueCourse
            },
            {
                path: 'teacher',
                component: revenueTeacher
            }
        ]
    },
    {
        path: '/oam',
        component: oam,
        children: [
            {
                path: '',
                component: oamMessage
            },
            {
                path: 'discussion',
                component: oamDiscussion
            },
            {
                path: 'page',
                component: oamPage
            },
            {
                path: 'data',
                component: oamData
            },
            {
                path: 'crontab',
                component: oamCrontab
            }
        ]
    },
    {
        path: '/setting',
        component: setting,
        children: [
            {
                path: '',
                component: settingSystem
            },
            {
                path: 'payment',
                component: settingPayment
            },
            {
                path: 'role',
                component: settingRole
            }
        ]
    }
]
