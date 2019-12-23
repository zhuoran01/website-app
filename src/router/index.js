import Vue from 'vue'
import VueRouter from 'vue-router'

import Nav from '@/views/Nav.vue'
import SignIn from '@/views/SignIn.vue'
import QQSignIn from '@/views/QQSignIn.vue'
import WechatSignIn from '@/views/WechatSignIn.vue'
import BlogSignIn from '@/views/BlogSignIn.vue'
import Index from '@/views/Index.vue'
import SignUp from '@/views/SignUp.vue'
import AddArticle from '@/views/AddArticle.vue'

import User from '@/views/User.vue'
import Article from '@/views/Article.vue'
import Special from '@/views/Special.vue'
import Ranklist from '@/views/Ranklist.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import UserDetail from '@/views/UserDetail.vue'
import Search from '@/views/Search.vue'
import SearchUser from '@/views/SearchUser.vue'
import SearchTopic from '@/views/SearchTopic.vue'
import SearchArticle from '@/views/SearchArticle.vue'
import Mexpo from '@/views/Mexpo.vue'
import PersonalCenter from '@/views/PersonalCenter.vue'
import Text from '@/views/Text.vue'
import UpDateUser from '@/views/UpDateUser.vue'

Vue.use(VueAxios, axios)
Vue.use(VueRouter)

const routes = [{
		path: '/',
		component: Nav,
		children: [{
				path: '/',
				redirect: 'index'
			},
			{
				path: 'index',
				component: Index
			},
			{
				path: 'article',
				component: Article
			},
			{
				path: 'user',
				component: User
			},

			{
				path: 'special',
				component: Special
			},
			{
				path: 'ranklist',
				component: Ranklist
			},
			{
				path: '/person',
				component: PersonalCenter
			},
			{
				path: 'user/:id',
				component: UserDetail
			}, 
			{
				path: '/update',
				component: UpDateUser
			},
			{
				path: '/addarticle',
				component: AddArticle
			},
			
			{
				path: 'search',
				component: Search,
				children: [{
						path: '/',
						redirect: 'article'
					},
					{
						path: 'article',
						component: SearchArticle
					},
					{
						path: 'topic',
						component: SearchTopic
					},
					{
						path: 'user',
						component: SearchUser
					}
				]
			}
		]
	},
	{
		path: '/sign-in',
		component: SignIn
	},


	{
		path: '/qq-sign-in',
		component: QQSignIn
	},
	{
		path: '/wechat-sign-in',
		component: WechatSignIn
	},
	{
		path: '/blog-sign-in',
		component: BlogSignIn
	},
	{
		path: '/sign-up',
		component: SignUp
	},
	{
		path: '/mexpo',
		component: Mexpo
	},
	{
		path: '/t',
		component: Text
	},
	
	

]

const router = new VueRouter({
	routes
})

export default router
