import {
  initializeApp
} from 'firebase/app'
import {
  getAuth
} from "firebase/auth"
import {
  getFirestore
} from 'firebase/firestore'
import {
  getAnalytics
} from "firebase/analytics"

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig()

  const firebaseConfig = {
    apiKey: "AIzaSyDvTzIvnXqqB4wGYgGgXA9-Ddt7CWi-m_A",
    authDomain: "denisoed-1994.firebaseapp.com",
    projectId: "denisoed-1994",
    storageBucket: "denisoed-1994.appspot.com",
    messagingSenderId: "54322078985",
    appId: "1:54322078985:web:ed81d592cf828c0a6f1fd8",
    measurementId: "G-NTMP553764"
  };

  const app = initializeApp(firebaseConfig)

  const analytics = getAnalytics(app)
  const auth = getAuth(app)
  const firestore = getFirestore(app)

  nuxtApp.vueApp.provide('auth', auth)
  nuxtApp.provide('auth', auth)

  nuxtApp.vueApp.provide('firestore', firestore)
  nuxtApp.provide('firestore', firestore)
})