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
            const index = state.items.findIndex(i => i.id === action.payload.id)

            let newBasket = [...state.items]

            if (index >= 0) {
                newBasket.splice(index, 1)
                state.items = newBasket 
            } else {
                console.warn(`Can't remove the product... ${index}, ${state.items[0].id}, ${action.payload.id}`);
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions
export const selectBasketItems = state => state.basket.items
export const selectBasketItemsWIthId = (state, _id) => state.basket.items.filter(({ id }) => id === _id)
export const selectBasketTotal = (state, _id) => state.basket.items.reduce((total, item) => total += item.price, 0)

export default basketSlice.reducer