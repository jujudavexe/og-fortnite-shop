export class Item {
    private readonly _name: string;
    private readonly _price: string;
    private readonly _rarity: string;
    private readonly _type: string;
    constructor(name: string, price: string, rarity: string, type: string) {
        this._name = name;
        this._price = price;
        this._rarity = rarity;
        this._type = type;
    }

    get name(): string {
        return this._name;
    }

    get price(): string {
        return this._price;
    }

    get rarity(): string {
        return this._rarity;
    }

    get type(): string {
        return this._type;
    }
}