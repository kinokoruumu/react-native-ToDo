import React, { Component, } from 'react'
import { connect } from 'react-redux'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'


export default class TodoApp extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#F2EFEC',
    },
})


