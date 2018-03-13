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
import {
  ItemListHeaderLeft,
  ItemListHeaderRight
} from '../components';

@inject('QR', 'UX')
@observer
export default class ItemList extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerTitle: <Text>List</Text>,
    headerLeft: <ItemListHeaderLeft />,
    headerRight: <ItemListHeaderRight navigation={navigation} />,
  });

  constructor(props) {
    super(props);

    this._renderItem = this._renderItem.bind(this);
    this._renderListSeparator = this._renderListSeparator.bind(this);
    this._renderHeader = this._renderHeader.bind(this);
  }

  _renderItem({item}) {
    const { UX, QR } = this.props;
    if (!item) {
      return null;
    }

    return (
      <Observer>{
        () =>
          <View style={styles.item}>
            <TouchableOpacity
              style={styles.itemDescription}
              onPress={() => this.props.navigation.navigate('Detail', {
                data: item,
                mode: 'view'
              })}>
              <Text style={styles.itemDescriptionText}>{decodeURIComponent(item.content.data)}</Text>
            </TouchableOpacity>
            <View style={styles.itemRemoveView}>
              <Button
                title={ UX.captureListEditable ? 'X': '' }
                onPress={ () => QR.remove(item) } />
            </View>
          </View>
      }</Observer>
    );
  }

  _renderListSeparator() {
    return <View style={styles.separator} />;
  }

  _renderHeader = observer(() => {
    return null;

    const { UX } = this.props;
    const title = UX.captureListEditable ? 'Done' : 'Edit';

    return (
      <View style={styles.headerView}>
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
};

const listBackgroundColor = '#fefefe';
const separatorBackgroundColor = '#eee';
const headerBackgroundColor = 'orange';
const buttonColor = 'blue';

const styles = StyleSheet.create({
  listView: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    backgroundColor: listBackgroundColor
  },
  list: {
    flex: 1,
    width: '100%'
  },
  headerView: {
    backgroundColor: headerBackgroundColor
  },
  item: {
    height: 80,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  itemDescription: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  itemDescriptionText: {
    fontSize: 18,
  },
  itemRemoveView: {
    width: 20,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  separator: {
    height: 1,
    backgroundColor: separatorBackgroundColor
  }
});
