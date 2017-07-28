import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListItem } from 'react-native-material-ui';
import Swipeable from 'react-native-swipeable';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight
} from 'react-native'

import SetAlertModal from './SetAlertModal'

import { setModalVisible } from '../reducers/actions'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            leftActionActivated: false,
            toggle: false
        }
    }

    openModal = () => {
        store.dispatch(setModalVisible(true))
    }

    onLeftActionActivate = () => {
        this.setState({
            leftActionActivated: true
        })
    }

    onLeftActionDeactivate = () => {
        this.setState({
            leftActionActivated: false
        })
    }

    onLeftActionComplete = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    render() {
        const { leftActionActivated, toggle } = this.state

        const leftContent = (
            <View style={[styles.leftSwipeItem, {backgroundColor: leftActionActivated ? 'lightgoldenrodyellow' : 'steelblue'}]}>
                { leftActionActivated ? <Text>release!</Text> : <Text>keep pulling!</Text> }
            </View>
        )

        const rightButtons = [
            <View style={{flex: 1}}>
                <TouchableHighlight
                    style={styles.rightButtonContainer}
                    underlayColor='#555656'
                    onPress={this.openModal}
                >
                    <Text style={styles.rightButtonText}>
                        <Icon name="bell" size={30} color="#FFF"/>
                    </Text>
                </TouchableHighlight>
                <SetAlertModal/>
            </View>
        ]
        let render
        console.log(this.props.hoge)
        if (Object.keys(this.props.hoge).length >= 1) {
            render = this.props.hoge.map(function(item, i){
                return (
                    <Swipeable
                        key={i}
                        leftActionActivationDistance={200}
                        leftContent={leftContent}
                        onLeftActionActivate={this.onLeftActionActivate}
                        onLeftActionDeactivate={this.onLeftActionDeactivate}
                        onLeftActionComplete={this.onLeftActionComplete}
                        rightButtons={rightButtons}
                        rightButtonWidth={70}
                        rightActionActivationDistance={40}
                    >
                        <ListItem
                            key={i}
                            centerElement={{
                                primaryText: item.text
                            }}
                            style={{backgroundColor: toggle ? 'thistle' : 'darkseagreen'}}
                        />
                    </Swipeable>
                )
            })
        }

        return (
            <View style={styles.container}>
                {render}
                <Swipeable
                    leftActionActivationDistance={200}
                    leftContent={leftContent}
                    onLeftActionActivate={this.onLeftActionActivate}
                    onLeftActionDeactivate={this.onLeftActionDeactivate}
                    onLeftActionComplete={this.onLeftActionComplete}
                >
                    <View style={[styles.listItem, {backgroundColor: toggle ? 'thistle' : 'darkseagreen'}]}>
                        <Text>Example 3</Text>
                    </View>
                </Swipeable>
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
        case 'SHOW_ACTIVE':
            return todos.filter((t) => !t.completed)
        case 'SHOW_COMPLETED':
            return todos.filter((t) => t.completed)
    }
}

const mapStateToProps = (state) => {
    console.log('state', state)
    return {
        todos: getVisibleTodos(state.todo.todos, state.visibilityFilter)
    }
}

export default connect(mapStateToProps)(TodoList)