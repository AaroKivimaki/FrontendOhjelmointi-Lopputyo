import { Link } from "react-router"
import { useState } from "react"

function SaveAndBackButtons() {
  const [text, setText] = useState("")

  const saveOnClick = () => {
    if (text.length > 0) {
      console.log(text)
    }
  }

  const saveNotes = (e) => {
    setText(e.target.value)
  }

  return (
    <>
      <textarea name="notes" rows="7" cols="35" placeholder="Start writing notes here" onChange={saveNotes}></textarea>
      <button type="" onClick={saveOnClick}>Save</button>
      <button type=""><Link to={"/"}>Back</Link></button>
    </>
  )
}

export default SaveAndBackButtons
