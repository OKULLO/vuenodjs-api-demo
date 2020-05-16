import Api from './api'

export default {
    Register(info){
        return Api().post(`register`,info)
    }
}