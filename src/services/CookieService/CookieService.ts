import { reset, setUserId } from "@amplitude/analytics-browser/lib/esm/browser-client";
import Cookies from "js-cookie"
import { isDev } from "utils/WebUtils"
import { v4 as uuidv4 } from 'uuid';
import CookiePrefs from "./CookiePrefs";

const anonymous = "anonymous"

// Local storage
const cookiePrefsKey = "cbpCookiePrefs"
const cookieBannerKey = "cookieBannerDismissed"

export const setCookiePrefs = (prefs: CookiePrefs) => {
    localStorage.setItem(cookiePrefsKey, JSON.stringify(prefs))
    applyCookiePrefs(prefs)
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

const newUserId = (): string => {
    return isDev()? "test-user" :
        getCookiePrefs().analyticsAllowed? uuidv4() :
        anonymous
}

const setLocalUserId = (userId: string) => {
    Cookies.set(userIdKey, userId, { expires: 365 })
}

export const getUserId = (): string => {
    var userId = Cookies.get(userIdKey)
    if(!userId){
        userId = newUserId()
        setLocalUserId(userId)
    }
    return userId
}


const newSessionId = (): string => {
    return getCookiePrefs().analyticsAllowed? uuidv4() : anonymous
}

export const getSessionId = (): string => {
    var sessionId = Cookies.get(sessionIdKey)
    if(!sessionId){
        sessionId = newSessionId()
        Cookies.set(sessionIdKey, sessionId)
    }
    return sessionId
}

// cookie utils
export const applyCookiePrefs = (prefs: CookiePrefs) => {
    if(!prefs.analyticsAllowed){
        Cookies.set(userIdKey, anonymous, { expires: 365 })
        Cookies.set(sessionIdKey, anonymous)
        reset()
    }
    else {
        var userId = getUserId()
        if(userId === anonymous){
            userId = newUserId()
            setLocalUserId(userId)
            setUserId(userId)
        }
        let sessionId = getSessionId()
        if(sessionId === anonymous){
            Cookies.set(sessionIdKey, newSessionId())
        }
    }
}