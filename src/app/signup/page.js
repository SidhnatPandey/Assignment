"use client"
import React from 'react';
import { useState } from 'react';
import CommonInput from '@/components/CommonInput';
import CommonOTPInput from '@/components/CommonOTPInput';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [identifier, setIdentifier] = useState("");
  const router = useRouter();
  
  const onSubmit = async (data) => {
    setLoading(true);
    console.log("Submitted:", data);
    const inputUsed = data.email || data.phone;
    setIdentifier(inputUsed);
    axios.post("https://otp-backend-w4lj.onrender.com/api/v1/signup/send-otp", {"identifier": inputUsed}).then((res)=> {
      if (res.status == 200) {
        toast.success("OTP Sent Successfully!");
        setLoading(false);
        setShowOtp(true);
      }
    }).catch(err => {
      console.log(err);
      setLoading(false);
      toast.error(err.response?.data?.error || "Invalid OTP or Server Error");
    });
  };

  const OTPSubmit = (data) => {
    setLoading(true);
    const obj = {
      "identifier": identifier,
      "otp": data.otp
    }
    axios.post("https://otp-backend-w4lj.onrender.com/api/v1/signup/verify-otp", obj).then((res)=> {
      if (res.status == 200) {
        setLoading(false);
        toast.success("OTP Verified Successfully!");
        localStorage.setItem("userIdentifier", identifier);
        localStorage.setItem("authToken", res.data.token);
        router.push("/home");
      }
    }).catch(err => {
      setLoading(false);
      toast.error(err.response?.data?.error || "Invalid OTP or Server Error");
      console.error(err);
    })
  };
  return (
    <>
    {!showOtp ? (<CommonInput heading="Sign up" onSubmit={onSubmit} loading={loading}/>): (<CommonOTPInput loading={loading} onSubmit={OTPSubmit}/>)}
    </>
  )
}

export default Signup;