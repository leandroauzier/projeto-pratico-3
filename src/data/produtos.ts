export type Produto = {
  nome: string;
  descricao: string;
  icone: string;
};

export type LinhaProdutos = {
  id: string;
  titulo: string;
  descricao: string;
  itens: Produto[];
};

export const linhasDeProdutos: LinhaProdutos[] = [
  {
    id: "papelaria",
    titulo: "Papelaria",
    descricao: "Itens essenciais para estudo, anotações e uso diário em escritórios e escolas.",
    itens: [
      {
        nome: "Caderno universitário",
        descricao: "Caderno espiral com 10 matérias, capa resistente e folhas pautadas.",
        icone: "caderno",
      },
      {
        nome: "Caneta esferográfica",
        descricao: "Escrita macia e uniforme, disponível em diversas cores de tinta.",
        icone: "caneta",
      },
      {
        nome: "Lápis grafite",
        descricao: "Grafite nº 2, ideal para escrita e desenho com ótimo acabamento.",
        icone: "lapis",
      },
      {
        nome: "Borracha branca",
        descricao: "Apaga sem manchar o papel e sem danificar a superfície de escrita.",
        icone: "borracha",
      },
    ],
  },
  {
    id: "informatica",
    titulo: "Informática",
    descricao: "Acessórios e periféricos para equipar estações de trabalho com praticidade.",
    itens: [
      {
        nome: "Mouse óptico",
        descricao: "Sensor de precisão, conexão USB e design ergonômico para o dia a dia.",
        icone: "mouse",
      },
      {
        nome: "Teclado USB",
        descricao: "Teclado padrão ABNT2 com acionamento silencioso e fácil instalação.",
        icone: "teclado",
      },
      {
        nome: "Pen drive",
        descricao: "Armazenamento portátil com diferentes capacidades para arquivos do dia a dia.",
        icone: "pendrive",
      },
      {
        nome: "Cabo HDMI",
        descricao: "Transmissão de áudio e vídeo em alta definição para monitores e projetores.",
        icone: "cabo",
      },
    ],
  },
  {
    id: "escritorio",
    titulo: "Materiais de Escritório",
    descricao: "Soluções práticas para organização de documentos e rotina administrativa.",
    itens: [
      {
        nome: "Grampeador",
        descricao: "Estrutura resistente para grampear documentos com praticidade e segurança.",
        icone: "grampeador",
      },
      {
        nome: "Clips metálico",
        descricao: "Caixa com clipes para organização rápida de papéis e documentos.",
        icone: "clips",
      },
      {
        nome: "Pasta catálogo",
        descricao: "Pasta com plásticos internos para arquivar e proteger documentos importantes.",
        icone: "pasta",
      },
      {
        nome: "Organizador de mesa",
        descricao: "Compartimentos para canetas, papéis e itens de uso frequente na mesa.",
        icone: "organizador",
      },
    ],
  },
  {
    id: "suprimentos",
    titulo: "Suprimentos",
    descricao: "Consumíveis para impressão e correspondência, sempre à disposição da sua empresa.",
    itens: [
      {
        nome: "Papel A4",
        descricao: "Resma com 500 folhas, alta alvura e gramatura ideal para impressões diárias.",
        icone: "papel",
      },
      {
        nome: "Cartucho de tinta",
        descricao: "Cartucho compatível com diversas impressoras jato de tinta do mercado.",
        icone: "cartucho",
      },
      {
        nome: "Toner",
        descricao: "Toner para impressoras a laser, com rendimento e qualidade de impressão.",
        icone: "toner",
      },
      {
        nome: "Envelope",
        descricao: "Envelopes em diferentes formatos para correspondências e documentos.",
        icone: "envelope",
      },
    ],
  },
];
