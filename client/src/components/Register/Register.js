import React, { useState } from 'react';

function Authentication() {

    const [names, setNames] = useState("");
    const [emails, setEmails] = useState("");
    const [passwords, setPasswords] = useState("");
    const [passwords2, setPasswords2] = useState("");
    // const [ errors, setErrors ] = useState({});

    // const onChange = event => {
    //     event.preventDefault();

    // }

    const onClick = event => {
        event.preventDefault();
    }

    const newUser = {
        name: names,
        email: emails,
        password: passwords,
        password2: passwords2
    };
    console.log(newUser);


    return (
        <div>
            <div className="form">
                <form>
                    <h5>Name</h5>
                    <input className="form__name"
                        onChange={event => setNames(event.target.value)}
                        value={names}
                        type="text"
                        id="name"
                    />
                    <h5>email</h5>
                    <input className="form__name"
                        onChange={event => setEmails(event.target.value)}
                        value={emails}
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
                    <h5>Confirm Password</h5>
                    <input className="form__name"
                        onChange={event => setPasswords2(event.target.value)}
                        value={passwords2}
                        type="password"
                        id="password2"
                    />
                    <button onClick={onClick}>Register</button>

                </form>
            </div>
        </div>
    )
}

export default Authentication
