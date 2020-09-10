// import axios from "axios";
// import { isExpireToken } from "../utils/jwt";
// import { store } from "../App";
// import { loadingOff, loadingOn } from "../actions/loading/handleLoading";
// import handleToast from "../utils/handleToast";
// import additionalUrls from "./additionalUrls";
//
// const baseURL: string | undefined = process.env.API_URL;
//
// const axiosInstance: any = axios.create({ baseURL });
// const secondInstance: any = axios.create({ baseURL });
//
// const addParams = (url: string, params: any = {}) =>
//   Object.keys(params).length
//     ? `${url}?${Object.keys(params)
//         .map((key) => `${key}=${params[key]}`)
//         .join("&")}`
//     : url;
//
// const makeRequest = (method: string, url: string, ...params: any) =>
//   axiosInstance[method](`${url}`, ...params);
//
// const request = (method: string, url: string) => (...params: any) =>
//   makeRequest(method, url, ...params);
//
// const getRefreshToken = async () => {
//   const refreshToken = localStorage.getItem("refreshToken");
//   const response = await secondInstance.post(
//     baseURL + additionalUrls.refreshToken,
//     {
//       refresh_token: refreshToken,
//     }
//   );
//   localStorage.setItem("token", response.data.access_token);
//   return response.data.access_token;
// };
//
// axiosInstance.interceptors.request.use(async (config: any) => {
//   //@ts-ignore
//   store.dispatch(loadingOn());
//   const token = localStorage.getItem("token");
//
//   if (token) {
//     const isExpire = isExpireToken(token);
//     let requestWent = false;
//
//     if (isExpire && requestWent) {
//       requestWent = true;
//       const newToken = await getRefreshToken();
//       localStorage.setItem("token", newToken);
//       config.headers.Authorization = `Bearer ${newToken}`;
//       requestWent = false;
//       return config;
//     }
//
//     config.headers.Authorization = `Bearer ${token}`;
//     return config;
//   }
//
//   return config;
// });
//
// axiosInstance.interceptors.response.use(
//   (response: any) => {
//     store.dispatch(loadingOff());
//     return response;
//   },
//   (reject: any) => {
//     if (reject.response && reject.response.status === 401) {
//       localStorage.removeItem("token");
//       localStorage.removeItem("refreshToken");
//     }
//
//     const data = reject.response.data;
//
//     if (reject.response.status !== 401) {
//       if (data && data.field_errors) {
//         data.field_errors.forEach((error: any) =>
//           handleToast("error", error.message)
//         );
//       } else if (data && data.errors) {
//         data.errors.forEach((error: any) =>
//           handleToast("error", error.message)
//         );
//       } else {
//         handleToast("error", "Something went wrong");
//       }
//     }
//
//     store.dispatch(loadingOff());
//
//     return reject;
//   }
// );
//
// export const api = {
//   getAllCountries: () =>
//     request(
//       "get",
//       addParams(baseURL + additionalUrls.allCountries, {
//         offset: 0,
//         limit: 235,
//       })
//     )(),
//
//   getFAQ: () => request("get", baseURL + additionalUrls.faq)(),
//
//   getTopicEnums: () => request("get", baseURL + additionalUrls.topicEnums)(),
//
//   FAQMessage: (name: string, email: string, topic: string, message: string) =>
//     request(
//       "post",
//       baseURL + additionalUrls.message
//     )({
//       name,
//       email,
//       topic,
//       message,
//     }),
//
//   getPopularCountries: () =>
//     request("get", baseURL + additionalUrls.popularCountries)(),
//
//   getAllSinatCredits: () =>
//     request(
//       "get",
//       addParams(baseURL + additionalUrls.allSearchCountry, {
//         type: "payasyougo",
//         expand: "countries",
//       })
//     )(),
//
//   getAllSubscriptions: () =>
//     request(
//       "get",
//       addParams(baseURL + additionalUrls.allSearchCountry, {
//         type: "sinatout",
//         expand: "countries",
//       })
//     )(),
//
//   findCountry: (query: string) =>
//     request(
//       "get",
//       addParams(baseURL + additionalUrls.allSearchCountry, {
//         filter: query,
//         expand: "countries",
//       })
//     )(),
//
//   login: (formLogin: string, formPassword: string) =>
//     request(
//       "post",
//       baseURL + additionalUrls.login
//     )({
//       username: formLogin,
//       password: formPassword,
//     }),
//
//   getUser: (id: string) =>
//     request(
//       "get",
//       addParams(baseURL + additionalUrls.user + `/${id}`, {
//         expand: "preference",
//       })
//     )(),
//
//   changeUser: (
//     id: string,
//     first_name: string,
//     last_name: string,
//     email: string
//   ) =>
//     request(
//       "patch",
//       baseURL + additionalUrls.userProfile
//     )({
//       user_id: id,
//       first_name,
//       last_name,
//       email,
//     }),
//
//   createUserPreferences: (id: string) =>
//     request(
//       "post",
//       baseURL + additionalUrls.user + `/${id}/preferences`
//     )({
//       lang: "en",
//       ivr_lang: "en",
//       currency: "usd",
//       email_notification: false,
//       text_notification: false,
//       email: "",
//       telephone: "",
//     }),
//
//   changeUserPreferences: (
//     id: string,
//     lang: string,
//     ivr_lang: string,
//     currency: string,
//     email_notification: boolean,
//     text_notification: boolean,
//     email: string,
//     telephone: string
//   ) =>
//     request(
//       "patch",
//       baseURL + additionalUrls.user + `/${id}/preferences`
//     )({
//       lang,
//       ivr_lang,
//       currency,
//       email_notification,
//       text_notification,
//       email,
//       telephone,
//     }),
//
//   getRegistrationCode: (telephone: string) =>
//     request(
//       "post",
//       baseURL + additionalUrls.getRegistrationCode
//     )({
//       telephone,
//     }),
//
//   verifyRegistrationCode: (telephone: string, code: string) =>
//     request(
//       "post",
//       baseURL + additionalUrls.verifyRegistrationCode
//     )({
//       telephone,
//       code,
//     }),
//
//   signUp: (telephone: string, pin: string) =>
//     request(
//       "post",
//       baseURL + additionalUrls.register
//     )({
//       telephone,
//       pin,
//       method: "telephone",
//     }),
//
//   changeCreds: (
//     user_id: string,
//     oldQuery: string,
//     newQuery: string,
//     type: string
//   ) =>
//     request(
//       "patch",
//       baseURL + additionalUrls.credentials
//     )({
//       user_id,
//       old: oldQuery,
//       new: newQuery,
//       type,
//     }),
//
//   createCreds: (
//     user_id: string,
//     oldQuery: string,
//     newQuery: string,
//     type: string
//   ) =>
//     request(
//       "post",
//       baseURL + additionalUrls.credentials
//     )({
//       user_id,
//       old: oldQuery,
//       new: newQuery,
//       type,
//     }),
//
//   createPass: (user_id: string, newQuery: string) =>
//     request(
//       "patch",
//       baseURL + additionalUrls.user + `/${user_id}`
//     )({
//       password: newQuery,
//     }),
//
//   getUserSubscription: (id: string) =>
//     request(
//       "get",
//       addParams(baseURL + additionalUrls.billingUser + `/${id}`, {
//         expand: "plan",
//       })
//     )(),
//
//   deleteUserSubscription: (url: string) => request("delete", url)(),
//
//   billingSubscription: (
//     trial_days: number,
//     nowDate: string,
//     billing_currency: string,
//     billing_frequency: number,
//     user_id: string,
//     plan_id: string,
//     stripe_token: string
//   ) =>
//     request(
//       "post",
//       baseURL + additionalUrls.billingSubscription
//     )({
//       trial_days,
//       trial_start: nowDate,
//       subs_date: nowDate,
//       billing_currency,
//       billing_frequency,
//       user_id,
//       plan_id,
//       stripe_token,
//     }),
//
//   billingCredit: (
//     trial_days: number,
//     nowDate: string,
//     billing_currency: string,
//     billing_frequency: number,
//     user_id: string,
//     plan_id: string,
//     stripe_token: string
//   ) =>
//     request(
//       "post",
//       baseURL + additionalUrls.billingCredit
//     )({
//       trial_days,
//       trial_start: nowDate,
//       subs_date: nowDate,
//       billing_currency,
//       billing_frequency,
//       user_id,
//       plan_id,
//       stripe_token,
//     }),
//
//   getAccessNumbers: (offset: number, limit: number) =>
//     request(
//       "get",
//       addParams(baseURL + additionalUrls.accessNumbers, {
//         offset,
//         limit,
//       })
//     )(),
//
//   getAccessNumbersWithUrl: (url: string) => request("get", url)(),
//
//   getAccessNumbersByIso: (iso: string) =>
//     request(
//       "get",
//       addParams(baseURL + additionalUrls.accessNumbers, {
//         filter: iso,
//       })
//     )(),
//
//   getSinatNumbers: (offset: number, limit: number) =>
//     request(
//       "get",
//       addParams(baseURL + additionalUrls.sinatNumbers, {
//         offset,
//         limit,
//       })
//     )(),
//
//   getUserNumbers: (id: string) =>
//     request("get", baseURL + additionalUrls.userNumbers + `/${id}`)(),
//
//   getSinatNumbersWithUrl: (url: string) => request("get", url)(),
//
//   getSinatNumbersByIso: (iso: string) =>
//     request(
//       "get",
//       addParams(baseURL + additionalUrls.sinatNumbers, {
//         filter: iso,
//       })
//     )(),
//
//   billingSinatNumber: (
//     subs_date: string,
//     start_date: string,
//     billing_currency: string,
//     billing_frequency: number,
//     plan_id: string,
//     user_id: string,
//     stripe_token: string,
//     number: string
//   ) =>
//     request(
//       "post",
//       baseURL + additionalUrls.billingSubscription
//     )({
//       subs_date,
//       start_date,
//       billing_currency,
//       billing_frequency,
//       plan_id,
//       user_id,
//       is_enabled: true,
//       stripe_token,
//       type: "sinatnumber",
//       metadata: {
//         number,
//       },
//     }),
//
//   getCDR: (user_id: string) =>
//     request(
//       "get",
//       baseURL + additionalUrls.cdr + `/${user_id}?offset=0&limit=10`
//     )(),
//
//   getCDRByURL: (url: string) => request("get", url)(),
//
//   getCDRBySort: (user_id: string, sortParams: any) =>
//     request(
//       "get",
//       addParams(baseURL + additionalUrls.cdr + `/${user_id}`, {
//         ...sortParams,
//       })
//     )(),
//
//   getCDRBySearch: (user_id: string, search: string) =>
//     request(
//       "get",
//       addParams(baseURL + additionalUrls.cdr + `/${user_id}`, {
//         limit: 0,
//         offset: 10,
//         search,
//       })
//     )(),
// };
