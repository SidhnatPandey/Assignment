'use client'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email format").notRequired(),
  phone: yup.string().notRequired(),
}).test("only-one", null, function (value) {
  const { email, phone } = value;
  const hasEmail = !!email;
  const hasPhone = !!phone;

  if ((hasEmail && hasPhone) || (!hasEmail && !hasPhone)) {
    return this.createError({
      path: "email",
      message: "Please provide either Email or Phone",
    }) || this.createError({
      path: "phone",
      message: "Please provide either Email or Phone",
    });
  }

  return true;
});


const CommonInput = ({heading, loading, onSubmit}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
      });

 // Styles
  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f4f6",
    fontFamily: "'Poppins', sans-serif",
  };

  const boxStyle = {
  backgroundColor: "#ffffff",
  padding: "24px",
  borderRadius: "12px",
  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
  width: "90%",
  maxWidth: "400px",
  boxSizing: "border-box",
};


  const titleStyle = {
    fontSize: "1.5rem",
    fontWeight: "600",
    marginBottom: "24px",
    textAlign: "center",
    color: "#1f2937",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "3px",
    fontWeight: "500",
    fontSize: "0.9rem",
    color: "#374151",
  };

  const inputStyle = {
  width: "90%",
  padding: "10px 12px",
  border: "1px solid #d1d5db",
  borderRadius: "8px",
  fontSize: "1rem",
  marginBottom: "5px",
  outline: "none",
};


  const errorTextStyle = {
    color: "red",
    fontSize: "12px",
    marginTop: 0,
    marginBottom: "15px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: loading ? "#9ca3af" : "#2563eb",
    color: "#ffffff",
    fontWeight: "600",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    marginTop: "1rem"
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h2 style={titleStyle}>{heading}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email" style={labelStyle}>Email</label>
            <input
              id="email"
              type="email"
              {...register("email")}
              style={inputStyle}
              placeholder="Enter your Email"
            />
            {errors.email && <p style={errorTextStyle}>{errors.email.message}</p>}
          </div>
            <h5 style={{  textAlign: "center", color: "#1f2937", margin: 4}}>OR</h5>
          <div>
            <label htmlFor="phone" style={labelStyle}>Phone Number</label>
            <input
              id="password"
              type="text"
              {...register("phone")}
              style={inputStyle}
              placeholder="Enter your Phone Number"
            />
            {errors.phone && <p style={errorTextStyle}>{errors.phone.message}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            style={buttonStyle}
            onMouseOver={(e) => {
              if (!loading) e.currentTarget.style.backgroundColor = "#1d4ed8";
            }}
            onMouseOut={(e) => {
              if (!loading) e.currentTarget.style.backgroundColor = "#2563eb";
            }}
          >
            {loading ? "Loading..." : heading}
          </button>

          {heading !== "Sign up" ?(<p style={{ marginTop: "16px", textAlign: "center", fontSize: "14px" }}>
            Don&apos;t have an account?{" "}
            <a href="/signup" style={{ color: "#2563eb", textDecoration: "underline" }}>
              Sign up here
            </a>
          </p>): (<p style={{ marginTop: "16px", textAlign: "center", fontSize: "14px" }}>
            Already have an account?{" "}
            <a href="/login" style={{ color: "#2563eb", textDecoration: "underline" }}>
              Log in here
            </a>
          </p>)}
        </form>
      </div>
    </div>
  );
}

export default CommonInput;
