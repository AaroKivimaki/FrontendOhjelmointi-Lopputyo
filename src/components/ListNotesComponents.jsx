import { useContext, useEffect, useState } from "react"
import { courseContext } from "./Context"
import BackButton from "./backButton"

function ListNotesComponents() {
  const { courses, notes, importNotesData, hasFetched, setHasFetched } = useContext(courseContext)
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes")
        .then(res => res.json())
        .then(json => importNotesData(json))
      setHasFetched(true)
    }
    if (hasFetched == false) {
      fetchData()
    }
  }, [])

  const deleteNote = (id) => {
    const findIndex = notes.findIndex(index => index.id === id)
    notes.splice(findIndex, 1);
  }

  const courseNotes = () => {
    const notesForCourse = notes.filter(
      n => n.course.id === selectedCourse.id)

    return (
      notesForCourse.map(note => (
        <div key={note.id} className="noteBox">
          <h4>{note.timestamp} {note.course.name} ({note.course.id}) <span onClick={() => deleteNote(note.id)}>X</span></h4>
          <p>{note.text}</p>
        </div>
      ))
    )
  }

  return (
    <>
      <div className="stuff">
        <h3>You can view notes here</h3>
        <select onChange={(e) => {
          const course = courses.find(x => x.id === Number(e.target.value))
          setSelectedCourse(course)
          setShowAll(false)
        }}>
          {courses.map((course) => (
            <option key={course.id} value={course.id}
            >{course.name}</option>
          ))}
        </select>
        <BackButton />
      </div>

      <br></br>
      <br></br>

      {notes.length == 0 && (<div>
        Ei muistiinpanoja!
      </div>)}
      <div key={selectedCourse?.id || "all"}>
        {showAll ? notes.map(note => (
          <div key={note.id} className="noteBox">
            <h4>{note.timestamp} {note.course.name} ({note.course.id}) <span onClick={() => deleteNote(note.id)}>X</span></h4>
            <p>{note.text}</p>
          </div>
        )) : courseNotes()}
      </div>
    </>
  )
}

export default ListNotesComponents
