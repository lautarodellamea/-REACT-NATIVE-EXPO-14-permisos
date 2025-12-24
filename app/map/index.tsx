import { ThemedText } from '@/presentation/components/shared/themed-text'
import React from 'react'
import { View } from 'react-native'

const MapScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}>
      <ThemedText>Mapa</ThemedText> 
    </View>
  )
}

export default MapScreen