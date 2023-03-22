import React, { useContext } from "react";
import Button from "./Button";
import userInfo from "./ProvideContext";


const Form = () => {
    const { user, setUser } = useContext(userInfo)
    if (user === null) {
        return <Button onClick={() => { setUser('Munezero') }}>{'Log in as Munezero'}</Button>
    }
    return <div>
        <h1>Welcome</h1>
        <h2>Welcome {user}</h2>




    </div>;
};

export default Form;
