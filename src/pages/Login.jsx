import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from "formik"
import * as yup from "yup"


const Login = () => {

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    },

    onSubmit: (values) => {
      console.log(values);

    },

    validationSchema: yup.object({
      firstName: yup.string().required("First Name is required").min(3, "First Name must be at least 3 characters"),
      lastName: yup.string().required("Last Name is required").min(3, "Last Name must be at least 3 characters"),
      email: yup.string().required("Email is required").email("Invalid email format"),
      password: yup.string().required("Password is required").matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Password must be at least 8 characters long and contain at least one uppercase letter, one number, and one special character")
    })
  })
  console.log(formik.values);
  
  return (
<div className="ar-right">
    <div className="ar-card-auth">
 
      {/* Adinkra decorative corner */}
      <svg className="ar-adinkra-accent" viewBox="0 0 60 60" aria-hidden="true">
        <circle cx="30" cy="30" r="28" fill="none" stroke="#5A3E2B" strokeWidth="1.5"/>
        <circle cx="30" cy="30" r="18" fill="none" stroke="#5A3E2B" strokeWidth="1"/>
        <circle cx="30" cy="30" r="8"  fill="none" stroke="#D9A441" strokeWidth="1.5"/>
        <line x1="30" y1="2"  x2="30" y2="58" stroke="#5A3E2B" strokeWidth="0.8"/>
        <line x1="2"  y1="30" x2="58" y2="30" stroke="#5A3E2B" strokeWidth="0.8"/>
      </svg>
 
      {/* Brand */}
      <div className="ar-auth-brand">
        <div className="ar-auth-brand-mark">
          <svg viewBox="0 0 16 16" fill="none">
            <rect x="1" y="2" width="9" height="12" rx="1" fill="white" opacity="0.9"/>
            <rect x="4" y="2" width="9" height="12" rx="1" fill="white" opacity="0.55"/>
          </svg>
        </div>
        <span className="ar-auth-brand-name">Afri<span>Read</span>Co</span>
      </div>
 
      <h2 className="ar-auth-title">Welcome Back</h2>
      <p className="ar-auth-sub">Continue your reading journey with Africa's most engaging reading community.</p>
 
      <form className="ar-form" onSubmit={formik.handleSubmit}>
 
        {/* Email */}
        <div className="ar-field">
          <label className="ar-label" htmlFor="email">Email Address</label>
          <div className="ar-input-wrap">
            <input className="ar-input" type="email" name="email" placeholder="you@example.com" autoComplete="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            <small className="text-danger">{formik.touched.email && formik.errors.email} </small> <br />
            <span className="ar-input-icon" aria-hidden="true"><i className="ti ti-mail"></i></span>
          </div>
        </div>
 
        {/* Password */}
        <div className="ar-field">
          <label className="ar-label" htmlFor="password">Password</label>
          <div className="ar-input-wrap">
            <input className="ar-input" type="password" name="password" placeholder="Your password" autoComplete="current-password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            <small className="text-danger">{formik.touched.password && formik.errors.password} </small> <br />
          </div>
        </div>

 
        {/* Sign In */}
        <button className="ar-btn-primary" type="button">
          <Link color='white' to={"/Dashboard"}>Sign In</Link>
        </button>
 
        {/* Divider */}
        <div className="ar-divider">
          <div className="ar-divider-line"></div>
          <span className="ar-divider-text">or continue with</span>
          <div className="ar-divider-line"></div>
        </div>
 
        {/* Social login */}
        <div className="ar-social-grid">
 
          <button className="ar-social-btn" type="button" aria-label="Sign in with Google">
            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M15.545 6.558a9.4 9.4 0 0 0-.139-1.579H8v2.98h4.244a3.63 3.63 0 0 1-1.572 2.379v1.977h2.545c1.49-1.372 2.328-3.394 2.328-5.757z" fill="#4285F4"/>
              <path d="M8 16c2.137 0 3.933-.708 5.244-1.917l-2.545-1.977c-.708.474-1.613.755-2.699.755-2.075 0-3.832-1.402-4.459-3.282H.937v2.04A7.999 7.999 0 0 0 8 16z" fill="#34A853"/>
              <path d="M3.541 9.579A4.797 4.797 0 0 1 3.29 8c0-.547.095-1.079.25-1.579V4.381H.937A7.999 7.999 0 0 0 0 8c0 1.291.309 2.512.937 3.619l2.604-2.04z" fill="#FBBC05"/>
              <path d="M8 3.139c1.169 0 2.22.402 3.047 1.192l2.284-2.283C11.929.794 10.133 0 8 0A7.999 7.999 0 0 0 .937 4.381l2.604 2.04C4.168 4.541 5.925 3.14 8 3.14z" fill="#EA4335"/>
            </svg>
            Google
          </button>
 
          <button className="ar-social-btn" type="button" aria-label="Sign in with Apple">
            <svg viewBox="0 0 16 16" fill="#2B2B2B" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"/>
            </svg>
            Apple
          </button>
 
          <button className="ar-social-btn" type="button" aria-label="Sign in with Facebook">
            <svg viewBox="0 0 16 16" fill="#1877F2" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
            </svg>
            Facebook
          </button>
 
        </div>
      </form>
 
      <p className="ar-footer-text">
        
        Don't have an account? <a href="#"><Link to={"/register"}>Create an Account</Link></a>
      </p>
 
    </div>
  </div>
 
  )
}

export default Login
