import { useState } from "react"

function TextBox() {
  const [text, setText] = useState("")

  const saveNotes = (e) => {
    setText(e.target.value)
    console.log(text)
  }

  return (
    <>
      <textarea name="notes" rows="7" cols="35" placeholder="Start writing notes here" value={text} onChange={saveNotes}></textarea>
    </>
  )
}

export default TextBox
