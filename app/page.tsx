import React from "react";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <section className="grid place-items-center h-screen">
      
      {/* <div className="flex gap-4 justify-center items-center h-96 w-96 border rounded-md">
        <Button className="bg-white text-blue-600 border-blue-600 border hover:bg-blue-600 hover:text-white">
          <LoginLink>Login</LoginLink>
        </Button>
        <Button className="hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600">
          <RegisterLink>Sign up</RegisterLink>
        </Button>
      </div> */}
    </section>
  );
};

export default page;
