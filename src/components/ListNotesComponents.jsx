import { useContext, useEffect } from "react"
import { courseContext } from "./Context"
import BackButton from "./backButton"

function ListNotesComponents() {
  const { courses, notes, importNotesData } = useContext(courseContext)

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes")
        .then(res => res.json())
        .then(json => importNotesData(json))
    }
    fetchData()
  }, [])

  return (
    <>
      {/* <label id="courses">Courses:</label> */}
      <select name="courses">
        {Array.isArray(courses) && courses.map(course => (
          <option key={course.id}>{course.name}</option>
        ))}
      </select>
      <BackButton />

      <br></br>
      <br></br>
      <div>
        {notes.map(note => (
          <div key={note.id} className="noteBox">
            <h4>{note.timestamp} {note.course.name} ({note.course.id})</h4>
            <p>{note.text}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default ListNotesComponents
