import React, { useState } from "react";
import Form from "./Form";
import userInfo from "./ProvideContext";
const MyApp = () => {
    const [user, setUser] = useState(null)
    return <div className="flex justify-center h-screen items-center">
        <userInfo.Provider value={{ user, setUser }}>
            <Form />
        </userInfo.Provider>
    </div>;
};

export default MyApp;
