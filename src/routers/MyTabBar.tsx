import React, { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Configs, PADDING_BOTTOM } from '@/commons/Configs';
import Languages from '@/commons/Languages';
import ScreenNames from '@/commons/ScreenNames';
import { Touchable } from '@/components';
import { COLORS, Styles } from '@/theme';
import HomeIc from '@/assets/images/ic_home_active.svg'
import AccountIc from '@/assets/images/ic_account_active.svg'
import { observer } from 'mobx-react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@/containers/home/Home';
import Account from '@/containers/account/Account';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
const TabsData = [
    {
        name: ScreenNames.home,
        label: Languages.tabs.home,
        icon: <HomeIc width={20} height={20} />
    },
    {
        name: ScreenNames.account,
        label: Languages.tabs.account,
        icon: <AccountIc width={20} height={20} />
    },
];

const screenOptions = { headerShown: false };

const Tab = createBottomTabNavigator();

export const MyTabBar = ({ state, navigation, descriptors }: any) => {
    
    return (
        <View style={styles.tabContainer}>
            {state.routes.map((route: { name: string; key: any }, index: any) => {
                const tab = TabsData.filter((item) => item.label === route.name)[0];
                const isFocused = state.index === index;

                const onPress = useCallback(() => {
                    navigation.navigate(route.name);
                }, [index, isFocused, route.key, route.name]);

                const color = isFocused
                    ? { color: COLORS.GREEN }
                    : { color: COLORS.GRAY_6 };

                return (
                    <Touchable onPress={onPress} style={styles.tab} key={route.key}>
                        {tab?.icon}
                        <Text style={[styles.tabLabel, color]}>{tab?.label}</Text>
                    </Touchable>
                );
            })}
        </View>
    );
};

const MyBottomTabs = observer(() => {
    const renderTabBar = useCallback((props: any) => <MyTabBar {...props} />, []);
    const getTabBarVisibility = useCallback((route: any) => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if (
            routeName === undefined ||
            routeName === ScreenNames.home ||
            routeName === ScreenNames.account 
        ) {
            return true;
        }
        return false;
    }, []);

    const getOption = useCallback(
        ({ route }: any) => {
            return {
                tabBarVisible: getTabBarVisibility(route)
            } as any;
        },
        [getTabBarVisibility]
    );
    return (
        <Tab.Navigator screenOptions={screenOptions} tabBar={renderTabBar}>
            <Tab.Screen
                name={Languages.tabs.home}
                component={Home}
                options={getOption}
            />
            <Tab.Screen
                name={Languages.tabs.account}
                component={Account}
                options={getOption}
            />
        </Tab.Navigator>
    )
})
export default MyBottomTabs

const styles = StyleSheet.create({
    tabContainer: {
        ...Styles.shadow,
        flexDirection: 'row',
        paddingBottom: PADDING_BOTTOM,
        backgroundColor: COLORS.WHITE,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderTopColor: COLORS.GRAY_5,
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingVertical: 5,
    },
    tabIcon: {
        fontSize: Configs.IconSize.size22,
        padding: 4
    },
    tabLabel: {
        ...Styles.typography.medium,
        fontSize: Configs.FontSize.size12
    }
});
