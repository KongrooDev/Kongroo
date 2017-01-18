const types = {
    repo: 'article/getters/repo',
    articles: 'article/getters/articles'
}

export {types};

let getters =  {
    [types.repo]: (state, getters) => {
        return state.repo;
    },
    [types.articles]: (state, getters) => {
        let repo = getters(types.repo);
        if (! repo) {
            return [];
        }
        return repo.articles;
    }
}

export default getters;