import {INavItem} from "@/types/nav.interface";
import Link from "next/link";

export default function Nav() {
    const navItems: INavItem[] = [
        {
            label: 'Home',
            route: '/'
        },
        {
            label: 'About',
            route: '/about'
        },
        {
            label: 'Contact',
            route: '/contact'
        }
    ]

    return (
      <div className="flex flex-row justify-between">
          <h1 className="p-4">
              <Link href={'/'}>Nick Fallon</Link>
          </h1>
          <ul className="flex flex-row justify-end">
              {navItems.map((item, index) => {
                  return (
                    <li key={index} className="p-4">
                        <Link href={item.route}>
                            {item.label}
                        </Link>
                    </li>
                  )
              })}
          </ul>
      </div>
    )
}
