
const CustomForm = () => {

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(e)
    }

  return (
    <form onSubmit={handleFormSubmit}>

    </form>
  )
}

export default CustomForm