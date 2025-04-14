import React, { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { MdMenu } from 'react-icons/md';

const Navbar = () => {
    const [open, setOpen] = useState(true);
    const navItems = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Blog', path: '/blog' },
        { id: 5, name: 'Contact', path: '/contact' }
    ];

    return (
        <ul className='md:flex text-2xl justify-center mx-2 rounded text-white md:my-2 font-semibold'>
            <div onClick={() => setOpen(!open)}
                className={`md:hidden my-2 bg-blue-400 pointer w-max cursor-pointer hover:bg-blue-700 py-1 px-2 rounded`}>
                {
                    open ? <MdMenu /> : <AiOutlineCloseCircle />
                }
            </div>
            <div className={`bg-blue-400 rounded duration-1000
                ${open ? '-top-56' : 'top-11'}
                absolute md:static md:flex py-1 px-4`}>
                {
                    navItems.map(routes => <li className='mr-6 my-2'
                        key={routes.id}>
                        <a className='hover:bg-blue-700 py-1 px-2 rounded' href={routes.path}>{routes.name}</a>
                    </li>)
                }
            </div>
        </ul>
    )
}

export default Navbar
