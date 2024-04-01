
const errorDisplay = ({error}) => {
  return (
    <div className="bg-red-400 h-fit rounded p-4 flex flex-col gap-5">
      
      <p>Sorry. There is an error occured. Try again later..</p>
      <h2 className="font-semibold">{error} </h2>
    </div>
  )
}

export default errorDisplay