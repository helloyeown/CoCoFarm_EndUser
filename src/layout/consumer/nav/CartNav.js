import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartThunk } from "../../../reducers/consumer/cartSlice";


const CartNav = () => {

    console.log("CART!!!!!")

    const {email, nickname} = useSelector(state => state.login)

    const {items} = useSelector(state => state.cart)

    const dispatch = useDispatch()

    // 로그인 시 cart개수를 가져오는 함수.
    useEffect(() => {

        if(!email) {
            return
        }
        dispatch(getCartThunk(email))

    }, [email])

    return ( 
    
        <div className="text-2xl">
            장바구니 {items.length}
        </div>

   );
   
}
 
export default CartNav;