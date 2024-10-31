"use client";

import { signUpUser } from "@/app/redux/slices/authSlice";
import {
  Avatar,
  Input,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Select,
  SelectItem,
  Button,
} from "@nextui-org/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import confetti from "canvas-confetti";

const SignUp = ({ onClose, setIsLogin }) => {
  const [SignUpEmail, setSignUpEmail] = useState("");
  const [SignUpPassword, setSignUpPassword] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const dispatch = useDispatch();

  const signUpData = {
    Name: name,
    email: SignUpEmail,
    password: SignUpPassword,
    gender,
  };

  const handleSignUp = (onClose) => {
    if (!name || !SignUpPassword || !gender || !SignUpEmail) {
      toast.error("Make sure all fields are filled out to continue.", {
        hideProgressBar: false,
      });
    } else {
      const signupPromise = dispatch(signUpUser(signUpData)).unwrap();
      console.log(signupPromise);
      toast.promise(signupPromise, {
        loading: "Signing up...",
        success: "Sign-up successful! 🎉",
        error: "Sign-up failed",
      });
      signupPromise.then((result) => {
        if (result) {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.3 },
          });
          onClose(); // Close the modal if signup is successful
        }
      });
    }
  };
  return (
    <>
      <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
      <ModalBody className=" transition-all ">
        <Input
          id="name"
          label="Name"
          placeholder="Enter your name"
          variant="bordered"
          type="email"
          className=""
          onValueChange={setName}
          value={name}
          isInvalid={name == 1}
          errorMessage="Please enter a valid name"
          size="lg"
        />
        <Select
          label="Select your gender"
          size="sm"
          className=" "
          variant="bordered"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <SelectItem
            startContent={
              <Avatar
                src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                size="sm"
              />
            }
            color="secondary"
            key={"Male"}
          >
            Male
          </SelectItem>
          <SelectItem
            startContent={
              <Avatar
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            }
            color="secondary"
            key={"Female"}
          >
            Female
          </SelectItem>
        </Select>
        <Input
          id="Signup Email"
          label="Email"
          placeholder="Enter your email"
          variant="bordered"
          type="email"
          onValueChange={setSignUpEmail}
          value={SignUpEmail}
          isInvalid={
            !(SignUpEmail.includes("@") && SignUpEmail.includes(".com")) &&
            SignUpEmail.length > 0
          }
          errorMessage="Please enter valid email"
          size="lg"
        />
        <Input
          label="Password"
          id="SignUp Password"
          placeholder="Enter your password"
          type="password"
          variant="bordered"
          onValueChange={setSignUpPassword}
          value={SignUpPassword}
          isInvalid={SignUpPassword.length < 6 && SignUpPassword.length > 0}
          errorMessage="Password must be at least 6 characters"
          size="lg"
        />

        <div className="flex py-2 px-1 justify-between">
          <p
            onClick={() => setIsLogin(true)}
            className=" text-sm text-secondary cursor-pointer underline"
          >
            Already have an account? Login
          </p>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button
          color="secondary"
          className="w-full"
          onPress={() => handleSignUp(onClose)}
        >
          Sign in
        </Button>
      </ModalFooter>
    </>
  );
};

export default SignUp;
