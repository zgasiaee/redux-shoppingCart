
const initialState = {
  selectedItem: [],
  itemCounter: 0,
  total: 0,
  checkout: false
}

const sumItems = (items) => {
  const itemCounter = items.reduce((total,product) => total + product.quantity , 0)
  const total = items.reduce((total,product) => total + product.quantity * product.price , 0).toFixed(2)
  return {itemCounter,total}
}

const cartReducer = (state = initialState , action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      if (!state.selectedItem.find(item => item.id === action.payload.id)) {
        state.selectedItem.push({ ...action.payload, quantity: 1 })
      }
      return {
        ...state,
        selectedItem: [...state.selectedItem],
        ...sumItems(state.selectedItem),
         checkout:false
      }

    case 'REMOVE_ITEM':
      const newSelectedItem = state.selectedItem.filter(
        item => item.id !== action.payload.id
      )
      return {
        ...state,
        selectedItem: [...newSelectedItem],
        ...sumItems(newSelectedItem)
      }

      case "INCREASE":
       const increaseIndex = state.selectedItem.findIndex(item=> item.id === action.payload.id)
       state.selectedItem[increaseIndex].quantity++
       return{
         ...state,
         ...sumItems(state.selectedItem)
       }

       case "DECREASE":
        const decreaseIndex = state.selectedItem.findIndex(item=> item.id === action.payload.id)
        state.selectedItem[decreaseIndex].quantity--
        return{
          ...state,
          ...sumItems(state.selectedItem)
        }

        case "CLEAR":
          return{
             selectedItem: [],
             itemCounter: 0,
             total: 0,
             checkout: false
          }

          case "CHECKOUT":
            return{
               selectedItem: [],
               itemCounter: 0,
               total: 0,
               checkout: true
            }

        default:
           return state
  }
}

export default cartReducer;



