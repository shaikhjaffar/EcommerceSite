const INIT_STATE = {
    carts: []
};


export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_CART":

        const IteamIndex = state.carts.findIndex((iteam)=> iteam.id === action.payload.id);

        if(IteamIndex >= 0){
            state.carts[IteamIndex].qnty +=1
            return {
                ...state,
                carts:[...state.carts]
            }
        }else{
            const temp = {...action.payload,qnty:1}
             return {
                ...state,
                carts: [...state.carts, temp]
            }
        }

        default:
            return state
    }
}