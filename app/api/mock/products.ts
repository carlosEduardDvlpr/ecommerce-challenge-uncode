// Object representando dados fakes da nossa API
// 3 categorias (computadores, perifericos e acessorios)

export const products = [
  // ===== computadores =====
  {
    id: 1,
    name: 'Notebook casual',
    price: 4500,
    category: 'computadores',
    image: 'https://placehold.com/600x600',
    shortDescription: 'Notebook ideal para trabalho e estudos.',
    fullDescription:
      'Notebook casual equipado com processador Intel Core i5, 8GB de memória RAM e SSD de 256GB, oferecendo ótimo desempenho para tarefas do dia a dia, estudos e trabalho profissional.',
    stock: 10,
  },
  {
    id: 2,
    name: 'MacBook',
    price: 7200,
    category: 'computadores',
    image: 'https://placehold.com/600x600',
    shortDescription: 'Notebook potente com chip M1.',
    fullDescription:
      'MacBook design ultrafino, excelente autonomia de bateria e alto desempenho para desenvolvimento, edição de vídeos e produtividade.',
    stock: 5,
  },
  {
    id: 3,
    name: 'PC Gamer',
    price: 6800,
    category: 'computadores',
    image: 'https://placehold.com/600x600',
    shortDescription: 'Desktop gamer com ótimo custo-benefício.',
    fullDescription:
      'PC Gamer equipado com processador Ryzen 5, 16GB de RAM e placa de vídeo dedicada, ideal para jogos modernos e aplicações gráficas.',
    stock: 7,
  },
  {
    id: 4,
    name: 'All-in-One',
    price: 5200,
    category: 'computadores',
    image: 'https://placehold.com/600x600',
    shortDescription: 'Computador compacto com tela integrada.',
    fullDescription:
      'All-in-One com design moderno, tela integrada de alta qualidade e desempenho equilibrado, perfeito para ambientes corporativos e home office.',
    stock: 6,
  },

  // ===== perifericos =====
  {
    id: 5,
    name: 'Teclado Mecânico RGB',
    price: 450,
    category: 'perifericos',
    image: 'https://placehold.com/600x600',
    shortDescription: 'Teclado mecânico RGB com switches blue.',
    fullDescription:
      'Teclado mecânico com switches blue, iluminação RGB personalizável e construção robusta, ideal para gamers e programadores.',
    stock: 20,
  },
  {
    id: 6,
    name: 'Mouse Gamer',
    price: 320,
    category: 'perifericos',
    image: 'https://placehold.com/600x600',
    shortDescription: 'Mouse gamer preciso e ergonômico.',
    fullDescription:
      'Mouse gamer, design ergonômico e botões programáveis para máxima performance em jogos.',
    stock: 25,
  },
  {
    id: 7,
    name: 'Headset Gamer',
    price: 600,
    category: 'perifericos',
    image: 'https://placehold.com/600x600',
    shortDescription: 'Headset gamer',
    fullDescription:
      'Headset gamer, microfone com cancelamento de ruído e conforto para longas sessões de uso.',
    stock: 15,
  },
  {
    id: 8,
    name: "Monitor Full HD 24'",
    price: 1100,
    category: 'perifericos',
    image: 'https://placehold.com/600x600',
    shortDescription: 'Monitor 24 polegadas Full HD.',
    fullDescription:
      'Monitor Full HD de 24 polegadas com ótima qualidade de imagem, taxa de atualização de 75Hz e excelente custo-benefício.',
    stock: 12,
  },

  // ===== acessorios =====
  {
    id: 9,
    name: 'SSD 1TB',
    price: 850,
    category: 'acessorios',
    image: 'https://placehold.com/600x600',
    shortDescription: 'Aramzenamento SSD rápido',
    fullDescription:
      'SSD de 1TB com altas velocidades de leitura e gravação, ideal para melhorar o desempenho de notebooks e desktops.',
    stock: 30,
  },
  {
    id: 10,
    name: 'HD Externo 2TB',
    price: 520,
    category: 'acessorios',
    image: 'https://placehold.com/600x600',
    shortDescription: 'HD externo portátil de 2TB.',
    fullDescription:
      'HD externo de 2TB com conexão USB 3.0, ideal para backup, transporte de arquivos e armazenamento extra.',
    stock: 18,
  },
  {
    id: 11,
    name: 'Hub USB-C 6 em 1',
    price: 280,
    category: 'acessorios',
    image: 'https://placehold.com/600x600',
    shortDescription: 'Hub USB-C multifuncional.',
    fullDescription:
      'Hub USB-C 6 em 1 com portas HDMI, USB 3.0 e leitor de cartões, ampliando a conectividade do seu dispositivo.',
    stock: 22,
  },
  {
    id: 12,
    name: 'Base Refrigerada para Notebook',
    price: 190,
    category: 'acessorios',
    image: 'https://placehold.com/600x600',
    shortDescription: 'Base refrigerada com ajuste de altura.',
    fullDescription:
      'Base refrigerada para notebook com múltiplos coolers, ajuste de altura e melhor dissipação de calor.',
    stock: 16,
  },
];
