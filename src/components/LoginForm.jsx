import React, { useState } from 'react';

const LoginForm=()=>{
    return(
        <form className="form-login" >
            <div id="rectangle"></div>
            <div className="form-login__encabezado">

                <p>
                    Enter your username and password.
                        <br />
                    <br />

                </p>

            </div>
            <div className="form-login__inputs">
                <input
                    type="text"
                    type="email"
                    placeholder="Email"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    minLength='6'

                />


            </div>
            <div className="form-login__submit">
                <button type="submit">
                    <p>Log In</p>
                </button>

            </div>




        </form>
    )
}



export default (LoginForm);






    