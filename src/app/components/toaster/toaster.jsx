"use client";
import confetti from "canvas-confetti";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

function ToasterUI() {
  const { isAuthenticated, error } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     confetti({
  //       particleCount: 100,
  //       spread: 70,
  //       origin: { y: 0.4 },
  //     });
  //     toast.success("🎉 Welcome back!", {
  //       hideProgressBar: false,
  //       icon: false,

  //       draggable: true,
  //     });
  //   } else if (error) {
  //     toast.error("Something went wrong");
  //   }
  // }, [isAuthenticated, error]);
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        // Define default options
        className: "",
        duration: 5000,
        style: {
          background: "#363636",
          color: "#fff",
        },

        // Default options for specific types
        success: {
          duration: 3000,

          theme: {
            primary: "green",
            secondary: "black",
          },
        },
      }}
    />
  );
}

export default ToasterUI;
