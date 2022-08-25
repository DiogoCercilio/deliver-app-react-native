import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: []
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            state.items = [...state.items, action.payload]
        },
        removeFromBasket: (state, action) => {
            state.items = state.items.findIndex(i => i.id !== action.payload)
            let newBasket = [...state.items]

            if (index >= 0) {
                newBasket.splice(index, 1)
            } else {
                console.warn(`Can't remove the product...`);
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions
export const selectBasketItems = state => state.basket.items
export const selectBasketItemsWIthId = (state, _id) => state.basket.items.filter(({ id }) => id === _id)

export default basketSlice.reducer