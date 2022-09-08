import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import RestaurantsService from '../services/RestaurantsService'
import { useToast } from "react-native-toast-notifications"

const FeaturedRow = ({ id, title, description, featuredCategory }) => {
    const [restaurants, setRestaurants] = useState([])
    const toast = useToast();

    useEffect(() => {
        RestaurantsService.getByCategory(featuredCategory)
            .then((res = []) => setRestaurants(res))
            .catch((err) => toast.show(err.message, { type: 'warning' }))
    }, [])

    return (
        <View>
            {!!restaurants.length && <>
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
                    {restaurants.map(({ id, imgUrl, title, rating, genre, address, short_description, long, lat }) =>
                        <RestaurantCard
                            key={id}
                            id={id}
                            imgUrl={imgUrl}
                            title={title}
                            rating={rating}
                            genre={genre}
                            address={address}
                            short_description={short_description}
                            long={long}
                            lat={lat}
                        />)
                    }
                </ScrollView>
            </>}
        </View>
    )
}

export default FeaturedRow