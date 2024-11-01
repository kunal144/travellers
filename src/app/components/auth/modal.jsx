"use client";
import { Modal, ModalContent, Button, useDisclosure } from "@nextui-org/react";
import SignUp from "./singup/signup";
import Login from "./login/login";
import { useCallback,useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Auth() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [isLogin, setIsLogin] = useState(true);

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };
  const handleChange = useCallback(
    debounce(() => {
      onOpen();
    }, 1),
    [onOpen]
  );

  return (
    <>
      <Button onPress={handleChange} variant={"flat"} color="secondary">
        Login
      </Button>
      <Modal
        isOpen={isOpen}
        className=" transition-all"
        onOpenChange={onOpenChange}
        size="sm"
        placement="center"
      >
        <ModalContent className=" transition-all">
          {(onClose) => (
            <AnimatePresence mode="wait">
              {isLogin ? (
                <motion.div
                  key="login"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Login onClose={onClose} setIsLogin={setIsLogin} />
                </motion.div>
              ) : (
                <motion.div
                  key="signup"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <SignUp onClose={onClose} setIsLogin={setIsLogin} />
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
