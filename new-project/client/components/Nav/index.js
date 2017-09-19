import style from './style.css'

export default {
  render(h) {
    return (
      <md-toolbar>
        <router-link tag="md-button" to="/home" class="md-raised md-primary">Home</router-link>
        <router-link tag="md-button" to="/projects" class="md-raised md-primary">Projects</router-link>
        <router-link tag="md-button" to="/components/about" class="md-raised md-primary">About</router-link>
      </md-toolbar>
    )
  }
}
