export class ClassBuilder {
    static skill: string;
    static profession: string;

    set skill(value: string) {
        this.skill = value;
    }

    get skill(): string {
        return this.skill;
    }

    set profession(value: string) {
        this.skill = value;
    }

    get profession(): string {
        return this.profession
    }
}

