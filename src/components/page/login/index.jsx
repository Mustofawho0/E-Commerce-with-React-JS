import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { ValidasiLogin } from "../../../supports/schema/loginSchema";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { toast } from "react-toastify";

export default function LoginPage() {
  const handleLogin = async (value) => {
    try {
      let findData;

      if (value.username.includes("@")) {
        findData = await axios.get(
          `http://localhost:5000/users?email=${value.username}&password=${value.password}`
        );
      } else {
        findData = await axios.get(
          `http://localhost:5000/users?username=${value.username}&password=${value.password}`
        );
      }
      if (findData.data.length === 0) throw new Error("Data belum teregister");
      toast.success("Login Berhasil!");
      // console.log(findData);
    } catch (error) {
      toast.error(error.message);
    } finally {
    }
  };
  return (
    <>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={ValidasiLogin}
        onSubmit={(value) => {
          handleLogin(value);
        }}
      >
        <Form>
          <div>
            <div className="flex justify-center items-center">
              <img
                src="https://assets.depop.com/web/assets/sellerOnboarding/sticker-smile.png"
                alt="logo"
              />
            </div>
            <div className="flex items-center justify-center text-2xl font-sans font-bold tracking-wider">
              <p>Login</p>
            </div>
            <div className="flex items-center justify-center">
              <p>
                Dont have an account?
                <span className="text-blue-600">
                  <a href="#"> Sign Up</a>
                </span>
              </p>
            </div>
            <div className="flex justify-center items-center pt-5">
              <button className="btn rounded-none w-[400px] h-[10px] bg-white hover:bg-blue-50">
                <FcGoogle /> Continue with Google
              </button>
            </div>
            <div className="flex justify-center items-center pt-2">
              <button className="btn rounded-none w-[400px] bg-black text-white hover:bg-black">
                <FaApple /> Continue with Apple
              </button>
            </div>
            <div class="divider w-[400px] flex justify-center items-center mx-auto">
              or
            </div>
            <div className="flex justify-center mr-64 pr-4">
              <p>Email or Username</p>
            </div>
            <div className="flex justify-center items-center pt-1 pb-2">
              <Field
                name="username"
                className="border border-gray-500 shadow-sm  placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block sm:text-sm focus:ring-1 w-[400px] py-1"
                type="text"
              />
            </div>
            <ErrorMessage
              name="username"
              component={"div"}
              className="text-sm text-red-500 flex justify-center"
            />
            <div className="flex justify-center mr-64 pr-20">
              <p>Password</p>
            </div>
            <div className="flex justify-center items-center pt-1">
              <Field
                name="password"
                className="border border-gray-500 shadow-sm  placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block sm:text-sm focus:ring-1 w-[400px] py-1"
                type="password"
              />
            </div>
            <ErrorMessage
              name="password"
              component={"div"}
              className="text-sm text-red-500 flex justify-center"
            />
            <div className="flex justify-center items-center pl-72 mr-3 pt-1">
              <span className="text-blue-500">
                <a href="">Forgot Password?</a>
              </span>
            </div>
            <div className="flex justify-center items-center pt-2">
              <button className="btn w-[400px] rounded-none bg-black text-white hover:bg-gray-600 text-xl tracking-wider">
                Submit
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
}
