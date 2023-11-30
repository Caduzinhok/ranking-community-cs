import { dataRanking } from "../data/dataRanking";

export function TopRanking(){
    return (
        <div className="bg-[var(--bg-ranking)] mt-8 rounded-sm py-5 flex flex-col items-center">
            <div className="text-2xl text-[var(--text-primary)]">
                Ranking Semanal
            </div>
        {dataRanking.map((team, index) => (
            <div key={index} className="flex justify-between w-96 py-1 px-4 border-b-[1px] border-slate-300 hover:bg-[var(--hover-bg-button)] hover:cursor-pointer">
                <div className="flex items-center justify-center text-[var(--text-primary)]">
                    <a href="">{index + 1}. {team.teamName}</a>
                </div>
                <span className="text-[var(--text-primary)]">{team.countVotes}</span>
            </div>
        ))}
      </div>
    )
}
export default function Ranking(){
    return (
        <div className="h-full bg-[var(--bg-primary)] flex items-start justify-center">
            <TopRanking/>
        </div>
    )
}