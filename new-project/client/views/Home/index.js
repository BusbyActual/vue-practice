import Counter from 'components/Counter'
import Nav from 'components/Nav'
import Project from 'components/Project'


export default {
  render(h) {
    return (
      <div class="page" >
        <Nav />
        <Project />
        <Counter />
      </div>
    )
  }
}
