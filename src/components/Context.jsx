import { createContext, useState } from "react";

export const courseContext = createContext()

export function CourseProvider({ children }) {
  const [courses, setCourses] = useState([])
  const [notes, setNotes] = useState([])
  const [id, setId] = useState(4)
  const [hasFetched, setHasFetched] = useState(false)
  const [hasFetched2, setHasFetched2] = useState(false)
  const [firstOrNotCourse, setFirstOrNotCourse] = useState(false)
  const date = new Date().toISOString().split(".")[0]

  const addCourse = (course) => {
    setCourses((previousCourses) => [
      ...previousCourses,
      { id: id, name: course }
    ])
    setId(id + 1)
  }

  const addNote = (note, courseName, courseId) => {
    setNotes((previousNotes) => [
      ...previousNotes,
      {
        id: id, text: note,
        course: {
          id: courseId, name: courseName
        },
        timestamp: date
      }
    ])
    setId(id + 1)
  }

  const importNotesData = (notes) => {
    setNotes(prev => [...prev, ...notes])
  }

  const importCourseData = (course) => {
    setCourses(prev => [...prev, ...course])
  }


  return (
    <courseContext.Provider value={{
      courses, addCourse, importCourseData, importNotesData, hasFetched, setHasFetched,
      firstOrNotCourse, setFirstOrNotCourse, notes, setNotes, hasFetched2, setHasFetched2, addNote
    }}>
      {children}
    </courseContext.Provider>
  )
}
