import * as firebase from "firebase";
import { toast } from "../utils/toast";
import 'firebase/storage'
const config = {
    apiKey: "AIzaSyALBYDREQbfpv8pwhR11uW2h0rmW-C-Udg",
    authDomain: "aplikasi-c49ae.firebaseapp.com",
    projectId: "aplikasi-c49ae",
    storageBucket: "aplikasi-c49ae.appspot.com",
    messagingSenderId: "261987671741",
    appId: "1:261987671741:web:1fb4c8ded81ac9e00761d4",
    measurementId: "G-XLV9FT3E28"
};

firebase.default.initializeApp(config);

export const storage = firebase.default.storage()

interface Payload {
    email: string | null | undefined;
    password: string | null | undefined;
}


export function getCurrentUser() {
    return new Promise<firebase.default.User>((resolve, reject) => {
        const unsubscribe = firebase.default.auth().onAuthStateChanged((user) => {
            if (user) {
                resolve(user);
            }
            unsubscribe();
        });
    });
}

export async function loginUser(payload: Payload) {
    try {
        if (payload.email && payload.password) {
            const res = await firebase.default
                .auth()
                .signInWithEmailAndPassword(payload.email, payload.password);
            console.log(res);
            toast({ message: "success login !" });
            return true;
        }
    } catch (error) {
        toast({ message: error.message });
        return false;
    }
}

export async function registerUser(payload: Payload) {
    try {
        if (payload.email && payload.password) {
            const res = await firebase.default.auth().createUserWithEmailAndPassword(payload.email, payload.password);
            console.log(res)
            toast({ message: "success register !" });
            return true;
        }
    } catch (error) {
        toast({ message: error.message })
    };
    return false;
}

export function logoutUser() {
    firebase.default
        .auth()
        .signOut()
        .then((_) => {
            toast({ message: "success logout !" });
        })
        .catch((err) => {
            toast({ message: err.message });
        });
}
