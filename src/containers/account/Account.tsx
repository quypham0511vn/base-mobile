import { COLORS } from '@/theme';
import { observer } from 'mobx-react';
import React from 'react';
import {
    StyleSheet, View, Text
} from 'react-native';


const Account = observer(() => {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Account</Text>
        </View>
    );
});

export default Account;


const styles = StyleSheet.create({
   
});
