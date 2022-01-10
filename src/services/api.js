import _api from "./fetch"

const api = {
    _api,
    get (url, config = {}) {
        return _api.get(url, config)
    }
}


export default api