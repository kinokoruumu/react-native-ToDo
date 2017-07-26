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

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            leftActionActivated: false,
            toggle: false
        }
    }

    openModal = () => {
        console.log('openModal')
    }

    render() {
        const { leftActionActivated, toggle } = this.state

        const leftContent = (
            <View style={[styles.leftSwipeItem, {backgroundColor: 'lightskyblue'}]}>
                <Text>Pull action</Text>
            </View>
        )

        const rightButtons = [
            <TouchableHighlight
                style={styles.rightButtonContainer}
                underlayColor='#555656'
                onPress={this.openModal}
            >
                <Text style={styles.rightButtonText}>
                    <Icon name="bell" size={30} color="#FFF"/>
                </Text>
            </TouchableHighlight>
        ]
        let render
        if (Object.keys(this.props.todos).length >= 1) {
            render = this.props.todos.map(function(item, i){
                return (
                    <Swipeable
                        key={i}
                        leftContent={leftContent}
                        rightButtons={rightButtons}
                        rightButtonWidth={70}
                        rightActionActivationDistance={40}
                        onLeftActionActivate={() => this.setState({leftActionActivated: true})}
                        onLeftActionDeactivate={() => this.setState({leftActionActivated: false})}
                        onLeftActionComplete={() => this.setState({toggle: !toggle})}
                    >
                        <ListItem
                            key={i}
                            centerElement={{
                                primaryText: item.text
                            }}
                        />
                    </Swipeable>
                )
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