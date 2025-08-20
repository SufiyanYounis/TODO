import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm, type SubmitHandler } from 'react-hook-form'

type userLogInSchema =
{
  email: string;
  password: string;
}

const LogIn = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userLogInSchema>();  
  
  const onsubmit:SubmitHandler<userLogInSchema> =(data)=>
  {
    console.log(data)
    navigate("/todo");
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-950">
      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-96 w-96 rounded-full bg-gradient-to-br from-lime-400/30 via-emerald-400/20 to-transparent blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-[30rem] w-[30rem] rounded-full bg-gradient-to-tl from-fuchsia-500/20 via-purple-500/20 to-transparent blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        {/* Card with animated gradient border */}
        <div className="p-[1px] rounded-2xl bg-gradient-to-br from-white/20 via-lime-400/20 to-transparent animate-[pulse_12s_ease-in-out_infinite]">
          <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl">
            <div className="px-8 pt-8 pb-6">
              <h1 className="text-2xl font-semibold text-white">Welcome back</h1>
              <p className="mt-1 text-sm text-white/70">
                Log in to continue managing your tasks.
              </p>
              <form className="mt-6 space-y-4" onSubmit={handleSubmit(onsubmit)}>
                <div>
                  <label className="mb-1 block text-sm text-white/80">Email</label>
                  <input
                  {...register("email",{
                    required: "Email is required",
                     pattern:
                                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                  })}
                  aria-invalid={!!errors.email}
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-lime-400 transition"
                  />
                  {errors.email && (<p className='mt-1 text-sm text-red-400'>{errors.email.message}</p>)}
                </div>
                <div>
                  <label className="mb-1 block text-sm text-white/80">Password</label>
                  <input
                  {...register("password",{
                    required: "Password is required",
                    validate:(v)=>
                    {
                      const strong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/ 
                      if (v.length < 8)
                      {
                        return "Password length must be atleast 8"
                      }
                      else if (! strong.test(v))
                      {
                        return "Password must contain 1 uppercase, 1 lowercase and 1 special Character"
                      }
                      return true

                    }
                  })}
                  aria-invalid={!!errors.password}
                    type="password"
                    placeholder="••••••••"
                    className="w-full rounded-xl bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-lime-400 transition"
                  />
                  {errors.password && (<p className='mt-1 text-red-400 text-sm'>{errors.password.message}</p>)}
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-lime-400 to-emerald-500 text-slate-900 font-medium py-3 shadow-lg shadow-emerald-500/10 ring-1 ring-white/10 hover:shadow-emerald-500/25 hover:scale-[1.02] active:scale-[0.99] transition"
                >
                  Log in
                </button>
              </form>

              <div className="mt-6 text-center text-sm text-white/70">
                Don’t have an account?{" "}
                <Link to="/signup" className="text-lime-400 hover:text-emerald-300 underline underline-offset-4">
                  Create one
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogIn