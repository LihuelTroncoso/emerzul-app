import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const EmergenciaScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const llamado = () => {
    
  }

  return (
    <View style={styles.container}>
      {isEnabled ? (
        <View>
          <Text>Vista Emergencias</Text>
          <Button
          title="Alarma Azul"
          onPress={llamado}
          />
        </View>
      ) :
      (
        <View></View>
      )}
      <View>
        <Text>Cambiar vistas</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default EmergenciaScreen