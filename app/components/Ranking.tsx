import { dataRanking } from "../data/dataRanking";
import Image from 'next/image'
export function TopRanking(){
    return (
        <div className="bg-[var(--bg-ranking)] mt-8 rounded-sm py-5 flex flex-col items-center">
            <div className="text-2xl text-[var(--text-primary)]">
                Ranking Semanal
            </div>
        {dataRanking.sort((a, b) => {
            return b.countVotes - a.countVotes;
        }).map((team, index) => (
            <ul key={team.teamID} className="flex justify-between w-96 px-4 border-y-[1px] border-slate-300 hover:bg-[var(--hover-bg-button)] hover:cursor-pointer">
                <li className="flex items-center justify-center text-[var(--text-primary)]">
                    <a href="" className="flex items-center justify-between">
                        <div className="flex">
                            <span className="px-2">
                            {index + 1}.
                            </span>
                            <div className="py-1 px-[1px] rotate-[18deg] bg-[var(--text-primary)]"></div>
                             <span className="pl-4">
                             {team.teamName}
                             </span>
                        </div>
                    </a>
                </li>
                <div className="flex">
                    <div className="py-1 px-[1px] rotate-[18deg] bg-[var(--text-primary)]"></div>
                    <span className="text-[var(--text-primary)] pl-2">{team.countVotes}</span>
                </div>
            </ul>
        ))}
      </div>
    )
}

export function TopPlayer () {
    return(
        <div className="flex flex-col items-center justify-center">
            <Image 
                src="/search.png"
                width={200}
                height={200}
                alt="Picture of the author"
            />


        </div>
    )
}
export default function Ranking(){
    return (
        <div className="h-full bg-[var(--bg-primary)] flex items-start justify-center">
            <TopRanking/>
            {/* <TopPlayer /> */}
        </div>
    )
}