import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
  FlatList
} from 'react-native';

import {
  configure,
  observable,
  action,
  computed,
  toJS
} from 'mobx';

import {
  observer
} from 'mobx-react';

// don't allow state modifications outside actions
configure({enforceActions: true});

class Todo {
  @observable header = '';
  @observable body = '';

  @action setHeader(text) {
    this.header = text;
    this.modified = new Date().getTime();
  }

  @action setBody(text) {
    this.body = text;
    this.modified = new Date().getTime();
  }

  constructor(props) {
    this.created = new Date().getTime();
    this.modified = new Date().getTime();
    this.header = props.header;
    this.body = props.body;
  }
}

class TodoStore {
  @observable todos = [];

  @action addTodo(todo) {
    this.todos.push(todo);
  }

  @action reset() {
    this.todos = [];
  }
}

const todoStore = new TodoStore();

@observer
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      header: '',
      body: ''
    };

    this.saveTodo = this.saveTodo.bind(this);
    this.clearStore = this.clearStore.bind(this);
  }

  saveTodo() {
    const {
      header,
      body
    } = this.state;

    const todo = new Todo({header, body});
    todoStore.addTodo(todo);
    this.setState({
      header: '',
      body: ''
    });
  }

  clearStore() {
    todoStore.reset();
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={todoStore.todos}
          ItemSeparatorComponent={() => <View style={styles.todoListSeparator}></View>}
          renderItem={({item}) => (
            <View style={styles.todoListItem}>
              <Text style={styles.todoListItemHeader}>{item.header}</Text>
              <Text style={styles.todoListItemBody}>{item.body}</Text>
            </View>
          )}
          style={styles.todoList}
          initialNumToRender={10}
          keyExtractor={(todo) => {
            return todo.created;
          }}
          getItemLayout={(data, index) => ({
            length: 80,
            offset: 80 * index,
            index
          })}
        />
        <View style={styles.inputView}>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => {
              this.setState({
                header: text
              });
            }}
            value={this.state.header}
          />
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => {
              this.setState({
                body: text
              });
            }}
            value={this.state.body}
          />
          <Button
            title="Save todo"
            onPress={this.saveTodo} />
          <Button
            title="Clear store"
            onPress={this.clearStore} />
        </View>
      </SafeAreaView>
    );
  }
}

const colors = {
  white: '#fff',
  gray: 'gray',
  black: '#000'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.white,
  },
  todoList: {
    flexDirection: 'column'
  },
  todoListItem: {
    height: 80,
    width: '100%',
    padding: 5
  },
  todoListItemHeader: {
    height: '100%'
  },
  todoListSeparator: {
    height: 1,
    backgroundColor: colors.gray
  },
  inputView: {
    borderTopWidth: 1,
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '100%',
    padding: 10,
    borderColor: colors.gray,
    borderBottomWidth: 1
  },
});
