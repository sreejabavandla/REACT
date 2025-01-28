
function Button() {

  let count = 0;

  const handleClick = (e) => {
    console.log(e);
    count++;
    console.log(`ouch ${count}`)
  };

  return(
    <button className="button" onClick={handleClick}>Click Me </button>
  );

}

export default Button