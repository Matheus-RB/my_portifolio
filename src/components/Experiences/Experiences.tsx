import Experience from "../Experience/Experience"

const Experiences = () => {
    return (
        <div className="flex flex-col gap-4">
            <Experience company="TopSapp" description="Manutenção de sites" initial={2023} office="front-end" technologies="html, css" />
        </div>
    )
}

export default Experiences