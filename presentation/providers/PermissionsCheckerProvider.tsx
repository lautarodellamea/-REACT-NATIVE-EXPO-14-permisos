import { router } from 'expo-router';
import { PropsWithChildren, useEffect, useState } from 'react';
import { AppState } from 'react-native';

import { PermissionStatus } from '@/infrastructure/interfaces/location';

import { usePermissionsStore } from '../store/usePermissions';


const PermissionsCheckerProvider = ({ children }: PropsWithChildren) => {

  const { locationStatus, checkLocationPermission } = usePermissionsStore();
  const [isMounted, setIsMounted] = useState(false);

  // Esperar a que el componente esté montado antes de navegar
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || locationStatus === PermissionStatus.CHECKING) {
      return;
    }

    if (locationStatus === PermissionStatus.GRANTED) {
      router.replace('/map');
    } else {
      // DENIED, UNDETERMINED, etc. -> ir a pantalla de permisos
      router.replace('/permissions');
    } 
  }, [locationStatus, isMounted]);

  useEffect(() => {
    checkLocationPermission();
  }, [checkLocationPermission]);



  // verificar el estado de la app
  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
    
      // si nos movemos a otra app, vemos el estado de la app
      // los posibles valores son: active, inactive, background, tenemos 30 segundos para hacer algo antes de que la app entre en modo hibernacion
      console.log('nextAppState', nextAppState);

      if (nextAppState === 'active') {
        checkLocationPermission();
      }
    })


    // limpiar el subscription porque es un listener que se ejecuta cada vez que se cambia el estado de la app
    return () => {
      subscription.remove();
    }
  }, []);

  return <>{children}</>
}

export default PermissionsCheckerProvider