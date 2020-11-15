import store from '../store/store';
//获取store里面的数据
export function getStore(key){
    return store.state[key]
}
//更新store里面的数据
export function setStore(key,params){
    store.commit(key,params)
}