import React from 'react';
import { PageScaffold } from '../components/layouts/PageScaffold';

const Login = () => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <PageScaffold center>
            <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center p-10 rounded-md bg-gray-800 max-w-3xl w-full py-16 m-auto'>
                <h1 className='text-center text-gray-100 font-bold text-3xl pb-4'>Sign in</h1>
                <input placeholder='Email' type="email" className='px-5 py-2 rounded-md bg-gray-900 text-gray-400 my-2 max-w-xl w-full' />
                <input placeholder='Super secret password' type="password" className='px-5 py-2 rounded-md bg-gray-900 text-gray-400 my-2 max-w-xl w-full' />
                <button className='bg-blue-600 w-full max-w-xl py-2 rounded-md text-gray-200 mt-3' type="submit">Sign in</button>
            </form>
        </PageScaffold>
    )
};

export default Login;
