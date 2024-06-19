import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { writable  } from "svelte/store";


export const authStore = writable({
    user: null,
    lodaing: true,
    data: {}
})

export const authHandlers = {
    signup: async (email, pass) => {
        await createUserWithEmailAndPassword(auth, email, pass)
    },
    login: async (email, pass) => {
        await signInWithEmailAndPassword(auth, email, pass)
    },
    logout: async () => {
        await signOut(auth)
    }
}