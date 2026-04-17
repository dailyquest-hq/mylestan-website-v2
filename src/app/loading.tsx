export default function Loading() {
  return (
    <main className="bg-[#0f100a] min-h-dvh w-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <div className="w-12 h-12 border-2 border-white/20 border-t-[#ed5128] rounded-full animate-spin" />
        <p className="font-poppins text-[#9f9f9f] text-sm uppercase tracking-widest">Loading</p>
      </div>
    </main>
  );
}
