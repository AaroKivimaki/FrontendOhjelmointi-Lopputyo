import { useContext } from "react"
import { courseContext } from "./Context"

function ListNotesComponents() {
  const courses = useContext(courseContext)

  return (
    <>
      <select>
        {courses.map((course) => (
          <option key={course.id}>{course.name}</option>
        ))}
      </select>
    </>
  )
}

export default ListNotesComponents
