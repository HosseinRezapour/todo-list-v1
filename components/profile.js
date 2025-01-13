import Link from 'next/link';
import React from 'react';

const Profile = () => {
    return (
        <footer className='absolute bottom-0 w-full'>
            <div className="flex flex-col h-36 items-center justify-center w-full
            bg-gradient-to-r from-indigo-400 from-10% via-sky-600 via-30% to-emerald-500 to-90%
            text-white
            ">
                <p className='pb-4 text-sm text-center'>برای پیاده سازی این صفحه از
                    NextJS - mongoose - ReactQuery - Context - AntDesign
                    استفاده شده است.

                </p>

                <Link href={'tel:+989141106794'} className="text-2xl mt-5 left-6 relative">
                    <span className='relative -top-7 -left-16 text-sm '> طراحی و پیاده سازی </span>
                    <span className='text-3xl  font-extrabold'> حسین رضاپور </span>
                </Link>



            </div>

        </footer>
    );
};


export default Profile;