import React from 'react';
import { motion } from "framer-motion";
import * as z from "zod";
import { Mail, Lock, LogIn } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../../components/card/ui';
import { Label } from '../../../components/label/ui';
import { Input } from '../../../components/input/ui';
import Button from '../../../components/button/component';

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(1, {
    message: "Password is required.",
  }),
});

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const LoginTemplate = () => {
  return (
    <motion.div variants={formVariants} initial="hidden" animate="visible">
      <Card className="w-full max-w-md bg-transparent backdrop-blur-lg border shadow-xl">
        <CardHeader>
          <motion.div variants={itemVariants}>
            <CardTitle className="text-3xl font-bold text-center">Welcome Back</CardTitle>
          </motion.div>
          <motion.div variants={itemVariants}>
            <CardDescription className="text-center">
              Enter your credentials to access your account.
            </CardDescription>
          </motion.div>
        </CardHeader>
        <CardContent>
            <form className="space-y-6">
              <motion.div variants={itemVariants}>
                <Input placeholder='Email Address' type='email' className='bg-blue-100' />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Input placeholder='*********' type='password' className='bg-blue-100' />
              </motion.div>
              <motion.div variants={itemVariants}>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button type="submit" className="w-full font-semibold">
                    <LogIn className="mr-2 h-5 w-5" />
                    Sign In
                  </Button>
                </motion.div>
              </motion.div>
            </form>
        </CardContent>
        <CardFooter>
            <motion.p variants={itemVariants} className="text-center text-sm text-muted-foreground w-full">
                Don't have an account?{" "}
                <a href="/register" className="font-semibold text-primary hover:underline underline-offset-4">
                    Sign up
                </a>
            </motion.p>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export default LoginTemplate