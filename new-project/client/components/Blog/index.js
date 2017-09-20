import style from './style.css'

export default {
  render(h) {
return (<md-card>
  <md-card-media>
    <img src="assets/card-image-1.jpg" alt="People"></img>
  </md-card-media>

  <md-card-header>
    <div class="md-title">Title goes here</div>
    <div class="md-subhead">Subtitle here</div>
  </md-card-header>

  <md-card-actions>
    <md-button>Action</md-button>
    <md-button>Action</md-button>
  </md-card-actions>

  <md-card-content>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
  </md-card-content>
</md-card>

<md-card>
  <md-card-header>
    <md-card-header-text>
      <div class="md-title">Title goes here</div>
      <div class="md-subhead">Subtitle here</div>
    </md-card-header-text>

    <md-menu md-size="4" md-direction="bottom left">
      <md-button class="md-icon-button" md-menu-trigger>
        <md-icon>more_vert</md-icon>
      </md-button>

      <md-menu-content>
        <md-menu-item>
          <span>Call</span>
          <md-icon>phone</md-icon>
        </md-menu-item>

        <md-menu-item>
          <span>Send a message</span>
          <md-icon>message</md-icon>
        </md-menu-item>
      </md-menu-content>
    </md-menu>
  </md-card-header>

  <md-card-media>
    <img src="assets/card-image-1.jpg" alt="People"></img>
  </md-card-media>

  <md-card-content>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
  </md-card-content>
</md-card>

<md-card>
  <md-card-media>
    <img src="assets/card-image-2.jpg" alt="People"></img>
  </md-card-media>

  <md-card-content>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.
  </md-card-content>
</md-card>

<md-card>
  <md-card-media>
    <img src="assets/card-image-2.jpg" alt="People"></img>
  </md-card-media>

  <md-card-header>
    <div class="md-title">Title goes here</div>
    <div class="md-subhead">Subtitle here</div>
  </md-card-header>

  <md-card-actions>
    <md-button>Action</md-button>
    <md-button>Action</md-button>
  </md-card-actions>
</md-card>

  )
  }
}
