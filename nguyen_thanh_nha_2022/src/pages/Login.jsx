import React from "react";
import { useParams } from "react-router-dom";

export default function Login() {
  const prams = useParams();
  console.log(prams.id);
  return <div>Login</div>;
}
