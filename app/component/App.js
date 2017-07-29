import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from '../reducers'
import { COLOR, ThemeProvider } from 'react-native-material-ui';

import TodoApp from './TodoApp'

import { loadTodo } from '../reducers/actions'

store = createStore(reducer)

const uiTheme = {
    palette: {
        primaryColor: COLOR.red500,
    }
}

export default class App extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        AsyncStorage.getItem('todoItems')
        .then((value) => {
            if (value && value.length) {
                store.dispatch(loadTodo(JSON.parse(value)))
            }
        })
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
