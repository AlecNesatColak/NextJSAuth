"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function SignupPage() {  
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    
    })

    const onSignup = async () => {

    }


    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>Sign Up</h1>
        <hr />
        <label htmlFor="username">username</label>
        <input
          className="border border-gray-400 p-2 items-center justify-center rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-black"
          id="username"
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="username"
        />
        <label htmlFor="email">email</label>
        <input
          className="border border-gray-400 p-2 items-center justify-center rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-black"
          id="email"
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="email"
        />
        <label htmlFor="password">password</label>
        <input
          className="border border-gray-400 p-2 items-center justify-center rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-black"
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="password"
        />
        <button 
        onClick={onSignup}
        className="signUpButton">Sign Up</button>
        <Link href="/login">Visit login page</Link>
      </div>
    );
}