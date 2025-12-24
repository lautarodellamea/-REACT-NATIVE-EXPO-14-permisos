// este lo creamos nosotros

import React from 'react';
import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';

interface Props extends PressableProps { 
  children: string;
}

const ThemedPressable = ({ children, ...props }: Props) => {
  return (
     <Pressable style={styles.btnPrimary} {...props}>
        <Text style={{ color: 'black' }}> {children} </Text>
      </Pressable>
  )
}

export default ThemedPressable

const styles = StyleSheet.create({
    btnPrimary: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
})