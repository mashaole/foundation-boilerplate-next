import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Link  from 'next/link';

const navTitles = [
	{id: 1, title: 'Home', route: '/'},
	{id: 2, title: 'Shop', route: '/shop'},
	{id: 7, title: 'About Us', route: '/about'},
	{id: 6, title: 'Contact Us', route: '/contact'},
  ];

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};

	return (
		<nav className="navbar">
			<Link href="/" className="nav-logo" onClick={closeMenu}>
				[Company]
			</Link>
			<div onClick={handleClick} className="nav-icon">
				{open ? <FiX /> : <FiMenu />}
			</div>
			<ul className={open ? 'nav-links active' : 'nav-links'}>
			{navTitles.map((item,key)=>
               { return(                
				   <li className="nav-item" key={key}>
					<a className="nav-link" href={item.route}>
						{item.title}
					</a>
				</li>)})}
			</ul>
		</nav>
	);
};

export default Navbar;