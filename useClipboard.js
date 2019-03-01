/* @flow */
import React, {useState, useEffect} from 'react';
import {NativeModules} from 'react-native';

export default function useClipboard() {
  const [contents, setContents] = useState('');

  useEffect(() => {
    getClipboardContents();
  }, []);

  const getClipboardContents = async () => {
    const content = await NativeModules.Clipboard.getString();
    setContents(content);
  };

  const setClipboardContents = (content) => {
    NativeModules.Clipboard.setString(content);
    setContents(content);
  };

  return [contents, setClipboardContents];
};

