import PermissionsCheckerProvider from '@/presentation/providers/PermissionsCheckerProvider';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import 'react-native-reanimated';


export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <PermissionsCheckerProvider>
        <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="loading/index" options={{ headerShown: false }} />
        <Stack.Screen name="map/index" options={{ headerShown: false }} />
        <Stack.Screen name="permissions/index" options={{ headerShown: false }} />
      </Stack>
      </PermissionsCheckerProvider>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
