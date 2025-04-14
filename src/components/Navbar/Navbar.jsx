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
        <ul className='md:flex text-2xl'>
            <div onClick={() => setOpen(!open)} className='md:hidden'>
                {
                    open ? <MdMenu /> : <AiOutlineCloseCircle />
                }
            </div>
            {
                navItems.map(routes => <li className='mr-6'
                    key={routes.id}>
                    <a href={routes.path}>{routes.name}</a>
                </li>)
            }
        </ul>
    )
}

export default Navbar
