// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut as logOut,
} from "firebase/auth";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useState } from "react";
import { useLocalStorage } from "./useStorage";
const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
function useFirebase() {
	const [token, setToken, removeToken] = useLocalStorage(
		"authorization",
		"bearer "
	);
	const [isLoading, setIsLoading] = useState(true);
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);
	const auth = getAuth();
	const signUpUsingPassword = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};
	function signInUsingPassword(email, password) {
		return signInWithEmailAndPassword(auth, email, password);
	}
	//const auth = something
	function signInUsingGoogle() {
		const provider = new GoogleAuthProvider();
		return signInWithPopup(auth, provider);
	}
	// const func= signInUsingGoogle;
	function signOut() {
		logOut(auth)
			.then(() => {
				removeToken();
			})
			.catch((error) => {
				const newError = {};
				newError.errorCode = error.code;
				newError.errorMessage = error.message;
				setError(newError);
			});
	}
	useEffect(() => {
		// setIsLoading(true);
		const unmount = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
				user
					.getIdToken()
					.then((jwt) => {
						setToken(token + jwt);
					})
					.catch((error) => setError(error));
				setError(null);
			} else {
				setUser(null);
			}
			setIsLoading(false);
		});
		return unmount;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const uploadImage = (file) => {
		const metadata = {
			contentType: file.type,
		};

		// Upload file and metadata to the object 'images/mountains.jpg'
		const storageRef = ref(storage, "images/" + file.name + new Date());
		const uploadTask = uploadBytesResumable(storageRef, file, metadata);
		return uploadTask;
	};
	const session = {
		token,
		setToken,
		removeToken,
	};
	const authentication = {
		setIsLoading,
		session,
		isLoading,
		error,
		setError,
		user,
		signUpUsingPassword,
		signInUsingPassword,
		signInUsingGoogle,
		signOut,
	};
	return {
		authentication,
		uploadImage,
	};
}
export default useFirebase;
