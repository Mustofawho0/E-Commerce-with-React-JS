import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "react-toastify";
import { ValidasiRegister } from "../../../supports/schema/registerSchema";
import { useState } from "react";

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const handleRegister = async (value, resetForm) => {
    try {
      setIsLoading(true);
      const findEmail = await axios.get(
        `http://localhost:5000/users?email=${value.email}`
      );
      if (findEmail.data.length) throw new Error("Email Already Exist!");
      const res = await axios.post("http://localhost:5000/users", value);
      toast.success("Register Berhasil!");
      resetForm();
    } catch (error) {
      //   console.log(error);
      toast.error(error.message ? error.message : "Already Exist!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            username: "",
            password: "",
          }}
          validationSchema={ValidasiRegister}
          onSubmit={async (value, { resetForm }) => {
            await handleRegister(value, resetForm);
          }}
        >
          {({ dirty, isValid }) => {
            return (
              <Form>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text font-bold">Firstname</span>
                  </div>
                  <Field
                    type="text"
                    name="firstName"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs rounded-none"
                  />
                  <ErrorMessage
                    name="firstName"
                    component={"div"}
                    className="text-sm text-red-500"
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text font-bold">Lastname</span>
                  </div>
                  <Field
                    type="text"
                    name="lastName"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs rounded-none"
                  />
                  <ErrorMessage
                    name="lastName"
                    component={"div"}
                    className="text-sm text-red-500"
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text font-bold">Email</span>
                  </div>
                  <Field
                    type="text"
                    name="email"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs rounded-none"
                  />
                  <ErrorMessage
                    name="email"
                    component={"div"}
                    className="text-sm text-red-500"
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text font-bold">Username</span>
                  </div>
                  <Field
                    type="text"
                    name="username"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs rounded-none"
                  />
                  <ErrorMessage
                    name="username"
                    component={"div"}
                    className="text-sm text-red-500"
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text font-bold">Password</span>
                  </div>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs rounded-none"
                  />
                  <ErrorMessage
                    name="password"
                    component={"div"}
                    className="text-sm text-red-500"
                  />
                </label>
                <button
                  className="btn w-full bg-gray-700 text-white rounded-none hover:bg-red-400 my-3"
                  type="submit"
                  disabled={!(dirty && isValid) || isLoading}
                >
                  Register
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
}
