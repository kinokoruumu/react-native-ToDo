import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from '../reducers'
import { COLOR, ThemeProvider } from 'react-native-material-ui';

import TodoApp from './TodoApp'

store = createStore(reducer)

const uiTheme = {
    palette: {
        primaryColor: COLOR.red500,
    }
};

export default class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Provider store={store}>
                <ThemeProvider uiTheme={uiTheme}>
                    <TodoApp/>
                </ThemeProvider>
            </Provider>
        )
    }
}
