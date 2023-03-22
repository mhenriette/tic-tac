import React, { useContext } from "react";
import Button from "./Button";
import CreateTheme from "./CreateTheme";

const Form = () => {
    const theme = useContext(CreateTheme)
    return <form className={`p-5 flex justify-center border-gray-200 border rounded-lg flex-col gap-5 ${theme === 'dark' && 'bg-gray-700 text-white'}`}>
        <h1>Welcome To Our Page</h1>
        <div className="flex gap-5 items-center">
            <Button>Sign Up</Button>
            <Button>Log in</Button>
        </div>
    </form>;
};

export default Form;
