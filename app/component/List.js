import React, { Component } from 'react'
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

import { setModalVisible, toComplete } from '../reducers/actions'

export default class List extends Component {
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
        const { item } = this.props
        store.dispatch(toComplete(item.id))
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

        const { item } = this.props

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

        return (
            <Swipeable
                leftActionActivationDistance={200}
                leftContent={leftContent}
                onLeftActionActivate={this.onLeftActionActivate}
                onLeftActionDeactivate={this.onLeftActionDeactivate}
                onLeftActionComplete={this.onLeftActionComplete}
                rightButtons={rightButtons}
                rightButtonWidth={70}
                rightActionActivationDistance={40}
            >
                <View>
                    <ListItem
                        key={item.id}
                        centerElement={{
                            primaryText: item.text
                        }}
                        style={{backgroundColor: toggle ? 'thistle' : 'darkseagreen'}}
                    />
                </View>
            </Swipeable>
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