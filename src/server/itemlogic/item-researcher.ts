// @ts-ignore
import FortniteAPI from "fortnite-api-io";
//import { Item } from "./item.ts"

async function getAndLogItems() {
    // Instantiate with API Credentials
    const client = new FortniteAPI("274cfc6f-21cd8529-7bcbbb4f-0c5751b9", {
        defaultLanguage: 'fr',
        ignoreWarnings: false
    });

    try {
        const items = await client.v2.listItems();
        const data = items.items
        for (let i:number = 0; i < 6; i++) {
            let index: number;
            do {
                index = Math.floor(Math.random() * data.length--)
            } while (data[index].type.id != 'outfit')
            console.log(data[index].type + " " + data[index].name)
        }

        //new Item()
        /*data.forEach((item: any) => {
            console.log(item.type)
        })*/
    } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des éléments:", error);
    }
}

getAndLogItems();