import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import HomeScreen from './Home';
import HouseScreen from './HouseScreen';
function MyStack(navigation){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
            />
            <Stack.Screen
            name="HouseScreen"
            component={HouseScreen}/>
        </Stack.Navigator>
    )
}

export default MyStack;