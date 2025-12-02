import { useContext, useEffect } from "react"
import { courseContext } from "./Context"
import BackButton from "./backButton"

function ListNotesComponents() {
  const { courses, notes, importNotesData, hasFetched, setHasFetched } = useContext(courseContext)

  if (hasFetched == false) {
    useEffect(() => {
      const fetchData = async () => {
        await fetch("https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes")
          .then(res => res.json())
          .then(json => importNotesData(json))
        setHasFetched(true)
      }
      fetchData()
    }, [])
  }

  return (
    <>
      <select>
        {courses.map((course) => (
          <option value="" key={course.id}>{course.name}</option>
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
