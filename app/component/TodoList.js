import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight
} from 'react-native'

import List from './List'

class TodoList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let render
        if (Object.keys(this.props.todos).length >= 1) {
            render = this.props.todos.map(function(item, i){
                return <List item={item} key={i}/>
            })
        }

        return (
            <View style={styles.container}>
                {render}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    rightButtonContainer: {
        flex: 1,
        paddingLeft: 20,
        paddingVertical: 7,
        backgroundColor: '#A8AAAA',
    },
    rightButtonText: {
        fontSize: 15,
        color: '#FFF',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    leftSwipeItem: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 20
    },
})

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_COMPLETED':
            return todos.filter((t) => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter((t) => !t.completed)
    }
}

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todo.todos, state.visibilityFilter)
    }
}

export default connect(mapStateToProps)(TodoList)