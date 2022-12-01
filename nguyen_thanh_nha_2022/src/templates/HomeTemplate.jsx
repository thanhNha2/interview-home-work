import React from "react";
import Header from "../component/Header";
import { Outlet } from "react-router-dom";

export default function HomeTemplate() {
  return (
    <>
      <Header />
      <Outlet />
      {/* <footer className=" bg-dark text-white p-5 text-center">Footer</footer> */}
    </>
  );
}
