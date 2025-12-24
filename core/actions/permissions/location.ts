import { PermissionStatus } from "@/infrastructure/interfaces/location";
import * as Location from 'expo-location';
import { Alert, Linking } from "react-native";

export const requestLocationPermission = async (): Promise<PermissionStatus> => { 

  const { status } = await Location.requestForegroundPermissionsAsync();

  if (status !== 'granted') {

    if (status === 'denied') { 
      manualPermissionRequest();
    }
    return PermissionStatus.DENIED;
  }

  return PermissionStatus.GRANTED;
}


// aca no se le muestra un pop up a el usuario, sino que se obtiene el estado de los permisos y en base a eso vemos que hacemos 
// constantemente estaremos haciendo esto por si el usuario cambia los permisos en la configuracion de la app
export const checkLocationPermission = async () => {

  const { status } = await Location.getForegroundPermissionsAsync();

  switch (status) {
    case 'granted':
      return PermissionStatus.GRANTED;
    case 'denied':
      return PermissionStatus.DENIED;
    default:
      return PermissionStatus.UNDETERMINED;
  }

}


// si el usuario denego los permisos, entonces lo unico que puedo hacer es decirle que vaya a la configuracion de la app y le de permisos
export const manualPermissionRequest = async () => {
  Alert.alert(
    'Permisos de ubicación denegados',
    'Para continuar debe habilitar los permisos de ubicación en los ajustes de la app',
    [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Ir a ajustes',
        onPress: () => Linking.openSettings(),
      },
    ]
  );

}

