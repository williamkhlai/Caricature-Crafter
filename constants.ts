import { SelectOption, AspectRatioOption } from './types';

export const ACTIVITY_OPTIONS: SelectOption[] = [
  { label: 'Holding a Coffee Mug', value: 'holding a steaming coffee mug' },
  { label: 'Playing a Guitar', value: 'playing an acoustic guitar' },
  { label: 'Using a Laptop', value: 'typing on a sleek laptop' },
  { label: 'Winking & Thumbs Up', value: 'winking with a confident thumbs up' },
  { label: 'Reading a Book', value: 'intently reading a thick book' },
  { label: 'Holding a Game Controller', value: 'holding a video game controller' },
  { label: 'Enjoying a glass of wine', value: 'enjoying a glass of red wine' },
  { label: 'Riding a Skateboard', value: 'speeding on a cool skateboard' },
  { label: 'Painting on Canvas', value: 'painting a masterpiece on an easel' },
  { label: 'DJing with Headphones', value: 'DJing at a turntable with headphones on' },
  { label: 'Meditating Peacefully', value: 'meditating peacefully with a slight smile' },
  { label: 'Riding a Rocket', value: 'riding a small, personal rocket through the clouds' },
  { label: 'Holding a Sword', value: 'confidently holding a shining sword' },
  { label: 'Lifting Dumbbells', value: 'flexing while lifting heavy dumbbells' },
  { label: 'Conducting an Orchestra', value: 'passionately conducting an orchestra with a baton' },
];

export const CLOTHING_OPTIONS: SelectOption[] = [
  { label: "Use Photo's Clothing", value: 'none' },
  { label: 'Casual T-shirt & Jeans', value: 'a casual t-shirt and jeans' },
  { label: 'Formal Suit & Tie', value: 'a formal suit and tie' },
  { label: 'Cozy Sweater', value: 'a cozy sweater' },
  { label: 'Sporty Hoodie', value: 'a sporty hoodie' },
  { label: 'Vintage Leather Jacket', value: 'a vintage leather jacket' },
  { label: "Chef's Uniform", value: "a chef's uniform with a tall hat" },
  { label: "Knight's Armor", value: "shining knight's armor" },
  { label: "Wizard Robe", value: "a magical wizard robe with stars" },
  { label: "Superhero Costume", value: "a vibrant superhero costume with a cape" },
  { label: 'Bohemian Blouse & Skirt', value: 'a bohemian style flowy blouse and a long skirt' },
  { label: 'Punk Rocker Gear', value: 'a punk rock outfit with a band t-shirt and studded leather jacket' },
  { label: 'Futuristic Jumpsuit', value: 'a sleek, futuristic silver jumpsuit' },
  { label: 'Traditional Kimono', value: 'a traditional Japanese kimono with an obi sash' },
  { label: "Swashbuckler's Pirate Garb", value: "a swashbuckler's pirate outfit with a puffy shirt and vest" },
  { label: 'Astronaut Suit', value: 'a full astronaut suit with a helmet' },
  { label: 'Doctor\'s Lab Coat', value: 'a white doctor\'s lab coat with a stethoscope' },
  { label: 'Detective\'s Trench Coat', value: 'a classic detective\'s trench coat and fedora' },
  { label: 'Mad Scientist Outfit', value: 'a stereotypical mad scientist\'s stained lab coat and goggles' },
  { label: 'Viking Armor', value: 'rugged Viking leather and fur armor' },
  { label: 'Pharaoh Attire', value: 'ancient Egyptian pharaoh attire with a nemes headdress' },
  { label: 'Gladiator Armor', value: 'Roman gladiator leather armor with a helmet' },
  { label: 'Cyberpunk Gear', value: 'cyberpunk-style gear with neon accents and a high-tech jacket' },
  { label: 'Steampunk Outfit', value: 'a steampunk outfit with gears, goggles, and a waistcoat' },
  { label: 'Race Car Driver Suit', value: 'a colorful race car driver jumpsuit with sponsor logos' },
];

export const HAT_OPTIONS: SelectOption[] = [
  { label: 'None', value: 'none' },
  { label: 'Baseball Cap', value: 'a stylish baseball cap' },
  { label: 'Beanie', value: 'a warm beanie' },
  { label: 'Fedora', value: 'a classic fedora' },
  { label: 'Top Hat', value: 'an elegant top hat' },
];

export const GLASSES_OPTIONS: SelectOption[] = [
  { label: 'None', value: 'none' },
  { label: 'Thick-rimmed Glasses', value: 'thick-rimmed glasses' },
  { label: 'Stylish Sunglasses', value: 'stylish sunglasses' },
  { label: 'Round Spectacles', value: 'round spectacles' },
];

export const BACKGROUND_OPTIONS: SelectOption[] = [
  { label: 'Clean White', value: 'clean white' },
  { label: 'Abstract Gradient', value: 'an abstract soft-focus gradient' },
  { label: 'Cityscape Silhouette', value: 'a simple cityscape silhouette at dusk' },
  { label: 'Nature Scene', value: 'a serene, minimalist nature scene' },
  { label: 'Cozy Library', value: 'a cozy, out-of-focus library setting' },
];

export const SIGNATURE_STYLE_OPTIONS: SelectOption[] = [
  { label: 'Stylish Default', value: 'stylish' },
  { label: 'Elegant Calligraphy', value: 'elegant calligraphic script' },
  { label: 'Bold Block Letters', value: 'bold, hand-drawn block letters' },
  { label: 'Playful Cursive', value: 'playful, looping cursive script' },
  { label: 'Minimalist Sans-serif', value: 'clean, minimalist sans-serif font' },
];

export const ASPECT_RATIO_OPTIONS: AspectRatioOption[] = [
  { label: 'Square', value: '1:1' },
  { label: 'Portrait', value: '9:16' },
  { label: 'Landscape', value: '16:9' },
];