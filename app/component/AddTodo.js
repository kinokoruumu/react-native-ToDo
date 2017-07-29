import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    StyleSheet,
    View,
    TextInput,
    Button
} from 'react-native'

import { addTodo } from '../reducers/actions'

class AddTodo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    onPress = () => {
        console.log('props', this.props)
        if (this.state.text != '') {
            store.dispatch(addTodo(this.state.text, this.props.currentID))
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={this.onPress}
                        title="Add"
                        color="#FFF"
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 45,
        backgroundColor: '#FFF',
    },
    inputContainer: {
        flex: 4,
        flexDirection: 'row',
        alignItems: 'stretch',
        borderTopColor: '#CCC',
        borderTopWidth: 1,
    },
    input: {
        flex: 1,
        paddingHorizontal: 15,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: '#ED2B49',
    }
})

const mapStateToProps = (state) => {
    console.log(state)
    return {
        currentID: state.todo.currentID
    }
}

export default connect(mapStateToProps)(AddTodo)