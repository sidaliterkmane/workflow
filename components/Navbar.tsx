import React from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { signOut } from 'next-auth/react'
import AuthProviders from './AuthProviders'
import ProfileMenu from './ProfileMenu'


const Navbar = () => {
    const session = {};

    return (
        <div className='
        w-[1250px]
        h-[80px]
        flex
        items-center
        justify-between
        '>
            <p className='
            text-2xl
            font-medium
            bluewhite
            '>
                worlflow.
            </p>

            <div>
                {session?.user ? (
                    <>
                        <ProfileMenu session={session} />
                    </>
                ) : (
                    <AuthProviders />
                )}
            </div>
        </div>
    )
}

export default Navbar