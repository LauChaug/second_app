import Vue from "vue";
import { Button,Form,FormItem,Input,Message } from "element-ui";
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

// 把 message挂载到Vue上面
Vue.prototype.$message = Message