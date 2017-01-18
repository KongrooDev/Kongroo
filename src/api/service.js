import Factory from './factory';

const defaultConfig = {};

export default class Service {

    constructor(config = {}) {
        config = Object.assign(config, defaultConfig);
        this.routes = {};
        this.axios = new Factory(config).getInstance();
    }

    index(params, query) {
        let route = this.routes.index;
        let url = route.url(params);
        return this.axios.get(url, {params: query})
    }

    store(params, data, query) {
        let route = this.routes.store;
        let url = route.url(params);
        return this.axios.post(url, {data}, {params: query})
    }

    update(params, data, query) {
        let route = this.routes.update;
        let url = route.url(params);

        return this.axios.post(url, {data}, {params: query})
    }
    destroy(params, data, query) {
        let route = this.routes.destroy;
        let url = route.url(params);
        return this.axios.post(url,  {data}, {params: query})
    }

    addRoute(method, route) {
        this.routes[method] = route;
    }
}