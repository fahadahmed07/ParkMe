import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator, Header } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import * as Routes from '../screens/index';

// Drawer navigator for main app
const AppDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: Routes.Home
    },
    Wallet: {
        screen: Routes.Wallet
    }
})


// Stack navigator for main app
const AppNavigator = createStackNavigator({
    MainScreen: {
        screen: AppDrawerNavigator,
        // navigationOptions: {
        //     header: null
        // }
    },
})

// Stack navigator for authentication
const AuthNavigator = createStackNavigator({
    Login: {
        screen: Routes.Login,
        navigationOptions: {
            header: null
        }
    },
    Phone: {
        screen: Routes.PhoneNumber,
        navigationOptions: {
            title: 'Phone number',
            headerStyle: {
                backgroundColor: '#fff',
                shadowOpacity: 0,
                elevation: 0,
            },
        }
    },
    Verification: {
        screen: Routes.PhoneVerification,
        navigationOptions: {
            title: 'Verification',
            headerStyle: {
                backgroundColor: '#fff',
                shadowOpacity: 0,
                elevation: 0,
            },
        }
    },
    Password: {
        screen: Routes.Password,
        navigationOptions: {
            title: 'Password',
            headerStyle: {
                backgroundColor: '#fff',
                shadowOpacity: 0,
                elevation: 0,
            },
        }
    },
    // initialRouteName: "Login"
});

// Switch navigator to switch from athutication to main app
const MainNavigator = createSwitchNavigator({
    Auth: {
        screen: AuthNavigator
    },
    App: {
        screen: AppNavigator
    }
})

export default createAppContainer(MainNavigator);