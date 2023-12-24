import './shop.css';
import { Item } from '../../server/itemlogic/item.ts';
import {useState} from "react";

// @ts-ignore
import VbucksIcon from '../../assets/images/icon-vbucks.png';

// @ts-ignore
import Skin from '../../assets/images/skin.png';

const itemList: Item[] = [
    new Item('Soldat au crâne', '1,000', 'red', 'Skin'),
    new Item('Faucheuse', '1,000', 'blue', 'Skin'),
    new Item('Baguette étoilée', '1,000', 'green', 'Pioche'),
    new Item('Cristal', '1,000', 'purple', 'Skin'),
    new Item('Ghoul', '1,000', 'orange', 'Skin'),
    new Item('Flows', '1,000', 'black', 'Danse')
];

function Shop() {
    const [items] = useState(itemList);

    return (
        <div className={'background-container'}>
            <ShopContent items={items} hidden={false}></ShopContent>
        </div>
    );
}

function ShopContent({ items, hidden }: { items: Item[], hidden: boolean }) {
    if (hidden) {
        return null;
    }
    return (
        <ul className={'items'}>
            {items.map((item: Item, index: number) => (
                <li
                    className={'item-box ' + (index <= 1 ? 'featured' : 'daily')}
                    style={{ backgroundImage: `url(${Skin})`, borderColor: item.rarity }}
                    key={index}
                >
                    <div className={'item-info'}>
                        <p className={'item-name'}>{item.name}</p>
                        <p className={'item-type'}>{item.type}</p>
                        <p className={'item-price'} >
                            <img
                                src={VbucksIcon}
                                alt="Vbucks"
                                style={{height: '13%', width: '13%'}}>
                            </img>
                            {item.price}
                        </p>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default Shop;
