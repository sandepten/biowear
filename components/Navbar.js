import { MenuIcon, ShoppingCartIcon, UserIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
    const [hamburger, setHamburger] = useState(true)
    const [cart, setCart] = useState(false)
  return (
    <div>
        <nav className='z-10'>
            {/* This is the navbar for small devices */}
            <div className='md:hidden flex justify-between mx-3 py-3'>
                {hamburger ? <button onClick={()=>{setHamburger(false)}}><MenuIcon height={35}/></button> : <button onClick={()=>{setHamburger(true)}}><XIcon height={35}/></button>}
                <p className='font-serif text-3xl font-semibold'>Biowear</p>
                <ShoppingCartIcon onClick={()=>{setCart(true)}} height={35}/>
            </div>
            {/* This is the hidden overflow menu/navbar for mobiles */}
            {/* //todo remove the vertical scrollbar from this overflow menu */}
            {!hamburger 
            ? <div className=''>
                <ul className='flex-row items-center justify-center text-center text-lg space-y-6 pt-10 w-full min-h-screen overflow-y-hidden'>
                    <Link href={"/men"}><li>Men</li></Link><hr/>
                    <Link href={"/women"}><li>Women</li></Link><hr/>
                    <Link href={"/kids"}><li>Kids</li></Link><hr/>
                    <Link href={"/account"}><li>Account</li></Link><hr/>
                    <Link href={"/about"}><li>About</li></Link><hr/>
                    <Link href={"/contact"}><li>Contact</li></Link><hr/>
                </ul>
            </div> 
            : null}
            {/* //?This is the cart sidebar */}
            {cart
            ? <div className='absolute top-0 z-20 right-0 min-h-screen w-full lg:w-2/6 bg-white'>
                <button onClick={()=>{setCart(false)}}><XIcon className='absolute ml-3' height={40}/></button>
                <div className='text-center'>
                    <div className='flex justify-center pb-3'>
                        <ShoppingCartIcon height={28}/>
                    </div><hr/>
                    <p className='py-3 font-medium'>Your cart is empty</p>
                </div>
            </div>
            : null}
            {/* //?This is the navbar for larger devices */}
            <div className="justify-between hidden md:flex py-3 items-center">
                <ul className="flex space-x-6 lg:space-x-8 ml-8 font-mono font-semibold text-lg">
                    <Link href={"/men"}><li className='hover:underline hover:cursor-pointer'>Men</li></Link>
                    <Link href={"/women"}><li className='hover:underline hover:cursor-pointer'>Women</li></Link>
                    <Link href={"/kids"}><li className='hover:underline hover:cursor-pointer'>Kids</li></Link>
                </ul>
                <Link href={"/"}><span className='font-serif text-3xl font-semibold hover:cursor-pointer'>Biowear</span></Link>
                <ul className="flex space-x-6 mr-6 lg:space-x-8 font-mono font-semibold text-lg">
                    <Link href={"/about"}><li className='hover:underline hover:cursor-pointer'>About</li></Link>
                    <Link href={"/contact"}><li className='hover:underline hover:cursor-pointer'>Contact</li></Link>
                    <Link href={"/account"}><UserIcon height={22}/></Link>
                    <ShoppingCartIcon className='hover:cursor-pointer' onClick={()=>{setCart(true)}} height={22}/>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar