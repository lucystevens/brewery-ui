import {  useEffect } from 'react'
import {  useLocation } from 'react-router-dom'
import { isDev } from 'utils/WebUtils';
import { init, track } from '@amplitude/analytics-browser';
import { getSessionId, getUserId } from 'services/CookieService/CookieService';

export const usePageViews = () => {
  let location = useLocation()

  useEffect(
    () => {
        track('page-hit', {
            sessionid: getSessionId(),
            path: location.pathname,
            referrer: document.referrer
        })
    },
    [location]
  )
}

export const setupAnalytics = () => {
    if(!isDev()){
        init("6b4c99b57541ac5109fc2da3a3ebe1a0", getUserId(), {
            disableCookies: true
        })
    }
}

