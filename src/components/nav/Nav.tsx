import { INav } from "@/types/nav.interface";

const navItems: INav[] = [
    {
        label: 'About',
        route: '/'
    },
    {
        label: 'Experience',
        route: '/experience'
    }
];

export default function Nav() {
    return (
        <nav className="flex justify-between p-4">
            <h1>Nick Fallon</h1>
            <ul className="flex justify-end space-x-4">
                {navItems.map((item, index) => (
                    <li key={index} className="">
                        {item.label}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
