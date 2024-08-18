export default function Button({ title, onClick, className }) {
  return (
    <button
      className={
        "duration-300 text-white bg-purple-dark hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-purple-dark dark:hover:bg-blue-700 dark:focus:ring-blue-800 " +
        className
      }
      onClick={onClick}
    >
      {title}
    </button>
  );
}
