const ScreenLoader = () => {
  return (
    <div className="z-50 flex items-center justify-center h-[100dvh] bg-[rgb(36,36,36)]">
      <div className="w-8 h-8 border-4 border-purple-600 border-solid rounded-full cursor-none animate-spin"/>
      <p className="mt-10 text-base font-bold text-center text-violet-500">Loading...</p>
    </div>
  );
};
export default ScreenLoader;