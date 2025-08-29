import { Link, useNavigate } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import { usersignUpSchema, type userSignUpForm } from "@Validation/SignUp";
import { yupResolver } from "@hookform/resolvers/yup";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userSignUpForm>({
    resolver: yupResolver(usersignUpSchema),
    mode: "onSubmit",
  });
  const onsubmit: SubmitHandler<userSignUpForm> = async(data) =>
  {
    try{
      const res = await fetch("http://localhost:3000/signup",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
      })
      const result = await res.json();
      if (res.ok) {
        console.log("User created:", result);
        navigate("/todo"); // redirect after success
      } else {
        console.log(result.error || "Failed to register user");
      }
    }
    catch(error)
    {
      console.log(error)
    }
  };
  const navigate = useNavigate();
  return (
    <div className="min-h-screen relative overflow-hidden bg-zinc-950">
      {/* Ambient glow blobs */}
      <div className="relative z-10 flex min-h-screen items-center justify-center bg-zinc-950 px-4">
        {/* Card with animated gradient border */}
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl">
          <div className="px-8 pt-8 pb-6">
            <h1 className="text-2xl font-semibold text-white">
              Create your account
            </h1>
            <p className="mt-1 text-sm text-white/70">
              Join us and keep your tasks beautifully organized.
            </p>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit(onsubmit)} >
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block text-sm text-white/80">
                    First name
                  </label>
                  <input
                    {...register("firstName")}
                    className="w-full rounded-xl bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-[#8aad32] transition"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-white/80">
                    Last name
                  </label>
                  <input
                    {...register("lastName")}
                    className="w-full rounded-xl bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-[#8aad32] transition"
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
                    {...register("age")}
                    type="number"
                    className="w-full rounded-xl bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-[#8aad32] transition"
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
                    {...register("email")}
                    type="text"
                    className="w-full rounded-xl bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-[#8aad32] transition"
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
                    {...register("password")}
                    aria-invalid={!!errors.password}
                    type="password"
                    className="w-full rounded-xl bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-[#8aad32] transition"
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
                    {...register("confirmPassword")}
                    type="password"
                    className="w-full rounded-xl bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-[#8aad32] transition"
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
                  {...register("contact")}
                  type="text"
                  aria-invalid={!!errors.contact}
                  className="w-full rounded-xl bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-[#8aad32] transition"
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
                className="bg-neutral-800 border-2 border-transparent w-full rounded-xl font-medium py-3 hover:border-lime-500 text-white px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out"
              >
                Create account
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-white/70">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-lime-300 hover:text-sky-200 underline underline-offset-4"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
