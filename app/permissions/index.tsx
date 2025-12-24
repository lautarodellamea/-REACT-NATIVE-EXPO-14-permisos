import { ThemedText } from '@/presentation/components/shared/themed-text';
import ThemedPressable from '@/presentation/components/shared/ThemedPressable';
import { usePermissionsStore } from '@/presentation/store/usePermissions';
import React from 'react';
import { View } from 'react-native';

const PermissionsScreen = () => {

  const { locationStatus, requestLocationPermission } = usePermissionsStore();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ThemedText>Estado actual: {locationStatus}</ThemedText>

      {/* <Pressable style={{ backgroundColor: 'white', padding: 10, borderRadius: 5, marginTop: 10 }} onPress={requestLocationPermission}>
        <Text style={{ color: 'black' }}>Solicitar permisos</Text>
      </Pressable> */}

      <ThemedPressable onPress={requestLocationPermission}>Solicitar permisos</ThemedPressable>
    </View>
  )
}

export default PermissionsScreen