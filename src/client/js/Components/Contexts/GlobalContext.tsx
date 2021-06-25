import React from "react";

interface iContext {
	loading: boolean,
	setLoading: (b: boolean) => void
}

export default React.createContext<iContext>(null);