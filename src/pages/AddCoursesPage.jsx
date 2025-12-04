import { useState, useContext, useEffect } from "react"
import { courseContext } from "../components/Context"
import BackButton from "../components/backButton"

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
    <div className="addCoursePage">
      <label>Add a new course here:</label>
      <input
        value={input}
        onChange={(e) => (
          setInput(e.target.value)
        )}
      />
      <button onClick={handleSaveCourse}>Save</button>
      <BackButton />
      {latestCourse && (
        <div>
          Course {latestCourse.name} was added with id {latestCourse.id}
        </div>
      )}
    </div>
  )
}

export default AddCoursesPage
