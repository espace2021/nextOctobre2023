'use client';
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'

const SignInPage = () => {

    const searchParams = useSearchParams()

    const callbackUrl = searchParams.get('callbackUrl')

  return (
 
        <div className="container">
           <div className="card">
           <div className="card-head">
            <h3>Sign in to your account</h3>
           </div>
           <div className="card-body">
     <button className="btn btn-danger" onClick={() => signIn('google', { callbackUrl })}>    Continue with Google </button>
        </div>
        </div>  
        </div> 
  )
}

export default SignInPage