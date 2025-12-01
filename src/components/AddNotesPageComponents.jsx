import { Link } from "react-router"
import { useState, useEffect, useContext } from "react"
import { courseContext } from "./Context"

function AddNotesPageComponents() {
  const [text, setText] = useState("")
  const [savePressed, setSavePressed] = useState(false)
  const { courses, importCourseData } = useContext(courseContext)

  const saveOnClick = () => {
    if (text.length > 0) {
      console.log(text)
    }
    setText("")
    setSavePressed(true);
  }

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses")
        .then(res => res.json())
        .then(json => (importCourseData(json)))
    }
    fetchData()
  }, [])

  const saveNotes = (e) => {
    setText(e.target.value)
  }

  return (
    <>
      <label>Courses:</label>
      <select>
        {savePressed == false ? courses.map((course) => (
          <option value="" key={course.id}>{course.name}</option>
        )) : <option>lol</option>}
      </select>
      <textarea name="notes" rows="7" cols="35" value={text} placeholder="Start writing notes here" onChange={saveNotes}></textarea>
      <button type="" onClick={saveOnClick}>Save</button>
      <button type=""><Link to={"/"}>Back</Link></button>
    </>
  )
}

export default AddNotesPageComponents
