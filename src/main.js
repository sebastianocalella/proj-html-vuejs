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
import {faCloud} from '@fortawesome/free-solid-svg-icons'
import {faCaretLeft} from '@fortawesome/free-solid-svg-icons'
import {faCaretRight} from '@fortawesome/free-solid-svg-icons'
import {faComment} from '@fortawesome/free-solid-svg-icons'
import {faGaugeSimpleHigh} from '@fortawesome/free-solid-svg-icons'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons'
import {faStopwatch} from '@fortawesome/free-solid-svg-icons'
import {faTabletScreenButton} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(
    faCloud,
    faCaretLeft,
    faCaretRight,
    faComment,
    faFacebookF,
    faGaugeSimpleHigh,
    faMagnifyingGlass,
    faPhone,
    faPinterestP,
    faQuoteLeft,
    faStopwatch,
    faTabletScreenButton,
    faTwitter
    )

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
