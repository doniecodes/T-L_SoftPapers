import React from 'react'
import { FormCustomHooks } from '../hooks/FormCustomHooks';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer } from "react-toastify"

export const loader = async ({ request })=> {
    const url = new URL(request.url).searchParams.get("message");
    return url;
}

const Login = () => {

    const { login, error } = FormCustomHooks();

    const handleSubmit = async (e)=> {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");

       await login({ email, password });
    }

    const errorMsg = useLoaderData();

  return (
    <>
      <ToastContainer />

      <div className="contact-form-wrapper admin-contact-form-wrapper">
        <form onSubmit={handleSubmit} action="" className='contact-form'>
          <h2 className="form-heading">
            Log In
            <span class="heading-style"></span>
          </h2>

          { errorMsg && <div className='error error-redirect'>{errorMsg}</div> }

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email"/>
            { error && <div className="error error-email">{ error.email }</div> }
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password"/>
            { error && <div className="error error-password">{ error.password }</div> }
          </div>

          <button className="submit-btn">
            Login
          </button>

        </form>
      </div>
    </>
  )
}

export default Login