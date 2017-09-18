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
        <p>
          To get started, edit files in <code>./client</code> and save.
        </p>
      </div>
    )
  }
}
