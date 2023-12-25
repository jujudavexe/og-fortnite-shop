import './shop.css';
import { Item } from '../../server/itemlogic/item.ts';
import { useState, useEffect } from "react";
import { getFeaturedItem, getDailyItem } from '../../server/itemlogic/item-researcher.ts'

// @ts-ignore
import VbucksIcon from '../../assets/images/icon-vbucks.png';

function Shop() {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const featuredItems = await getFeaturedItem(2);
                const dailyItems = await getDailyItem(4);

                const itemList = [...featuredItems, ...dailyItems];
                setItems(itemList);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

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
                    style={{ backgroundImage: `url(${item.image}), url(${item.background})`, borderColor: item.border }}
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
