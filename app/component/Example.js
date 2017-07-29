import React, { Component } from 'react'
import Swipeable from 'react-native-swipeable';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'

import { toComplete } from '../reducers/actions'

export default class Example extends Component {
  constructor(props) {
    super(props)
    this.state = {
      leftActionActivated: false,
      toggle: false
    }
  }

  onLeftActionDeactivate = () => {
    this.setState({leftActionActivated: true})
    store.dispatch(toComplete('1'))
  }

  render() {
    const {leftActionActivated, toggle} = this.state

    return (
      <Swipeable
        leftActionActivationDistance={200}
        leftContent={(
          <View style={[styles.leftSwipeItem, {backgroundColor: leftActionActivated ? 'lightgoldenrodyellow' : 'steelblue'}]}>
            {leftActionActivated ?
              <Text>release!</Text> :
              <Text>keep pulling!</Text>}
          </View>
        )}
        onLeftActionActivate={this.onLeftActionDeactivate}
        onLeftActionDeactivate={() => this.setState({leftActionActivated: false})}
        onLeftActionComplete={() => this.setState({toggle: !toggle})}
      >
        <View style={[styles.listItem, {backgroundColor: toggle ? 'thistle' : 'darkseagreen'}]}>
          <Text>Example 3</Text>
        </View>
      </Swipeable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  listItem: {
    height: 75,
    alignItems: 'center',
    justifyContent: 'center'
  },
  leftSwipeItem: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 20
  },
  rightSwipeItem: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20
  },

});