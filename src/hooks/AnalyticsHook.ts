import {  useEffect } from 'react'
import {  useLocation } from 'react-router-dom'
import Cookies from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';
import { isDev } from 'utils/WebUtils';
import { init, track } from '@amplitude/analytics-browser';

export const usePageViews = () => {
  let location = useLocation()

  useEffect(
    () => {
        track('page-hit', {
            sessionid: getSessionId(),
            path: location.pathname,
            referrer: document.referrer
        })
        console.log(document.referrer)
    },
    [location]
  )
}

export const setupAnalytics = () => {
    init("6b4c99b57541ac5109fc2da3a3ebe1a0", getUserId(), {
        disableCookies: true
    })
}

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