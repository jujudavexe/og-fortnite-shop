// @ts-ignore
import FortniteAPI from "fortnite-api-io";
import { Item } from "./item.ts"

const client = new FortniteAPI("274cfc6f-21cd8529-7bcbbb4f-0c5751b9", {
    defaultLanguage: 'fr',
    ignoreWarnings: false
});

async function getFeaturedItem(quantity: number) {
    let items: Item[] = [];
    try {
        const itemList = await client.v2.listItems();
        const data = itemList.items;
        for (let i:number = 0; i < quantity; i++) {
            let index: number;
            do {
                index = Math.floor(Math.random() * data.length--)
            } while (data[index].type.id !== 'outfit' || data[index].price <= 0)
            items.push(new Item(data[index].name, data[index].price, data[index].rarity.id, data[index].type.name))
        }
    } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des éléments:", error);
    }
    return items;
}

getFeaturedItem(2).then(r => r.forEach(item => console.log(item.name, item.price, item.type, item.rarity)))