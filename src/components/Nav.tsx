import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import {navLinks} from '../constants'
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger
} from './ui/menubar.tsx'

const Nav = ({}) => {
    return (
        <header className={'padding-x absolute z-10 w-full py-8'}>
            <nav className={'max-container flex items-center justify-between'}>
                <a href="/">
                    <img
                        src={headerLogo}
                        alt="logo"
                        height={29}
                        width={130}
                    />
                </a>

                <ul className="flx-1 flex items-center justify-center gap-16 max-lg:hidden">
                    {navLinks.map(item => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className={'font-montserrat text-lg leading-normal text-slate-gray'}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <Menubar className={'border-none lg:hidden'}>
                    <MenubarMenu>
                        <MenubarTrigger>
                            <img
                                src={hamburger}
                                alt="menu"
                                width={25}
                                height={25}
                            />
                        </MenubarTrigger>
                        {/*TODO better styling*/}
                        <MenubarContent>
                            {navLinks.map(item => (
                                <MenubarItem key={item.label}>
                                    <a
                                        href={item.href}
                                        className={'font-montserrat text-lg leading-normal text-slate-gray'}
                                    >
                                        {item.label}
                                    </a>
                                </MenubarItem>
                            ))}
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
            </nav>
        </header>
    )
}

export default Nav