const _api =  {
    _baseURL: process.env.REACT_APP_API,
    _headers: {
        'Cache-Control': 'no-cache'
    },
    _mergeConfig(config) {
        const copyConfig = {...config}
        copyConfig.headers = { ...copyConfig.header, ...this._headers }

        return copyConfig
    },
    _fetch(url, config = {}) {
        return fetch(`${this._baseURL}${url}`, this._mergeConfig(config))
    },
    get(url, config = {}) {
        return new Promise((resolve, reject) => {
            return this._fetch(url, this._mergeConfig(config))
            .then(res => res.json())
            .then(data => { resolve({ data: data }) })
            .catch(error => { reject(error)})
        })
    }
}

export default _api