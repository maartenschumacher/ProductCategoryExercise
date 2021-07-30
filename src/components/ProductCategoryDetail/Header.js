// @flow strict-local

import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

type PropsType = {
  name: string,
  image: string,
};

export const Header = ({name, image}: PropsType) => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={{uri: image}}>
        <Text style={styles.title}>{name}</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    margin: 30,
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    backgroundColor: 'plum',
    justifyContent: 'center',
    alignItems: 'center',
    // width: '100%',
    // height: '100%',
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
});
