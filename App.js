import { NavigationContainer } from '@react-navigation/native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import { store } from './store'
import { Provider } from 'react-redux'
import BasketScreen from './screens/BasketScreen';
import PreparingOrderScreen from './screens/PreparingOrder';
import DeliveryScreen from './screens/Delivery';
import { ToastProvider } from 'react-native-toast-notifications';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <ToastProvider>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Restaurant" component={RestaurantScreen} />
              <Stack.Screen name="Basket"
                component={BasketScreen}
                options={{ presentation: 'modal', headerShown: false }}
              />
              <Stack.Screen
                name="PreparingOrder"
                component={PreparingOrderScreen}
                options={{ presentation: 'fullScreenModal', headerShown: false }}
              />
              <Stack.Screen
                name="Delivery"
                component={DeliveryScreen}
                options={{ presentation: 'fullScreenModal', headerShown: false }}
              />
            </Stack.Navigator>
          </ToastProvider>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}