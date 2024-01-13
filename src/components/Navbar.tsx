'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Navbar() {
	const pathname = usePathname()
	return (
		<div>
			{pathname === "/login/loginadmin" ? (
				<li>
					<Link href="/login/loginadmin">Login Admin</Link>
				</li>
			) : (
				<ul>
					<li>
						<Link href="/login/loginuser">Login Regular User</Link>
					</li>
				</ul>
			)
			}

		</div>
	)
}