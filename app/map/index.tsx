import React from 'react'
import { StyleSheet, View } from 'react-native'
import MapView from 'react-native-maps'

const MapScreen = () => {
  return (
    <View style={ styles.container }>
      <MapView
        style={styles.map}
        // showsPointsOfInterest={true}
        // provider='google'
        initialRegion={{
          // -31.419644785151227, -64.18769217875413
            latitude: -31.419644785151227,
            longitude: -64.18769217875413,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
      />
    </View>
  )
}

export default MapScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
   width: '100%',
    height: '100%',
  //  backgroundColor: 'red',
  }
})