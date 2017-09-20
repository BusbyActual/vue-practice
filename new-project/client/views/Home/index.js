import Nav from 'components/Nav'
import Project from 'components/Project'
import Blog from 'components/Blog'


export default {
  render(h) {
    return (
      <div class="page" >
        <Nav />
        <md-layout>
          <md-layout md-flex-large="75">
            <Project />
          </md-layout>
          <md-layout>
            <Blog />
          </md-layout>
        </md-layout>
      </div>
    )
  }
}
