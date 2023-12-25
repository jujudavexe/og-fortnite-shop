import { Item } from "./item.ts";

const API_KEY = "274cfc6f-21cd8529-7bcbbb4f-0c5751b9";
const API_URL = "https://fortniteapi.io/v2";

const allowedItemType = ['outfit', 'pickaxe', 'emote', 'glider', 'backpack'];

async function fetchItems(url: string): Promise<any[]> {
    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': API_KEY,
            },
        });
        const data = await response.json();
        return data.items;
    } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des éléments:", error);
        return [];
    }
}

export async function getFeaturedItem(quantity: number): Promise<Item[]> {
    const url = `${API_URL}/items/list?lang=fr`;
    const data = await fetchItems(url);

    let items: Item[] = [];
    for (let i: number = 0; i < quantity; i++) {
        let index: number;
        do {
            index = Math.floor(Math.random() * data.length--)
        } while (data[index].type.id !== 'outfit' || data[index].price <= 0 || !['Legendary', 'Epic'].includes(data[index].rarity.id))
        items.push(new Item(
            data[index].name,
            data[index].price,
            data[index].rarity.id.toUpperCase(),
            data[index].type.name,
            data[index].images.featured
        ));
    }
    return items;
}

export async function getDailyItem(quantity: number): Promise<Item[]> {
    const url = `${API_URL}/items/list?lang=fr`;
    const data = await fetchItems(url);

    let items: Item[] = [];
    if (data && Array.isArray(data) && data.length > 0) {
        for (let i = 0; i < quantity; i++) {
            let index;
            do {
                index = Math.floor(Math.random() * data.length--);
            } while (!allowedItemType.includes(data[index].type.id) || data[index].price <= 0);
            items.push(new Item(
                data[index].name,
                data[index].price,
                data[index].rarity.id.toUpperCase(),
                data[index].type.name,
                data[index].images.icon
            ));
        }
    } else {
        console.error("Aucune donnée disponible ou la réponse de l'API est vide.");
    }

    return items;
}

/*getFeaturedItem(2).then(r => r.forEach(item => console.log(item.name, item.price, item.type, item.background, item.border, item.image)));
getDailyItem(4).then(r => r.forEach(item => console.log(item.name, item.price, item.type, item.background, item.border, item.image)));*/

