import Counter from 'components/Counter'
import Nav from 'components/Nav'

export default {
  render(h) {
    return (
      <div class="page">
        <Nav />
        <Counter />
        <p>
          To get started, edit files in <code>./client</code> and save.
        </p>
      </div>
    )
  }
}
