import Cookies from "js-cookie"
import { isDev } from "utils/WebUtils"
import { v4 as uuidv4 } from 'uuid';
import CookiePrefs from "./CookiePrefs";

const cookiePrefsKey = "cbpCookiePrefs"
const userIdKey = "cbpUserId"
const sessionIdKey = "cbpSessionId"

export const setCookiePrefs = (prefs: CookiePrefs) => {
    Cookies.set(cookiePrefsKey, 
        JSON.stringify(prefs), 
        { expires: 365, sameSite: "Lax" })
}

export const getCookiePrefs = (): CookiePrefs => {
    let prefs = Cookies.get(cookiePrefsKey)
    return prefs? JSON.parse(prefs) : { analyticsAllowed: false }
}

export const getUserId = (): string => {
    var userId = Cookies.get(userIdKey)
    if(!userId){
        userId = isDev()? "test-user" : uuidv4()
        Cookies.set(userIdKey, userId, { expires: 365 })
    }
    return userId
}

export const getSessionId = (): string => {
    var sessionId = Cookies.get(sessionIdKey)
    if(!sessionId){
        sessionId = uuidv4()
        Cookies.set(sessionIdKey, sessionId)
    }
    return sessionId
}