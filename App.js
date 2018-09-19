import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import Board from './Board';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      turnX: true,
      turnCount: 1,
      winner: null,
      tableData: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ],
    }
  }

  takeTurn = (row, col) => {
    console.log('taking a turn!')
    let newData = [...this.state.tableData]
    newData[row][col] = this.state.turnX ? 'X' : 'O'

    this.setState({
      tableData: newData,
      turnX: !this.state.turnX,
      turnCount: this.state.turnCount++
    })
  }

  reset = () => {
    console.log('resetting!')
    this.setState({
      turnX: true,
      turnCount: 1,
      winner: null,
      tableData: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ],
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          leftComponent={{ icon: 'home', color: '#fff', onPress: () => this.reset() }}
          centerComponent={{ text: 'TIC-TAC-TOE!', style: { color: '#fff' } }}
          outerContainerStyle={{ backgroundColor: '#7f6dcc'}} />
        <View style={styles.centered}>
          <Board takeTurn={this.takeTurn} tableData={this.state.tableData}/>
        <View style={styles.centered}>
          <Text style={styles.turn}>Turn: {this.state.turnX ? 'X': 'O'}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0',
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15
  },
  turn: {
    fontSize: 35,
  }
});
