import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */

//brands
import {faFacebookF} from '@fortawesome/free-brands-svg-icons'
import {faPinterestP} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'

//solid
import { faPhone } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(
    faFacebookF,
    faPhone,
    faPinterestP,
    faTwitter
    )

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
