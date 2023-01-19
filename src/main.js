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

//solid fa-stopwatch
import {faCloud} from '@fortawesome/free-solid-svg-icons'
import {faGaugeSimpleHigh} from '@fortawesome/free-solid-svg-icons'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {faStopwatch} from '@fortawesome/free-solid-svg-icons'
import {faTabletScreenButton} from '@fortawesome/free-solid-svg-icons'

//regular 

/* add icons to the library */
library.add(
    faCloud,
    faFacebookF,
    faGaugeSimpleHigh,
    faMagnifyingGlass,
    faPhone,
    faPinterestP,
    faStopwatch,
    faTabletScreenButton,
    faTwitter
    )

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
