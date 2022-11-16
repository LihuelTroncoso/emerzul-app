import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { Controller } from 'react-hook-form'

const AreaTexto = ({control, nombre, reglas = { }, placeholder, secureTextEntry}) => {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: 'white',
            width: '100%',
    
            borderColor: '#e8e8e8',
            borderWidth: 1,
            borderRadius: 5,
    
            paddingHorizontal: 10,
            marginVertical: 5
        },
    })
    return (
            <Controller 
                control={control}
                name={nombre}
                rules={reglas}
                render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
                    <View style={[styles.container, {borderColor: error ? 'red':'#e8e8e8'}]}>
                        <TextInput 
                            placeholder={placeholder} 
                            value={value} 
                            onChangeText={onChange} 
                            onBlur={onBlur}
                            secureTextEntry={secureTextEntry}
                        />
                    </View>
                )
                }
                />
    )
}
export default AreaTexto