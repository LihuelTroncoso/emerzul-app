import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import Boton from '../components/Boton'
import AreaTexto from '../components/AreaTexto'
import logo from '../assets/logo.jpg'
import { useForm } from "react-hook-form";
import { login } from '../Api'

const HomeScreen = () => {
    const { control, handleSubmit, formState: {errors} } = useForm();
    const [usuario, setUsuario] = useState('')
    const [contrasena, setContrasena] = useState('')

    const {height} = useWindowDimensions();

    const loguearse = data => {
        const log = login(data)
    }

    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            padding: 30
        },
        logo: {
            width: 200,
            maxHeight: 300
        }
    })

    return (
        <View style={styles.container}>
            <Image 
            source={logo}
            resizeMode="contain"
            style={[styles.logo, {height: height * 0.3}]}
            />
            
            
            <AreaTexto 
                control={control}
                nombre="username"
                placeholder="Usuario"
                reglas={{required: true}}
            />

            <AreaTexto 
                control={control}
                nombre="password"
                placeholder="Usuario"
                reglas={{required: true}}
            />


            <Boton text="Iniciar Sesion" onPress={handleSubmit(loguearse)}/>
        </View>
    )
}

export default HomeScreen