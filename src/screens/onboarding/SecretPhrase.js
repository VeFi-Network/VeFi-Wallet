import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Screen from '../../components/common/Screen';

export default function SecretPhrase() {
  return (
    <Screen backButtonShown title="Your Secret Phrase">
      <Text>SecretPhrase</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({});
