// filepath: /c:/Users/memin/Documents/Web Projects/mehmeteminbayrak.github.io/my-portfolio/src/fontawesome.js
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEnvelope, faPhone, faBars } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faEnvelope, faPhone, faLinkedin, faGithub, faBars);

export default FontAwesomeIcon;