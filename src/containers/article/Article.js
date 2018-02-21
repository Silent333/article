import React from 'react';
import Chip from 'material-ui/Chip';
import { Card, CardHeader } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import UpdateArticle from './UpdateArticle'
import {articleDelete} from './ArticleService'


const cardHeaderStyle = {
    cursor: 'text',
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    height: 'auto',
    wordWrap: 'break-word'
};

const cardStyle = {
    boxShadow: 'none',
}
const deleteBtnStyle = {
    cursor: 'pointer',
    display: 'inline-block',
    marginRight: '10px'

};
const chipStyle = {
    display: 'inline',
    marginRight: '20px',
    background: '#00E5FF',

}
const chipTextStyle = {
    fontFamily: 'Roboto',
    color: 'white',
    fontSize: '15px',
    fontWeight: 'bold'
}
const btnsStyle = {
    display: 'flex',
    margin: '20px'
}

class Article extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: this.props.comments,
            deleted: false
        };
    }

    handleDelete = () => {
        articleDelete(this.props.id).then(this.props.refresh());
        this.setState({
            deleted: true
        })
        this.props.refresh();
    }

    handleUpdate = () => {
        this.props.refresh()
    }

    render() {
        return (
            <div>
                <Card style={cardStyle}
                    onClick={this.handleClick}>
                    <CardHeader
                        actAsExpander={true}
                        style={cardHeaderStyle}
                        title={this.props.title}
                        subtitle={this.props.text}
                    />
                    <div style={btnsStyle}>
                        <UpdateArticle
                            label="Update"
                            title={this.props.title}
                            text={this.props.text}
                            id={this.props.id}
                            refresh={this.handleUpdate}
                            primary={true}
                            style={deleteBtnStyle}
                            onClick={this.handleDelete} />
                        <RaisedButton
                            label="Delete"
                            secondary={true}
                            style={deleteBtnStyle}
                            onClick={this.handleDelete} />
                    </div>
                    <Divider />
                </Card>
            </div >
        );
    }
}

export default Article;