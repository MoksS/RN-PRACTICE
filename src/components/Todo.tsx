import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AppText from './UI/AppText';

interface Todo {
  todo: {
    title: string,
    id: string
  },
  onRemove(id: string): void,
  openTodo(id: string):void
}

function Todo ({ todo, onRemove, openTodo }: Todo) {

  return (
    <TouchableOpacity 
      activeOpacity={ 0.5 }
      onPress={() => openTodo(todo.id) }
      onLongPress={ onRemove.bind(null, todo.id) }
    >
      <View style={ styles.todo }>
        <AppText>{ todo.title }</AppText>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 2,
    borderColor: '#eee',
    borderRadius: 5,
    marginBottom: 10,
  }
})

export default Todo;