const NavBar = () => {
    return (
        <header className="bg-slate-800 p-10">
            <nav className="flex justify-center">
                <ul className="flex gap-5 text-white">
                    <li><a href="#home">INICIAL</a></li>
                    <li><a href="#projects">PROJETOS</a></li>
                    <li><a href="#about">SOBRE</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar