import { COLORS } from '@/theme';
import { observer } from 'mobx-react';
import React from 'react';
import {
    StyleSheet, View, Text
} from 'react-native';
import StarIc from '@/assets/images/star.svg'

const Home = observer(() => {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text >Home</Text>
            <StarIc width={50} height={50}/>
        </View>
    );
});

export default Home;


const styles = StyleSheet.create({
   
});
