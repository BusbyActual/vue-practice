import style from './style.css'

export default {
  render(h) {
return (
  <div>
<md-card>
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
  Actually austin tbh 3 wolf moon single-origin coffee farm-to-table bespoke. Everyday carry occupy try-hard pitchfork meggings. Tilde poke hashtag, raclette pour-over semiotics gochujang 8-bit echo park neutra roof party stumptown kitsch microdosing etsy. Roof party next level tofu meh humblebrag banh mi marfa master cleanse four loko small batch normcore gentrify truffaut fanny pack VHS. Tumeric photo booth microdosing, kickstarter copper mug succulents brooklyn godard air plant authentic kale chips single-origin coffee. VHS yuccie master cleanse unicorn
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
  quinoa swag af ramps snackwave irony poke. Aesthetic actually XOXO lomo, DIY beard poke vinyl godard trust fund hoodie skateboard seitan hot chicken mixtape. Drinking vinegar organic occupy, truffaut vinyl palo santo yuccie tbh. Seitan small batch unicorn pinterest 90's hoodie hashtag master cleanse dreamcatcher kitsch. Pinterest flexitarian craft beer celiac kogi crucifix kale chips adaptogen ramps synth portland asymmetrical roof party trust fund. Chillwave jean shorts man bun,
  </md-card-content>
</md-card>

<md-card>
  <md-card-media>
    <img src="assets/card-image-2.jpg" alt="People"></img>
  </md-card-media>

  <md-card-content>
   wayfarers deep v vice twee try-hard gochujang hoodie schlitz humblebrag

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
</div>
    )
  }
}
