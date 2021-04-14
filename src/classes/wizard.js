'use strict';

class Wizard {
    constructor() {
        this.class = 'wizard';
    }

    getClass() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.class);
            }, 3000);
        });
    }
}

export default Wizard;

