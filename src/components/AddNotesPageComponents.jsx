import { useState, useEffect, useContext } from "react"
import { courseContext } from "./Context"
import BackButton from "./backButton"

function AddNotesPageComponents() {
  const [text, setText] = useState("")
  const [newNotes, setNewNotes] = useState([])
  const [savePressed, setSavePressed] = useState(false)
  const { courses, importCourseData, hasFetched2, setHasFetched2, addNote } = useContext(courseContext)
  const [selectedCourse, setSelectedCourse] = useState(null)

  const saveOnClick = () => {
    if (text.length > 0) {
      addNote(text, selectedCourse.name, selectedCourse.id)
      setNewNotes([...newNotes, text])
      setText("")
      setSavePressed(true);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses")
        .then(res => res.json())
        .then(json => (importCourseData(json)))
      setHasFetched2(true)
    }

    const setFirstCourse = () => {
      setSelectedCourse(courses[0])
    }

    setFirstCourse()

    if (hasFetched2 == false) {
      fetchData()
    }
  }, [])

  const saveNotes = (e) => {
    setText(e.target.value)
  }

  return (
    <div className="addNotesPage">
      <label>Courses:</label>
      <select disabled={savePressed == false ? false : true}
        onChange={(e) => {
          const course = courses.find(x => x.id == Number(e.target.value))
          setSelectedCourse(course)
        }}>

        if (savePressed == false) {
          courses.map((course) => (
            <option key={course.id} value={course.id}>{course.name}</option>
          ))}
      </select>

      <textarea name="notes" rows="7" cols="35" value={text} placeholder="Start writing notes here" onChange={saveNotes}></textarea>
      <button type="" onClick={saveOnClick}>Save</button>
      <BackButton />

      <br></br>
      <br></br>
      <div>
        {newNotes.map((note, index) => (
          <div key={index} className="noteBox">
            <p>{note}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AddNotesPageComponents
