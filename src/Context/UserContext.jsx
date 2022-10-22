import React, { createContext, useEffect, useState } from 'react';
import app from './../Firebase/firebase.config';
import {
	createUserWithEmailAndPassword,
	FacebookAuthProvider,
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	sendEmailVerification,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from 'firebase/auth';

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(true);
	const googleProvider = new GoogleAuthProvider();
	const faceBookProvider = new FacebookAuthProvider();

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signIn = (email, password) => {
		setLoading(true);

		return signInWithEmailAndPassword(auth, email, password);
	};

	const updateUserProfile = (profile) => {
		setLoading(true);

		return updateProfile(auth.currentUser, profile);
	};

	const googleSignIn = () => {

		return signInWithPopup(auth, googleProvider);
	};

	const faceBookSignIn = () => {

		return signInWithPopup(auth, faceBookProvider);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			// if (currentUser === null || currentUser.emailVerified) {
			// }
			console.log(currentUser);
			setUser(currentUser);
			setLoading(false);
		});

		return () => unsubscribe();
	}, []);

	const logOut = () => {
		return signOut(auth);
	};

	const verifyEmail = () => {
		return sendEmailVerification(auth.currentUser);
	};

	const authInfo = {
		createUser,
		signIn,
		user,
		updateUserProfile,
		logOut,
		loading,
		googleSignIn,
		faceBookSignIn,
		verifyEmail,
		setLoading,
	};

	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default UserContext;
