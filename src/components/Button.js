const Button = ({ name }) => {
  return (
    <div>
      <button className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-lg m-2 text-sm">
        {name}
      </button>
    </div>
  );
};

export default Button;
