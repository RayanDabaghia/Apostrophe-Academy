import { useState } from "react";

export default function RegisterForm() {

    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
        ConfirmPassword: ""
    });

    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!input.name || !input.email || !input.password || !input.ConfirmPassword) {
            setError("All Fields Are Required");
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.email)) {
            setError("The Email Format Is Incorrect");
            return;}

        if (input.password.length < 8) {
            setError("Password Must Be At Least 8 Characters");
            return;
        }


        if (input.password !== input.ConfirmPassword) {
            setError("The Password and Confirmation Do Not Match.");
            return;
        }

        setError("Registration Successful!");

        setInput({
            name: "",
            email: "",
            password: "",
            ConfirmPassword: ""
        });
    };

    return (
        <div className="formPart">
            <form onSubmit={handleSubmit}>
             <h1>Create Account</h1>
                {error && <p style={{ color: "#667eea" }}>{error}</p>}

                <input
                   type="text"
                    value={input.name}
                    onChange={(e) => setInput({ ...input, name: e.target.value })}
                    placeholder="Enter Your Name"  />
                    
                <input
                    type="text"
                    value={input.email}
                 placeholder="Enter Your Email"
                    onChange={(e) => setInput({ ...input, email: e.target.value })}
                />

                <input
                    value={input.password}
                      type="password"
                     placeholder="Enter Your Password"
                    onChange={(e) => setInput({ ...input, password: e.target.value })}
                />

                <input
                     type="password"
                    value={input.ConfirmPassword}
                     placeholder="Confirm Your Password"
                    onChange={(e) => setInput({ ...input, ConfirmPassword: e.target.value })}
                />
                <button className="btn">Sign Up</button>
            </form>
        </div>
    );
}
