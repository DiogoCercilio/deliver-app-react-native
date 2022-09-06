import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

const PreparingOrderScreen = () => {
    const navigation = useNavigation()

    useEffect(()=> {
        setTimeout(()=> {
            navigation.navigate('Delivery')
        }, 4000)
    }, [])

    return (
        <SafeAreaView className="bg-[#02c5b9] flex-1 justify-center items-center">
            <Animatable.Text
                animation="slideInUp"
                iterationCount={10}
                className="px-10 text-2xl text-white text-center"
            >
                Waiting for the restaurant to accept you order!
            </Animatable.Text>

            <Animatable.Image
                source={require('../assets/preparing-order.gif')}
                animation="slideInUp"
                iterationCount={1}
                className="h-96 w-96"
            />

            <Progress.Bar progress={0.3} width={200} indeterminate={true} color="#fff"/>
        </SafeAreaView>
    )
}

export default PreparingOrderScreen