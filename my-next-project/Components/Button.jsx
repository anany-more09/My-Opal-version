export default function Button({ label }) {
    return (
      <div className="bg-yellow-400 rounded-full p-1 m-1 text-center">
        <button className="px-4 py-2">{label}</button>
      </div>
    );
  }
  