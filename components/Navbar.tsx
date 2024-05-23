import { FC } from 'react';
import { Button } from '@/components/ui/button'; 
import Link from 'next/link'; 
import { Pencil1Icon, PersonIcon, InfoCircledIcon, HomeIcon } from '@radix-ui/react-icons';


const Navbar: FC = () => {
    const navItems = [
      { href: '/', label: 'Home', icon: <Pencil1Icon className="mr-2" /> },
      { href: '/post', label: 'Post', icon: <Pencil1Icon className="mr-2" /> },
      { href: '/profile', label: 'Profile', icon: <PersonIcon className="mr-2" /> },
      //{ href: '/about', label: 'About', icon: <InfoCircledIcon className="mr-2" /> },
      { href: '/contact', label: 'Contact', icon: <Pencil1Icon className="mr-2" /> },
    ];
  
    return (
      <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-4 rounded-full">
        <div className="mx-auto flex justify-between items-center w-full h-full">
            <div>
            {navItems.map((item) => (
                <Button variant="ghost" asChild key={item.href}>
                <Link href={item.href}>
                    <div className="flex items-center text-white">
                    {item.icon}
                    {item.label}
                    </div>
                </Link>
                </Button>
            ))}
            </div>
            <div>
            <Button variant="outline" className="rounded-full">I want to find  (´▽`)</Button>
            </div>
        </div>
      </div>
    );
};

export default Navbar;
