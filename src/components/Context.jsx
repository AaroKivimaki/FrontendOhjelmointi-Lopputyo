import { createContext, useState } from "react";

export const courseContext = createContext()

export function CourseProvider({ children }) {
  const [courses, setCourses] = useState([])
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

  const importCourseData = (course) => {
    setCourses(prev => [...prev, ...course])
  }

  return (
    <courseContext.Provider value={{ courses, addCourse, importCourseData, hasFetched, setHasFetched, firstOrNotCourse, setFirstOrNotCourse }}>
      {children}
    </courseContext.Provider>
  )
}
