
export interface ICartItem {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    quantity: number;
}

export interface ICartState {
    isCartClicked: boolean;
    cartItems: ICartItem[];
    cartCount: number;
    totalPrice: number;
}

const CART_INITIAL_STATE:ICartState = {
    isCartClicked: false,
    cartItems: [],
    cartCount: 0,
    totalPrice: 0
}


export default CART_INITIAL_STATE;
