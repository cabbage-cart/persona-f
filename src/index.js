import './index.css'
import './styles.scss'

import  Wizard from './classes';

const wizard = new Wizard();

wizard.getClass().then(r => console.log(r));