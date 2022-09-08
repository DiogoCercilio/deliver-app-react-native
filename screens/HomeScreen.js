import { SafeAreaView, Text, View, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AdjustmentsIcon, ChevronDownIcon, SearchIcon, UserIcon } from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import FeaturedService from '../services/FeaturedService';

const HomeScreen = () => {
    const navigation = useNavigation()
    const [featuredCategories, setFeaturedCategories] = useState([])

    useLayoutEffect(() => navigation.setOptions({ headerShown: false }), [])
    useEffect(() => {
        FeaturedService
            .getAll()
            .then(res=> setFeaturedCategories(res))
    }, [])

    return (
        <SafeAreaView className="bg-white pt-5">
            {/* Header */}
            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                <Image
                    source={{ uri: 'https://links.papareact.com/wru' }}
                    className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                />
                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">
                        Deliver Now!
                    </Text>
                    <Text className="font-bold text-xl">
                        Current Location
                        <ChevronDownIcon size={20} color="#00ccbb" />
                    </Text>
                </View>

                <UserIcon size={35} color="#00ccbb"></UserIcon>
            </View>

            {/* Search */}
            <View className="flex-row items-center space-x-2 mx-4">
                <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3 mb-4">
                    <SearchIcon color="gray" size={20} />
                    <TextInput
                        placeholder="Restaurants and cuisiness"
                        keyboardType="default"
                    />
                </View>
                <AdjustmentsIcon color="#00ccbb" />
            </View>

            {/* Body */}
            <ScrollView className="bg-gray-100 p-3">
                {/* Categories */}
                <Categories />

                {/* Featured rows */}
                {featuredCategories.map(({id, title, description, category})=>
                    <FeaturedRow  key={id} title={title} description={description} featuredCategory={id}/>
                )}
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen