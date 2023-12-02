import './shop.css'

const items:string[] = ['Soldat au crâne', 'Faucheuse', 'baguette étoilée', 'Cristal', 'éclaireuse galaxy', 'Aile articulée', 'Terreur sombre', 'Voleur de coeur']

function Shop() {
    return <div className={'background-container'}>
        <ShopContent items={items} hidden={false}></ShopContent>
    </div>
}
function ShopContent({items, hidden}: {items: string[], hidden: boolean}) {
    if(hidden){
        return null
    }
    return <ul className={'items'}>
        {items.map((item: string) => (<li className={'item-box'}>{item}</li>))}
    </ul>
}

export default Shop