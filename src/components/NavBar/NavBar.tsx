const NavBar = () => {
    return (
        <header className="p-10 absolute top-0 w-full">
            <nav className="flex justify-center">
                <ul className="flex gap-10 md:gap-28 text-white">
                    <li><a href="#home">INICIAL</a></li>
                    <li><a href="#projects">PROJETOS</a></li>
                    <li><a href="#about">SOBRE</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar