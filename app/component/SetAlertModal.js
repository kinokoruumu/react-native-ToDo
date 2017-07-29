import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Modal,
    View,
    Text,
    TouchableHighlight
} from 'react-native'

import { setModalVisible } from '../reducers/actions'

class SetAlertModal extends Component {
    constructor(props) {
        super(props)
    }

    hideModal = () => {
        store.dispatch(setModalVisible(false))
    }

    render() {
        return (
            <Modal
                animationType={"slide"}
                transparent={false}
                visible={this.props.modal.modalVisible}
                onRequestClose={() => {alert("Modal has been closed.")}}
            >
                <View style={{marginTop: 22}}>
                    <View>
                        <Text>Hello World!</Text>

                        <TouchableHighlight
                            onPress={this.hideModal}
                        >
                            <Text>Hide Modal</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
        )
    }
}


const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(SetAlertModal)