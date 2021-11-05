import React, { createContext } from "react";
import useFirebase from "../Hooks/useFirebase";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
	const { authentication } = useFirebase();
	return (
		<AuthContext.Provider value={authentication}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
