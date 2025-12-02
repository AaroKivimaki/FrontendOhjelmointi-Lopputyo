import { createContext, useState, useEffect } from "react";

export const courseContext = createContext()

export function CourseProvider({ children }) {
  const [courses, setCourses] = useState([])
  const [notes, setNotes] = useState([])
  const [id, setId] = useState(4)
  const [hasFetched, setHasFetched] = useState(false)
  const [firstOrNotCourse, setFirstOrNotCourse] = useState(false)

  const addCourse = (course) => {
    setCourses((previousCourses) => [
      ...previousCourses,
      { id: id, name: course }
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
      firstOrNotCourse, setFirstOrNotCourse, notes, setNotes
    }}>
      {children}
    </courseContext.Provider>
  )
}
