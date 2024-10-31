import {
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import { useState } from "react";
import { loginUser } from "@/app/redux/slices/authSlice";
import { useDispatch } from "react-redux";

import toast from "react-hot-toast";
import confetti from "canvas-confetti";

export default function Login({ onClose, setIsLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const cred = {
    email,
    password,
  };

  const handleLogin = (onClose) => {
    if (email && password) {
      const loginPromise = dispatch(loginUser(cred)).unwrap();
      toast.promise(loginPromise, {
        loading: "Logging in...",
        success: "👋 Welcome Back!",
        error: "Login-up failed",
      });
      loginPromise.then((result) => {
        console.log(result);
      });

      loginPromise.then((result) => {
        if (result) {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.3 },
          });
          onClose(); // Close the modal if signup is successful
        }
      });

      onClose();
    }
  };

  return (
    <>
      <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
      <ModalBody>
        <Input
          id="email"
          label="Email"
          placeholder="Enter your email"
          variant="bordered"
          type="email"
          onValueChange={setEmail}
          value={email}
          size="lg"
        />
        <Input
          label="Password"
          id="password"
          placeholder="Enter your password"
          type="password"
          variant="bordered"
          onValueChange={setPassword}
          value={password}
          size="lg"
        />
        <p
          onClick={() => setIsLogin(false)}
          className="text-sm text-secondary cursor-pointer underline"
        >
          Don&apos;t have an account? Signup
        </p>
        <div className="flex py-2 px-1 justify-between">
          <Checkbox
            classNames={{
              label: "text-small",
            }}
            color="warning"
          >
            Remember me
          </Checkbox>
          <Link color="secondary" size="sm">
            Forgot password?
          </Link>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button
          color="secondary"
          className=" w-full"
          onPress={() => handleLogin(onClose)}
        >
          Sign in
        </Button>
      </ModalFooter>
    </>
  );
}
