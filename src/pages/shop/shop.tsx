import './shop.css'

//const items:string[] = ['Soldat au crâne', 'Faucheuse', 'baguette étoilée', 'Cristal', 'éclaireuse galaxy', 'Aile articulée', 'Terreur sombre', 'Voleur de coeur']
import './shop.css';

const items: string[] = ['Soldat au crâne', 'Faucheuse', 'baguette étoilée', 'Cristal'];
const colors: string[] = ['red', 'blue', 'green', 'purple'];

function Shop() {
    return <div className={'background-container'}>
        <ShopContent items={items} hidden={false}></ShopContent>
    </div>
}

function ShopContent({ items, hidden }: { items: string[], hidden: boolean }) {
    if (hidden) {
        return null;
    }
    return (
        <ul className={'items'}>
            {items.map((item: string, index: number) => (
                <li className={'item-box ' + (index <= 1 ? 'featured' : 'daily')} style={{ borderColor: colors[index] }}>{item}</li>
            ))}
        </ul>
    );
}

export default Shop;