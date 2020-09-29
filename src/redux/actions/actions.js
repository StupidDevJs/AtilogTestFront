// import {SET_FETCHING} from "./actionsTypes";
//
// export const setFetching = (payload) => ({ type: SET_FETCHING, payload });
//
//
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