import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

import Home from '../views/Home.vue'
import HttpError from '../views/HttpError.vue'

const routes: Array<RouteConfig> = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},

	// Fallback route (404)
	{ 
		path: '/:fallback(.*)', 
		name: 'HttpError',
		component: HttpError,
		props: { statusCode: 404, statusMessage: 'Page Not Found' }
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
