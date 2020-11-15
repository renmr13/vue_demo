import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        vas:'测试数据'
    },
    mutations:{
        updateVas(state,params){
            this.state['vas'] = params
        }
    }
})