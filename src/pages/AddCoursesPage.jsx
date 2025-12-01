import { useState, useContext, useEffect } from "react"
import { courseContext } from "../components/Context"

function AddCoursesPage() {
  const { courses, addCourse, setFirstOrNotCourse } = useContext(courseContext)
  const [input, setInput] = useState("")

  const latestCourse = courses[courses.length - 1]

  const handleSaveCourse = () => {
    addCourse(input)
    setInput("")
    setFirstOrNotCourse(true)
    console.log(courses)
  }

  return (
    <>
      <label>Add a new course here:</label>
      <input
        value={input}
        onChange={(e) => (
          setInput(e.target.value)
        )}
      />
      <button onClick={handleSaveCourse}>Save</button>
      {latestCourse && (
        <div>
          Course {latestCourse.name} was added with id {latestCourse.id}
        </div>
      )}
    </>
  )
}

export default AddCoursesPage
