import './index.css'
import './styles.scss'
import { ClassBuilder } from './classes';

class Main {
    newClass: ClassBuilder;

    constructor(private classBuilder: ClassBuilder) {
        this.newClass = this.classBuilder;
        this.newClass.profession = 'wizard';
        this.newClass.skill = 'Ice arrow'
    }

    printProfession() {
        console.log(this.newClass.profession);
    }

    printSkill() {
        console.log(this.newClass.skill);
    }
}

function initClass(): Promise<string | void> {
    const main = new Main(ClassBuilder);
    return new Promise((resolve) => {
        setTimeout(() => {
            main.printSkill();
            main.printProfession();
            resolve();
        }, 1000)
    })
}
initClass().then(() => {});

