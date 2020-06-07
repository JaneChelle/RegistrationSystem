import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
        //存储 token
        Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
        isLogin: false
    },
    getters: {
        getIsLogin: state => state.isLogin
    },
    mutations:{
        // 修改 token，并将token存入localStorage中
        changeLogin(state, user){
            state.Authorization = user.Authorization;
            localStorage.setItem('Authorization',user.Authorization);
        },
        LoginStatus: (state,flag) => {
            if(state.Authorization){
                 state.isLogin = flag;
                localStorage.setItem("isLogin", state.isLogin); 
            }
            //flag是从组件中传来的参数       
        }
    },
})
export default store;