import APP_HOST from "../configs/envVariables";
//auth routes : 
export const registerRoute = `${APP_HOST}/api/v1/auth/signup`
export const loginRoute = `${APP_HOST}/api/v1/auth/signin`
export const logoutRoute = `${APP_HOST}/api/v1/auth/logout`;
export const setAvatarRoute = `${APP_HOST}/api/v1/auth/setavatar`;

export const allUsersRoute = `${APP_HOST}/api/v1/auth/allusers`

//message routes :
export const sendMessageRoute = `${APP_HOST}/api/v1/messages/addmessage`
export const getMessageRoute = `${APP_HOST}/api/v1/messages/getmessage`

//cloud routes : 
export const uploadMedia = `${APP_HOST}/api/v1/cloud/upload`
