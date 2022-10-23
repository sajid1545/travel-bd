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
		setLoading(true);

		return signInWithPopup(auth, googleProvider);
	};

	const faceBookSignIn = () => {
		setLoading(true);

		return signInWithPopup(auth, faceBookProvider);
	};

	const logOut = () => {
		setLoading(true);

		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			if (currentUser == null || currentUser.emailVerified) {
				setUser(currentUser);
			}
			setLoading(false);
			console.log(currentUser);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	

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
