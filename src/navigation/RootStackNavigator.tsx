import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../../AuthContext";
import { RootStackParamList } from "./types";
import { DetailRecipe, Login, Onboarding, Register } from "../screens";
import MainTabNavigator from "./MainTabNavigator";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
    const { state } = useAuth()
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {
                    state.isAuthenticated ? (
                        <>
                            <Stack.Screen name="MainTab" component={MainTabNavigator} options={{ headerShown: false, headerTitleAlign: 'center' }} />
                            <Stack.Screen name="DetailRecipe" component={DetailRecipe} options={{ headerShown: false, headerTitleAlign: 'center' }} />
                        </>
                    )
                        :
                        (
                            <>
                                <Stack.Screen name="OnBoarding" component={Onboarding} options={{ headerShown: false }} />
                                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                                <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
                            </>
                        )
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStackNavigator;