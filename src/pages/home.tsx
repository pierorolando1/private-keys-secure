import React, { FormEvent, FormEventHandler, useState } from 'react';
import { PageScaffold } from '../components/layouts/PageScaffold';
import Modal from  'react-modal'

const Home = () => {

    const [viewOpen, setViewOpen] = useState(false)
    const [newOpen, setNewOpen] = useState(false)

    const handleView = () => {
        setViewOpen(true)
    }

    const handleNew = () => {
    }

    return (
        <PageScaffold center={false}>
            <h1 className='text-gray-100 font-bold text-3xl max-w-3xl w-full mx-auto py-12'>Welcome {"Piero"}</h1>

            <div className='flex flex-col items-center justify-center p-10 rounded-md bg-gray-800 max-w-3xl w-full py-16 m-auto'>
                <h1 className='text-center text-gray-100 font-bold text-3xl pb-4'>Here we go the balance of cryptos</h1>
            </div>
            <div className='mx-auto max-w-3xl py-6 flex w-full'>
                <button onClick={handleView} className='bg-blue-600 py-2 px-4 rounded-md text-gray-200 '>View private keys</button>
                <button onClick={handleNew} className='bg-indigo-600 rounded-md py-2 px-4 ml-5  text-gray-200'>Add new private key</button> 
            </div>
            <ViewModal open={viewOpen} setOpen={setViewOpen} />
        </PageScaffold>
    );
};

const ViewModal = ({open, setOpen}:{open:boolean, setOpen:Function}) => {

    const [auth, setAuth] = useState(false);

    const handleAuth = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setAuth(true)
    }

    return (
        <Modal
            isOpen={open}
            onRequestClose={() => {
                setAuth(false)
                setOpen(false)
            }}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.6)'
                },
                content: {
                    marginTop: 'auto',
                    marginBottom: 'auto',
                    marginLeft: 'auto',
                    marginRight: 'auto',

                    maxWidth: '40rem',
                    maxHeight: '40rem',
                    border: 'none',
                    padding: 0,
                    borderRadius: '1rem',
                }
            }}
        >{
            auth ? (
                <div>Auth</div>
            )
                :
                <form className='bg-gray-900 w-full h-full flex items-center justify-center px-5' onSubmit={handleAuth}>
                    <input type="password" className='py-2 px-5 bg-gray-800 rounded-md w-full max-w-md' placeholder='Password that you set at view' />
                </form>
        }
        </Modal>
    )
}

export default Home;
