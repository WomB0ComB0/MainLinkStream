import './assets/Styles/global.css'
const ScreenLoader = () => {
  return (
    <div className="fixed top-0 left-0 z-50 flex justify-center w-full h-full align-middle ">
      <div className="w-8 h-8 border-4 border-purple-600 border-solid rounded-full cursor-none animate-spin"></div>
      <p className="mt-10 text-base font-bold text-center text-violet-500">Loading...</p>
    </div>
  );
};
export default ScreenLoader;