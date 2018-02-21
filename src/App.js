import React, { Component } from 'react';
import ArticleList from './containers/article/ArticleList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
            <ArticleList />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
