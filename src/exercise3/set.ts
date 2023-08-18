class SetException {
    private info: string;

    constructor(info: string) {
        this.info = info;
    }

    getInfo(): string {
        return this.info;
    }
}

// caracteristics
enum Color {
    red = "red",
    mauve = "mauve",
    green = "green"
};
enum Number {
    one="one",
    two="two",
    three="three"
};
enum Shape {
    oval = "oval",
    wave = "wave",
    diamond = "diamond"
};
enum Filling {
    full = "full",
    empty = "empty",
    hatching = "hatching"
};

const Colors: Set<Color> = new Set([ Color.red, Color.mauve, Color.green ]);
const Numbers: Set<Number> = new Set([ Number.one, Number.two, Number.three ]);
const Shapes: Set<Shape> = new Set([ Shape.oval, Shape.wave, Shape.diamond ]);
const Fillings: Set<Filling> = new Set([ Filling.full, Filling.empty, Filling.hatching ]);

function toString(c: Color|Number|Shape|Filling): string {
    return c.toString().charAt(0);
}

export const printColors = () => {
    console.log(Colors);
}

export function printNumbers() {
    console.log(Numbers);
}

export function printShapes() {
    console.log(Shapes);
}

export function printFillings() {
    console.log(Fillings);
}
