import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {articlePut} from './ArticleService'
import TextField from 'material-ui/TextField';


class UpdateArticle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            title: this.props.title,
            text: this.props.text
        };
    }

    handleChangeTitle = (event, newTitle) => {
        this.setState({
            title: newTitle,
        });
    }

    handleChangeText = (event, newText) => {
        this.setState({
            text: newText,
        });
    }

    handlePutArticle = () => {
        const requestBody = {
            u_receiver: 'john.smith',
            u_title: this.state.title,
            u_text: this.state.text
        }
        articlePut(this.props.id, JSON.stringify(requestBody)).then(this.props.refresh())
        this.setState({
            open: false,
        })
        this.props.refresh()
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onClick={this.handlePutArticle}
            />,
        ];

        return (
            <div>
                <RaisedButton label="Update" onClick={this.handleOpen} />
                <Dialog
                    title="Update Article"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    <TextField
                        hintText="Title"
                        fullWidth={true}
                        onChange={this.handleChangeTitle}
                        value={this.state.title}
                    />
                    <TextField
                        hintText="Text"
                        fullWidth={true}
                        onChange={this.handleChangeText}
                        value={this.state.text}
                        multiLine={true}
                        rows={2}
                        rowsMax={4}
                    />
                </Dialog>
            </div>
        );
    }
}
export default UpdateArticle;