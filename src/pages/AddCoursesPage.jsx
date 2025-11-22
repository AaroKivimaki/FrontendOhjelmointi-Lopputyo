import { useState } from "react"

function AddCoursesPage({ getCourses }) {
  const [courses, setCourses] = useState({})

  const addText = (e) => {
    setCourses({ name: e.target.value, id: 1 })
  }

  const saveCourse = () => {
    console.log(`Added ${courses.name} to the list`)
  }

  return (
    <>
      <label htmlFor="course">Add a new course here:</label>
      <input type="" name="course" onChange={addText} />
      <button type="" onClick={() => getCourses(courses)} >Save</button>
    </>
  )
}

export default AddCoursesPage
