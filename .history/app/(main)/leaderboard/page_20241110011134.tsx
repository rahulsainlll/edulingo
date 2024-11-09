
export default function LeaderboardPage() {
  return (
    <div className="h-full w-full">
      {/* top section for the unlock and side explanation   */}

      <div className="flex w-full h-[45%] ">
        {/* this is the right side  */}
        <div className="w-[58%] flex flex-col items-center h-full ">
          <div className="hover:rotate-[10deg] transition-all duration-500" >
            <img src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/660a07cd535396f03982f24bd0c3844a.svg" alt="not showing" />
          </div>

          <div >
              <h1 className="text-3xl leading-[3.5rem] font-bold text-center opacity-80">Unlock leader boards !</h1>
              <h2 className="text-xl opacity-50 font-semibold text-center">Complete 9 more lessons to start competing</h2>
          </div>

          <div className="w-[42%] ] transition-all  h-[15%] flex items-start pt-[1px] justify-center mt-5 bg-[#E5E5E5] rounded-xl">
            <div className="w-[98%] hover:mt-[1px] transition-all duration-100 h-[92%] bg-white rounded-xl flex items-center justify-center">
              <h1 className="text-[#1CB0F6] font-extrabold tracking-wide text-md uppercase">Start a Lesson</h1>
            </div>
          </div>
        </div>
        {/* this si the left side */}
        <div className="w-[42%] h-full flex items-start justify-center pl-5 ">
        <div className="w-[88%] relative h-[65%] rounded-2xl border-[2px] border-black/10 p-5">
          <h1 className=" font-extrabold opacity-40 text-sm tracking-tighter uppercase">what are leaderboards? </h1>

          <h2 className="text-lg font-extrabold w-[55%] leading-[1.7rem] mt-[6px]">Do lessons. Earn Xp. Compete.</h2>
          <p className="opacity-50 font-bold leading-[1.7rem] tracking-tight mt-2 text-md w-[68%]">Earn XP through lessons, then compete with players in a weekly leaderboard</p>
        <div className="absolute right-1 top-5">
          <img className=" scale-110" src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/071159d03311fcb556c4dfe730941de1.svg" alt="not showing" />
        </div>
        </div>
        </div>
      </div>
{/* this is the bottom part of the leader board  */}
      <div className="w-[58%] h-[55%] pt-5">
        <div className="w-full flex justify-between px-5  ">
          {/* the right side  */}
          <div className="flex items-center gap-5">
            <div className="w-5 h-5 rounded-full bg-black/20"></div>
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img className="w-full h-full object-cover" src="data:image/jpeg;base64,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" alt="not showing" />
            </div>
            <h1 className="font-semibold opacity-70">NikoChan</h1>
          </div>

          <div> 
            <h1 className="text-[#2563EB] font-bold">Rank <span className="">1</span></h1>
          </div>


        </div>
      </div>


    </div>
  )
}