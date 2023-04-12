import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { HeroImage } from '../assets'


const HomeScreen = () => {

const navigation = useNavigation()

useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false
    })
}, [])

  return (
    <SafeAreaView className="bg-white flex-1 relative">
        {/*First section */}
        <View className="flex-row px-6 mt-8 items-center space-x-2"> 
            <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
                <Text className="text-[#4DABB7] text-3xl font-semibold">Go</Text>
            </View>

            <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
        </View>

        {/*Second section*/}
        <View className="px-6  mt-8 space-y-3">
            <Text className="text-[#3C6072] text-[42px]">Enjoy the trip with</Text>
            <Text className="text-[#4DABB7] text-[38px] font-bold">Good Moments</Text>
            <Text className="text-[#3C6072]">When you look out the window and see gray skies, and temperatures have been near zero for weeks.. </Text>
        </View>

        {/*Circle section */}
        <View className="w-[350px] h-[350px] bg-[#4DABB7] rounded-full absolute bottom-28 -right-36"></View>
        <View className="w-[350px] h-[350px] bg-[#E99265] rounded-full absolute -bottom-28 -left-36"></View>

        {/*Image container */}
        <View className="flex-1 relative items-center justify-center">
            <Image source={HeroImage}
                    className="w-full h-full object-cover mt-20"/>

            <View className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center">
                <TouchableOpacity>
                    <View className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]">
                        <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen