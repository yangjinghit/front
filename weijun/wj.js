
Vue.component('alert', {
	template: '<button @click="on_click">弹弹弹</button>',
	props:['msg'],
	methods: {
		on_click: function() {
			alert(this.msg);
		}
	}
});

Vue.component('like', {
	template: '<button @click="toggle_like()"> {{like_count}}</button>',
	data: function() {
		return {
			like_count: 10,
			liked: false,
		}
	},
	methods: {
		toggle_like: function() {
			if (!this.liked) {
				this.like_count++;
			} else {
				this.like_count--;
			}

			this.liked = !this.liked;
		}
	}
});

Vue.component('balance', {
	template: 
	`<div>
		<show @show-balance="show_balance"></show>
		<div v-if="show">
			您的余额：000
		</div>
	</div>`,
	data: function() {
		return {
			show: false,
		}
	},
	methods: {
		show_balance: function(data) {
			this.show = true;
			console.log(data);
		}
	}
});

Vue.component('show', {
	template: '<button @click="on_click">显示余额</button>',
	methods: {
		on_click() {
			this.$emit('show-balance', {a:1, b:2})
		}
	}
});


var Event = new Vue();
Vue.component('huahua', {
	template: `
		<div>
			我说：<input @keyup = "on_change" v-model="i_said"></input>{{i_said}}
		</div>
	`,
	data: function() {
		return {
			i_said: "",
		}
	},

	methods: {
		on_change: function() {
			Event.$emit('huahua-said-something', this.i_said);
		}
	}

});

Vue.component('shuandan', {

	template: `
		<div>
			花花说： {{huahua_said}}
		</div>`,
	data: function() {
		return {
			huahua_said: "",
		}
	}, 
	mounted: function() {
		var me = this;
		Event.$on('huahua-said-something', function(data) {
			me.huahua_said = data;

		})
	}
});

Vue.filter('currency', function(val, unit) {
	val = val || 0;
	unit = unit || "yuan";
	return val + unit;

});

Vue.directive('pin', function(el, binding) {
	var pinned = binding.value;
	var position = binding.modifiers;
	var warning = binding.arg;

	if (pinned) {

		el.style.position = 'fixed';
		for(var key in position) {
			if (position[key]) {
				el.style[key] = '10px';
			}
		}
		if (warning === 'true') {
			el.style.background = 'yellow';
		}
		
	} else {
		el.style.position = 'static';
	}

});

var base = {
	methods: {

		show: function() {
			this.visible = true;
		},
		hide: function() {
			this.visible = false;
		},
		toggle: function(){
			this.visible = !this.visible;
		},

	},
	data: function() {
		return {
			visible :false,
		}
	},
}

Vue.component('tooltip', {
	template: `
		<div>
			<span @mouseenter="show" @mouseleave="hide">tooltip</span>
			<div v-if="visible">
				白岩松
			</div>
		</div>
	`,
	mixins: [base],

});

Vue.component('popup', {
	template: `
	<div>
		<button @click="toggle">Popup</button>
			<div v-if="visible">
				<span @click="hide">X</span>
				<h4>title</h4>
				dalsjflasfjlasdjkfaljfdlasjfslajljdfafjaljlsjfjsljf
			</div>


	</div>

	`,
	mixins: [base],

});

Vue.component('panel', {

	template: '#panel-tpl',
})


var dataValue = {a:1, name:null, foodList:[{name:"葱", price:10},{name:"姜", price:5},{name:"蒜", price:1}],
	url:"https://www.baidu.com",
	isActive:true,
	sex:'female',
	sex2:[],
	from:2 ,
	role:"hr",
	price: 10,
	card1:{
		pinned :true,
	},
	card2:{
		pinned : false,
	},
	todoObj:{
		js:"aaaa",
		vue:"bbbb",
		project:"cccccc"
	}

}
var app = new Vue({
	el:'#first',
	data:dataValue,
	beforeCreate:function(){console.log('beforeCreate')},
	created:function(){console.log('created')},
	beforeMount:function(){console.log('beforeMount')},
	mounted:function(){console.log('mounted')},
	beforeUpdate:function(){console.log('beforeUpdate')},
	updated:function(){console.log('updated')},
	activated:function(){console.log('activated')},
	deactivated:function(){console.log('deactivated')},
	beforeDestroy:function(){console.log('beforeDestroy')},
	destroyed:function(){console.log('destroyed')},
	methods:{
		onClick: function() {console.log('clicked')},
		onEnter: function() {console.log('onEnter')},
		onLeave: function() {console.log('onLeave')},
		onSubmit: function() {console.log('onSubmit')},
		onEnter: function() {console.log("onEnter")}
	}
});
app.$watch('a', function(newValue, oldValue) {
	console.log(newValue + "=------" + oldValue)

});

var app2 = new Vue({
	el:'.once',
	data:{
		message:'hello',
		show:false,
		color:'blue',
	}
});

Vue.component('todo-item', {
	props: ['hahaha'],
	template: `<li>{{hahaha}}</li>`
});
new Vue({
	el:'#second',
	data:{
		forList: [{id: 0, value: '蔬菜'},{id: 1, value:'奶酪'},{id:2, value:'随便其他shenm'}]
	}
});




