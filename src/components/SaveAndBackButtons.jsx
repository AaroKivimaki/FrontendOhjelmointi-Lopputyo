function SaveAndBackButtons({ text }) {
  const saveOnClick = () => {
    console.log(text)
  }

  return (
    <>
      <button type="" onClick={saveOnClick}>Save</button>
      <button type="">Back</button>
    </>
  )
}

export default SaveAndBackButtons
