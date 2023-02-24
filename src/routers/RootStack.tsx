import Home from '../containers/home/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { observer } from 'mobx-react';
import React from 'react';
import ScreenNames from '../commons/ScreenNames';
import MyBottomTabs from './MyTabBar';


const screenOptions = { headerShown: false };

const Stack = createNativeStackNavigator();


const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name={ScreenNames.home} component={Home} />
        </Stack.Navigator>
    );
};

const RootStack = observer(() => {
    return(
        <MyBottomTabs/>
    )
});

export default RootStack;
