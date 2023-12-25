import { rarityStyles } from "./rarity-color.ts";

export class Item {
    private readonly _name: string;
    private readonly _price: string;
    private readonly _background: string;
    private readonly _border: string;
    private readonly _type: string;
    private readonly _image: string;

    constructor(name: string, price: string, rarity: string, type: string, image: string) {
        this._name = name;
        this._price = price;
        // @ts-ignore
        this._background = rarityStyles[rarity].backgroundColor;
        // @ts-ignore
        this._border = rarityStyles[rarity].borderColor;
        this._type = type;
        this._image = image;
    }

    get name(): string {
        return this._name;
    }

    get price(): string {
        return this._price;
    }

    get type(): string {
        return this._type;
    }

    get image(): string {
        return this._image;
    }


    get background(): string {
        return this._background;
    }

    get border(): string {
        return this._border;
    }
}