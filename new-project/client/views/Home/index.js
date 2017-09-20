import Nav from 'components/Nav'
import Project from 'components/Project'
import Blog from 'components/Blog'


export default {
  render(h) {
    return (
      <div class="page" >
        <Nav />
        <Project />
        <Blog />
      </div>
    )
  }
}
