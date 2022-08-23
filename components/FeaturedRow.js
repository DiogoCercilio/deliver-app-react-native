import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import RestaurantsService from '../services/RestaurantsService'

const FeaturedRow = ({ id, title, description, featuredCategory }) => {
    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        RestaurantsService.getByCategory(featuredCategory).then(res => setRestaurants(res))
    }, [])

    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-lg">
                    {title}
                </Text>
                <ArrowRightIcon color="#00ccbb" />
            </View>

            <Text className="text-xs text-gray-500 px-4">
                {description}
            </Text>

            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
                showsHorizontalScrollIndicator={false}
                className="pt-4"
            >
                {restaurants && restaurants.map(({ id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat }) =>
                    <RestaurantCard
                        id={id}
                        imgUrl={imgUrl}
                        title={title}
                        rating={rating}
                        genre={genre}
                        address={address}
                        short_description={short_description}
                        dishes={dishes}
                        long={long}
                        lat={lat}
                    />)
                }
            </ScrollView>
        </View>
    )
}

export default FeaturedRow