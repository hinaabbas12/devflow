"use client";
import React from "react";
import { AuthForm } from "@/components/forms/AuthForm";
import { signInSchema } from "@/lib/validations";
import { success } from "zod";

export default function SignIn() {
  return (
    <>
      <AuthForm
        formType="SIGN_IN"
        schema={signInSchema}
        defaultValues={{ email: "", password: "" }}
        onSubmit={(data) => Promise.resolve({ success: true, data })}
      />
    </>
  );
}
