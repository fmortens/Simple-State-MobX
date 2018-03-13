import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  FlatList,
  Button
} from 'react-native';
import { toJS } from 'mobx';
import { observer, inject } from 'mobx-react';
import { Observer } from 'mobx-react/native';

@inject('QR', 'UX')
@observer
export default class TestView extends React.Component {
  constructor(props) {
    super(props);

    this._renderItem = this._renderItem.bind(this);
    this._renderListSeparator = this._renderListSeparator.bind(this);
    this._renderHeader = this._renderHeader.bind(this);
  }

  _renderItem({item}) {
    const { UX } = this.props;
    return (
      <Observer>{
        () =>
          <View style={styles.item}>
            <Text style={styles.itemText}>{decodeURIComponent(item.content.data)}</Text><Text>{UX.captureListEditable ? 'X': ''}</Text>
          </View>
      }</Observer>
    );
  }

  _renderListSeparator() {
    return <View style={styles.separator} />;
  }

  _renderHeader = observer(() => {
    const { UX } = this.props;
    const title = UX.captureListEditable ? 'Done' : 'Edit';
    console.log('UX.captureListEditable', UX.captureListEditable, title);

    return (
      <View>
        <Button title={title} onPress={() => UX.toggleCaptureListEditable()} />
      </View>
    );
  });

  // TODO, create proper ID
  _keyExtractor = (item, index) => index;

  render() {
    const { QR, UX } = this.props;

    return (
      <View style={styles.listView}>
        <FlatList
          data={toJS(QR.captures)}
          ListHeaderComponent={this._renderHeader}
          ItemSeparatorComponent={this._renderListSeparator}
          renderItem={this._renderItem}
          style={styles.list}
          initialNumToRender={10}
          keyExtractor={this._keyExtractor}
          getItemLayout={(data, index) => ({
            length: 80,
            offset: 80 * index,
            index
          })}
        />
      </View>
    );
  }
}

const separatorBackgroundColor = '#eee';
const styles = StyleSheet.create({
  listView: {
    flexDirection: 'column',
    padding: 0,
    margin: 0,
    width: '100%',
    height: '100%'
  },
  list: {
    flex: 1,
    width: '100%'
  },
  item: {
    height: 80,
    padding: 10,
    justifyContent: 'center'
  },
  itemText: {
    fontSize: 18
  },
  separator: {
    height: 1,
    backgroundColor: separatorBackgroundColor
  }
});
