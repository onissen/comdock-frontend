/* jshint esversion:6 */
import { useFetchUser } from "@/helpers/auth";
import design from '@/layout/LoginForm.module.sass'

export default function LoginForm(props) {
    const { user, loading} = useFetchUser();
    return (
      <div className={design.loginBox}>
        {!loading && !user ? (
          <div className="p-9" >
            <h1 className='text-center'>Login</h1>
            <form onSubmit={props.handleSubmit} className="flex flex-col">
              <div className="form-floating my-3">
                  <input type="text" name="username" id="input-username" onChange={props.handleChange} required className="form-control-lg peer" placeholder=" " />
                  <label htmlFor="input-username" className="peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Benutzername</label>
              </div>

              <div className="form-floating my-3">
                  <input type="password" name="password" id="input-password" onChange={props.handleChange} required className="form-control-lg peer" placeholder=" " />
                  <label htmlFor="input-password" className="peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Passwort</label>
              </div>
              <button className="btn-lg btn-primary w-full my-3" type="submit">Login</button>
            </form>
          </div>
          ) : ('') }
      
          {!loading && (user ? (
            <>
              <span>Sie sind bereits eingeloggt.</span>
              <a
                  className="md:p-2 py-2 block hover:text-purple-400"
                  onClick={logout}
                  style={{ cursor: 'pointer' }}
              >
                  Logout
              </a>
            </>) : ('')) }
      </div>
    )
}