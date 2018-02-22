import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { articlePost } from './ArticleService'
import TextField from 'material-ui/TextField';


class CreateArticle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            title: '',
            text: ''
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

    handlePostArticle = () => {
        const requestBody = {
            u_receiver: 'john.smith',
            u_title: this.state.title,
            u_text: this.state.text
        }
        articlePost(JSON.stringify(requestBody)).then(this.props.refresh())
        this.setState({
            open: false,
            title: '',
            text: ''
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
                onClick={this.handlePostArticle}
            />,
        ];

        return (
            <div>
                <FloatingActionButton onClick={this.handleOpen}>
                    <ContentAdd />
                </FloatingActionButton>
                <Dialog
                    title="Create Article"
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
export default CreateArticle;