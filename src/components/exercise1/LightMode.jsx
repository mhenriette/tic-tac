import React, { useState } from "react";
// import { createContext } from "react";
import Form from "./Form";
import CreateTheme from "./CreateTheme";

const LightMode = () => {
    const [theme, setTheme] = useState('light')

    return <div className="flex justify-center items-center flex-col gap-5 h-screen">
        <CreateTheme.Provider value={theme}>
            <Form />
            <label className="flex items-center gap-2">

                <input type='checkbox' checked={theme === 'dark'}
                    onChange={(e) => { setTheme(e.target.checked ? 'dark' : 'light') }}
                />
                dark mode
            </label>
        </CreateTheme.Provider>

    </div>;
};

export default LightMode;
