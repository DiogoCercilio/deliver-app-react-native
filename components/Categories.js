import { ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import RestaurantsService from '../services/RestaurantsService'

const Categories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        RestaurantsService.getCategories().then(res=> setCategories(res || []))
    }, [])

    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {/* Category Card */}
            {categories.map(({ id, image, title }) =>
                <CategoryCard key={id} image={image} title={title} />
            )}
        </ScrollView>
    )
}

export default Categories