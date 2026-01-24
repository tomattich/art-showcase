import { header } from './JS/header.js'
import { main } from './JS/main.js'
import { cover } from './JS/cover.js'
import { about } from './JS/about.js'
import { featured } from './JS/featured.js'
import { contact } from './JS/contact.js'
import { footer } from './JS/footer.js'
import { animations } from './JS/animations.js'

async function pageLoad() {
    header()
    main()
    cover()
    about()
    await featured()
    contact()
    footer()
    animations()
}

pageLoad()

