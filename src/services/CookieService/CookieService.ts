import Cookies from "js-cookie"
import { isDev } from "utils/WebUtils"
import { v4 as uuidv4 } from 'uuid';
import CookiePrefs from "./CookiePrefs";

// Local storage
const cookiePrefsKey = "cbpCookiePrefs"
const cookieBannerKey = "cookieBannerDismissed"

export const setCookiePrefs = (prefs: CookiePrefs) => {
    localStorage.setItem(cookiePrefsKey, JSON.stringify(prefs))
}

export const getCookiePrefs = (): CookiePrefs => {
    let prefs = localStorage.getItem(cookiePrefsKey)
    return prefs? JSON.parse(prefs) : { analyticsAllowed: false }
}

export const showCookieBanner = (): boolean => {
    return localStorage.getItem(cookieBannerKey) !== "true"
}

export const dismissCookieBanner = () => {
    localStorage.setItem(cookieBannerKey, "true")
}

// Cookies
const userIdKey = "cbpUserId"
const sessionIdKey = "cbpSessionId"

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