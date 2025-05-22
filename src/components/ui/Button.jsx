export default function Button({ text }) {
  return (
    <button className="w-full mt-2 bg-red-800 py-1 text-gray-100 rounded flex items-center justify-center">
       {text}
    </button>
  );
}
