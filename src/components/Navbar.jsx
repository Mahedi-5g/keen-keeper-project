import Link from "next/link";


const Navbar = () => {

    const links= <>
        <li><Link href="/home">Home</Link></li>
        <li><Link href="/timeLine">TimeLine</Link></li>
        <li><Link href="/stats">Stats</Link></li>
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-end flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;