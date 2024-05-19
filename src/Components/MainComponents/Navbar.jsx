import Image from 'next/image';
import React from 'react';
import logo from '../../../public/Images/logo-img.png';
import Link from 'next/link';

function Navbar() {
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact Us', path: '/contact' }
    ];
    return (
        <header className='bg-[#162e40]'>
            <nav className='lg:max-w-screen-2xl md:mx-auto px-2 py-2'>
                <div className='flex justify-between items-center sticky w-full  text-white '>
                    <div className="">
                        <Image src={logo} width={70} height={35} alt="web-logo" />
                    </div>
                    <div className="nav-items">
                        <ul className='flex justify-between items-center space-x-5 font-medium'>
                            {navItems.map(item => (
                                <Link key={item.path} href={item.path}>
                                    <li className={`cursor-pointer hover:text-[#ec4e4f] transition-all duration-300 py-4`}>
                                        {item.name}
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <div className="space-x-3">
                        <button className='bg-[#ec4e4f] p-3 rounded-xl '>Login</button>
                        <button className='bg-[#ec4e4f] p-3 rounded-xl'>SignUp</button>
                    </div>
                </div>
            </nav>
        </header >
    )
}

export default Navbar