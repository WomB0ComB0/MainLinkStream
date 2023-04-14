import './assets/Styles/global.css'
// import loader component
interface ScreenLoaderProps {
  message?: string;
}
const ScreenLoader: React.FC<ScreenLoaderProps> = ({ message = "Loading..."}) => {
  return (
    <div className=" fixed top-0 left-0 w-full h-full flex justify-center align-middle z-50">
      <div className=" border-4 border-solid border-purple-600 cursor-none rounded-full w-8 h-8 animate-spin"></div>
      <p className=" mt-10 text-violet-500 text-base font-bold text-center">{message}</p>
    </div>
  );
};
export default ScreenLoader;