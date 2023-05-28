import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Privileges from './screens/Privileges';
import Vouchers from './screens/Vouchers';
import Explore from './screens/Explore';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import Splash from './screens/Splash';

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'poppins': require('./assets/fonts/Poppins-Medium.ttf')
  })

  if (!fontsLoaded) return (
    <Splash />
  )

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#c11c56' }}>
        <NavigationContainer>
          <Tab.Navigator
              screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#c11c56',
                tabBarStyle: {
                  position: 'absolute',
                  left: 25,
                  borderRadius: 24,
                  alignSelf: 'center',
                  height: 75,
                  width: Dimensions.get('window').width - 50,
                  marginBottom: 25,
                },
                tabBarLabelStyle: {
                  fontFamily: 'poppins',
                  fontSize: 12,
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                }
              }}>
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home-outline" size={size} color={color} />
              }}/>
            <Tab.Screen
              name="Privileges"
              component={Privileges}
              options={{
                tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="crown-outline" size={size} color={color} />
              }}/>
            <Tab.Screen
              name="Vouchers"
              component={Vouchers}
              options={{
                tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="ticket-confirmation-outline" size={size} color={color} />
              }}/>
            <Tab.Screen
              name="Explore"
              component={Explore}
              options={{
                tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="compass-outline" size={size} color={color} />
              }}/>
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
}
