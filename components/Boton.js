import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const Boton = ({onPress, text}) => {
    const styles = StyleSheet.create({
        text: {
            fontWeight: 'bold',
            color: 'white'
        },
        container: {
            width: '60%',

            padding: 15,
            marginVertical: 5,
            alignItems: 'center',
            borderRadius: 5,
            alignSelf: 'center',

            backgroundColor: '#3B71F3'
        }
    })
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

export default Boton