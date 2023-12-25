export type RarityColor = {
    UNCOMMON: { backgroundColor: string, borderColor: string }
    RARE: { backgroundColor: string, borderColor: string }
    EPIC: { backgroundColor: string, borderColor: string }
    LEGENDARY: { backgroundColor: string, borderColor: string }
};

export const rarityStyles: RarityColor = {
    UNCOMMON: { backgroundColor: 'https://www.techcenturion.com/wp-content/uploads/2018/06/Uncommon-Rarity-150x150.jpg', borderColor: '#6eb24e' },
    RARE: { backgroundColor: 'https://www.techcenturion.com/wp-content/uploads/2018/06/Rare-Rarity-150x150.jpg', borderColor: '#4b80c4' },
    EPIC: { backgroundColor: 'https://www.techcenturion.com/wp-content/uploads/2018/06/Epic-Rarity-150x150.jpg', borderColor: '#c16aee' },
    LEGENDARY: { backgroundColor: 'https://www.techcenturion.com/wp-content/uploads/2018/06/Legendary-Rarity-150x150.jpg', borderColor: '#e0a770' },
};

