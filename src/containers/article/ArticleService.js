import axios from 'axios';

const articlePost = (requestBody) => {
    let config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa('john.smith' + ':' + 'admin')}
      };
    const url = 'https://dev10420.service-now.com/api/now/table/u_article';
    return axios.post(url, requestBody, config);
}

const articleGet = () => {
    let config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa('john.smith' + ':' + 'admin')}
      };
    const url = 'https://dev10420.service-now.com/api/now/table/u_article?sysparm_limit=10';
    return axios.get(url, config);
}

const articlePut = (articleId, requestBody) => {
    let config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa('john.smith' + ':' + 'admin')}
      };
      const url = 'https://dev10420.service-now.com/api/now/table/u_article/'+ articleId
      return axios.put(url, requestBody, config)
}
const articleDelete = (articleId) => {
    let config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa('john.smith' + ':' + 'admin')}
      };
      const url = 'https://dev10420.service-now.com/api/now/table/u_article/'+ articleId
      return axios.delete(url, config)
}



export { articlePost, articleGet, articlePut, articleDelete }; 