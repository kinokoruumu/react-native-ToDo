import MaterialTabs from 'react-native-material-tabs';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import React, { Component, } from 'react'
import { connect } from 'react-redux'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'

import AddTodo from './AddTodo'
import TodoList from './TodoList'

import { setVisibilityFilter } from '../reducers/actions'


export default class TodoApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 0
        }
    }

    changeTab = index => {
        switch (index) {
            case 0:
                store.dispatch(setVisibilityFilter('SHOW_ACTIVE'))
                break;
            case 1:
                store.dispatch(setVisibilityFilter('SHOW_COMPLETED'))
                break;
            default:
                console.log('switch error')
                break;
        }
        this.setState({
            selectedTab: index
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <MaterialTabs
                    items={['Active', 'Completed']}
                    barColor='#1E4A66'
                    selectedIndex={this.state.selectedTab}
                    onChange={this.changeTab}
                />
                <TodoList/>
                <AddTodo/>
                <KeyboardSpacer/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2EFEC',
    }
})


