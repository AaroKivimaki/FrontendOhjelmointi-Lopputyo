import { Link } from "react-router"
import { courseContext } from "../components/Context"
import { useContext } from "react"

function LandingPage() {
  const { courses, firstOrNotCourse } = useContext(courseContext)

  return (
    <>
      <button><Link to={firstOrNotCourse == true ? "/CreateNotes" : "/"}>Create notes</Link></button>
      <button><Link to="/ListNotes">List notes</Link></button>
      <button><Link to="/AddCourses">Add courses</Link></button>
      <div onClick={() => console.log(courses)}>
        Testi
      </div>
    </>
  )
}

export default LandingPage
