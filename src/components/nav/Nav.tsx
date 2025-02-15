import { INav } from "@/types/nav.interface";
import Link from 'next/link'

const navItems: INav[] = [
    {
        label: 'About',
        route: '/'
    },
    {
        label: 'Experience',
        route: '/experience'
    },
    {
        label: 'Skills',
        route: '/skills'
    },
    {
        label: 'Contact',
        route: '/contact'
    }
];

export default function Nav() {
    return (
        <nav className="flex p-4 flex-end">
            {/*<h1 className="text-5xl">Nick Fallon</h1>*/}
            <ul className="flex justify-end space-x-4">
                {navItems.map((item, index) => (
                    <li key={index} className="">
                        <Link href={item.route}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
