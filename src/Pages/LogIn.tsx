import { Link, useNavigate } from 'react-router-dom'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { userLogInSchema, type userLoginForm } from '@/Validation/LogIn'
import { yupResolver } from '@hookform/resolvers/yup'
const LogIn = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userLoginForm>({resolver:yupResolver(userLogInSchema), mode:"onSubmit"});  
  
  const onsubmit:SubmitHandler<userLoginForm> =()=>
  {
        navigate("/todo");
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-zinc-950">

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 bg-zinc-950">
        {/* Card with animated gradient border */}
        <div className="p-[1px] rounded-2xl bg-zinc-900">
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
                  {...register("email")}
                  aria-invalid={!!errors.email}
                    type="text"
                    placeholder="you@example.com"
                    className="w-full rounded-xl bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-lime-400 transition"
                  />
                  {errors.email && (<p className='mt-1 text-sm text-red-400'>{errors.email.message}</p>)}
                </div>
                <div>
                  <label className="mb-1 block text-sm text-white/80">Password</label>
                  <input
                  {...register("password")}
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