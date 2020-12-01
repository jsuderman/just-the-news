import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Login() {

    
    const [emails, setEmails] = useState("");
    const [passwords, setPasswords] = useState("");
    

    // const onChange = event => {
    //     event.preventDefault();

    // }

    const onClick = event => {
        event.preventDefault();
    }

    const userData = {
        
        email: emails,
        password: passwords,
        
    };
    console.log(userData);

    return (
        <div>
            <Link to="/" />
            <div className="form">
                <form>
                    
                    <h5>email</h5>
                    <input className="form__name"
                        value={emails}
                        onChange={event => setEmails(event.target.value)}
                        type="email"
                        id="email"
                    />
                    <h5>Password</h5>
                    <input className="form__name"
                        onChange={event => setPasswords(event.target.value)}
                        value={passwords}
                        type="password"
                        id="password"
                    />
                    
                    <button type="submit" onClick={onClick}>Sign In</button>

                </form>
            </div>
            
        </div>
    )
}

export default Login
