import { Link } from "react-router"
import { courseContext } from "../components/Context"
import { useContext } from "react"

function LandingPage() {
  const { firstOrNotCourse } = useContext(courseContext)

  return (
    <>
      <h1>Create awesome notes for your classes</h1>
      <div className="firstPage">
        <button className="button-85"><Link to={firstOrNotCourse == true ? "/CreateNotes" : "/"}>Create notes</Link></button>
        <button className="button-85"><Link to="/ListNotes">List notes</Link></button>
        <button className="button-85"><Link to="/AddCourses">Add courses</Link></button>
      </div>
      {firstOrNotCourse == false && <div className="noAccessYet">
        You can get to making notes once you've added a course!
      </div>}
    </>
  )
}

export default LandingPage
