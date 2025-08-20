import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
type userSignUpSchema = {
  firstName: string;
  lastName: string;
  age: number;
  contact: number;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<userSignUpSchema>();
  const onsubmit: SubmitHandler<userSignUpSchema> = (data) => {
    console.log(data);
    navigate("/todo")
  };
  const navigate = useNavigate();
  return (
          <div className="min-h-screen relative overflow-hidden bg-slate-950">
            {/* Ambient glow blobs */}
            <div className="pointer-events-none absolute -top-24 right-[-6rem] h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-cyan-400/25 via-sky-400/20 to-transparent blur-3xl animate-[pulse_7s_ease-in-out_infinite]" />
            <div className="pointer-events-none absolute -bottom-24 left-[-8rem] h-[32rem] w-[32rem] rounded-full bg-gradient-to-tr from-violet-500/20 via-indigo-500/20 to-transparent blur-3xl animate-pulse" />

            <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
              {/* Card with animated gradient border */}
              <div className="p-[1px] rounded-2xl bg-gradient-to-br from-white/20 via-sky-400/20 to-transparent animate-[pulse_12s_ease-in-out_infinite]">
                <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl">
                  <div className="px-8 pt-8 pb-6">
                    <h1 className="text-2xl font-semibold text-white">
                      Create your account
                    </h1>
                    <p className="mt-1 text-sm text-white/70">
                      Join us and keep your tasks beautifully organized.
                    </p>

                    <form
                      className="mt-6 space-y-4"
                      onSubmit={handleSubmit(onsubmit)}
                    >
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="mb-1 block text-sm text-white/80">
                            First name
                          </label>
                          <input
                            {...register("firstName", {
                              required: true,
                            })}
                            className="w-full rounded-xl bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-sky-400 transition"
                            placeholder="Jane"
                          />
                        </div>
                        <div>
                          <label className="mb-1 block text-sm text-white/80">
                            Last name
                          </label>
                          <input
                            {...register("lastName", {
                              required: true,
                            })}
                            className="w-full rounded-xl bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-sky-400 transition"
                            placeholder="Doe"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="mb-1 block text-sm text-white/80">
                            Age
                          </label>
                          <input
                            aria-invalid={!!errors.age}
                            {...register("age", {
                              required: "Age is required",
                              valueAsNumber: true,
                              min: { value: 18, message: "Age must be >=18" },
                              max: { value: 151, message: "Age must be <=151" },
                            })}
                            type="number"
                            className="w-full rounded-xl bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-sky-400 transition"
                            placeholder="22"
                          />
                          {errors.age && (
                            <p className="mt-1 text-sm text-red-400">
                              {errors.age.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="mb-1 block text-sm text-white/80">
                            Email
                          </label>
                          <input
                            {...register("email", {
                              required: "email is required",
                              pattern:
                                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            })}
                            type="email"
                            className="w-full rounded-xl bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-sky-400 transition"
                            placeholder="you@example.com"
                          />
                          {errors.email && (
                            <p className="mt-1 text-sm text-red-400">
                              {errors.email.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="mb-1 block text-sm text-white/80">
                            Password
                          </label>
                          <input
                            {...register("password", {
                              required: "password is required",
                              validate: (v) => {
                                if (v.length < 8)
                                  return "Password must be at least 8 characters";
                                const strong =
                                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/;
                                return (
                                  strong.test(v) ||
                                  "Password must contain one uppercase, one lowercase, one number, and one special character"
                                );
                              },
                            })}
                            aria-invalid={!!errors.password}
                            type="password"
                            className="w-full rounded-xl bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-sky-400 transition"
                            placeholder="••••••••"
                          />
                          {errors.password && (
                            <p className="mt-1 text-sm text-red-400">
                              {errors.password.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="mb-1 block text-sm text-white/80">
                            Confirm password
                          </label>
                          <input
                            {...register("confirmPassword", {
                              required: "Confirm Your password",
                              validate: (v) =>
                                v === watch("password") ||
                                "Password do not match",
                            })}
                            type="password"
                            className="w-full rounded-xl bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-sky-400 transition"
                            placeholder="••••••••"
                          />
                          {errors.confirmPassword && (
                            <p className="mt-1 text-sm text-red-400">
                              {errors.confirmPassword.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div>
                        <label className="mb-1 block text-sm text-white/80">
                          Phone No.
                        </label>
                        <input
                          {...register("contact", {
                            required: "Phone is required",
                            pattern: {
                              value: /^\d{11}$/,
                              message: "Phone must be 11 digits",
                            },
                          })}
                          type=""
                          aria-invalid={!!errors.contact}
                          className="w-full rounded-xl bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-sky-400 transition"
                          placeholder="03xxxxxxxxx"
                        ></input>
                        {errors.contact && (
                          <p className="mt-1 text-red-400 text-sm">
                            {errors.contact.message}
                          </p>
                        )}
                      </div>
                      <button
                        type="submit"
                        className="w-full rounded-xl bg-gradient-to-r from-sky-400 to-indigo-500 text-slate-900 font-medium py-3 shadow-lg shadow-indigo-500/10 ring-1 ring-white/10 hover:shadow-indigo-500/25 hover:scale-[1.02] active:scale-[0.99] transition text-stone-50 cursor-pointer"
                        
                      >
                        Create account
                      </button>
                    </form>

                    <div className="mt-6 text-center text-sm text-white/70">
                      Already have an account?{" "}
                      <Link
                        to="/login"
                        className="text-sky-300 hover:text-sky-200 underline underline-offset-4"
                      >
                        Log in
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
  );
};

export default SignUp;
