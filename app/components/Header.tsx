
export default function Header() {
    return (
        <div className="py-8 bg-[var(--bg-navbar)] flex items-center justify-between lg:px-40">
            <div className="flex justify-center items-center lg:gap-3 gap-1">
                <a href="/" className="text-[var(--text-primary)] hover:text-[var(--hover-text-primary)]">Ranking</a>
                <a href="/" className="text-[var(--text-primary)] hover:text-[var(--hover-text-primary)]">Noticias</a>
                <a href="/" className="text-[var(--text-primary)] hover:text-[var(--hover-text-primary)]">Partidas</a>
                <a href="/" className="text-[var(--text-primary)] hover:text-[var(--hover-text-primary)]">Eventos</a>
            </div>
            <div className="flex items-center justify-between gap-8">
                <div className="flex items-center justify-between relative rounded-lg">
                    <input type="text" placeholder="Pesquise uma equipe" className="w-full h-full block focus:ring-inset border-0 p-2 rounded-lg focus:ring-white outline-none placeholder:text-sm"/>
                    <button className="w-5 h-5 mr-1 absolute right-2 cursor-pointer bg-[url('/search.png')] bg-cover" type="button"/>
                </div>
                <div className="flex items-center justify-between gap-3">
                    <button className="px-4 py-2 text-[var(--hover-text-primary)] rounded-md hover:bg-[var(--hover-bg-button)] border-2 border-[var(--bg-button)] transition duration-200 ease-in" type="button">
                        Login
                    </button>
                    <button className="border-0 px-4 py-2 bg-[var(--bg-button)] text-[var(--hover-text-primary)] rounded-md hover:bg-[var(--hover-bg-button)] transition duration-200 ease-in" type="button">
                        Registre-se 
                    </button>
                </div>
            </div>
        </div>
    )
}