"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  otp: yup.number().required("OTP is required"),
});

const CommonOTPInput = ({ loading, onSubmit }) => {
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
    padding: "32px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "24px",
    textAlign: "center",
    color: "#1f2937",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "8px",
    fontWeight: "500",
    color: "#374151",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    fontSize: "16px",
    marginBottom: "5px",
    outline: "none",
  };

  const errorTextStyle = {
    color: "red",
    fontSize: "12px",
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
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h2 style={titleStyle}>Verify OTP</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="otp" style={labelStyle}>
              OTP
            </label>
            <input
              id="otp"
              type="text"
              {...register("otp")}
              style={inputStyle}
              placeholder="Enter your OTP"
            />
            {errors.otp && <p style={errorTextStyle}>{errors.otp.message}</p>}
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
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommonOTPInput;
