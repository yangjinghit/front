var routes = [
	{
		path: '/',
		component: {
			template: `
				<div>
					<h1>首页</h1>
				</div>

			`
		}
	},
	{
		path: '/about',
		component: {
			template: `
				<div>
					<h1>关于我们</h1>
				</div>

			`
		}
	},
	{
		path: '/user/:name',
		component: {
			template: `
				<div>
					<h1>我叫：{{$route.params.name}}</h1>
					<h1>我今年：{{$route.query.age}}</h1>
					<router-link to = "more" append>更多信息</router-link>
					<router-view></router-view>
				</div>

			`
		},
		children: [
			{
				path: 'more',
				component: {

					template: `
						<div>
							用户：{{$route.params.name}}的详细信息
							dfafdjalsfjalsjfljsdlajlj
						</div>

					`
				}
			}

		]
	},
	{
		path:'/post',
		meta: {
			login_required: true
		},
		components: {

			sidebar: {
				template: `
					<div>
						<ul>
							<li>用户列表</li>
							<li>权限管理</li>
						</ul>
					</div>

				`
			},

			content: {
				template:`
					<div>
						dsajfslafjlsafjsljla;sfjdla;fj;
					</div>
				`
			}
		}
	}

];

var router = new VueRouter({
	routes: routes,
});

router.beforeEach(function(to, from, next) {

	var logged_in = false;

	// if (!logged_in && to.path == '/post') {
	if (!logged_in && to.matched.some(function(item) {
		//return item.path == '/post';
		return item.meta.login_required;

	})) {

		next('/');
	} else {
		next();
	};
})

new Vue({
	el: '#app',
	router: router,
	methods: {
		surf: function() {
			setTimeout(function() {
					setTimeout(function() {
						this.router.push('/user/cde');

					}, 2000)
				this.router.push('/about');
			}, 2000)
		}
	}




});