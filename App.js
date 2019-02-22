/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';
import useClipboard from './useClipboard';

type Props = {};

export default function App(props: Props) {
  const [clipboardContents, setClipboardContents] = useClipboard();

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Clipboard contents: {clipboardContents}</Text>
      <TextInput 
        style={styles.input}
        onEndEditing={({nativeEvent: {text}}) => setClipboardContents(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    width: 150,
    height: 30,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
  },
});
