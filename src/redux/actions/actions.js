import {SET_FETCHING, SIGN_IN, SIGN_UP} from "./actionsTypes";
export const setFetching = (payload) => ({ type: SET_FETCHING, payload });
export const signUpRequest = (payload) => ({type: SIGN_UP, payload})
export const signInRequest = (payload) => ({type: SIGN_IN, payload})





// export const signUpUser = async () => {
//         try {
//             dispatch(setFetching(true));
//             const resp = await user.getAllProducts();
//             if (resp.status >= 200 && resp.status < 300) {
//                 dispatch(setProducts(resp.data));
//             }
//         } catch (err) {
//             throw new Error(err);
//     };
// };