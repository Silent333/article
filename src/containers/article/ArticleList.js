import React from 'react';
import Article from './Article';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import CreateArticle from './CreateArticle'
import {articleGet, articlePost, } from './ArticleService'


const containerStyle = {
    width: '90%',
    margin: '0 auto',
};

class ArticleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
        };
    }

    componentWillMount () {
        this.getArticles()
    }

    getArticles = () => {
        articleGet().then(response => this.setState({articles: response.data.result}));
    }

    render() {
        return (
            <div style={containerStyle}>
                < CreateArticle 
                    refresh={this.getArticles}/>
                {
                    this.state.articles.map(article => (
                        <Article
                            key={article.sys_id.toString()}
                            id={article.sys_id}
                            title={article.u_title}
                            text={article.u_text}
                            refresh={this.getArticles}
                        />)
                    )
                }
            </div>
        );
    }
}
export default ArticleList;