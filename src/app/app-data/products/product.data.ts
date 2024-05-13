import { ProductT } from './product.type';

export class ProductData {
  public static products: Array<ProductT> = [
    {
      id: '1',
      title: 'Athene Cunicularia',
      prices: {
        Baby: 100.25,
        'Grown Up': 300.56
      },
      photos: [
        'https://api.slingacademy.com/public/sample-products/1.png',
        'https://api.slingacademy.com/public/sample-photos/1.jpeg',
        'https://picsum.photos/400/300',
        'https://picsum.photos/800/600'
      ],
      description:
        'Es un búho pequeño y de patas largas que se encuentra en todos los paisajes abiertos de América.',
      offerDiscount: 10
    },
    {
      id: '2',
      title: 'Falco Rusticolus',
      prices: {
        Baby: 45.76,
        'Grown Up': 125.67
      },
      photos: [
        'https://api.slingacademy.com/public/sample-products/2.png',
        'https://api.slingacademy.com/public/sample-photos/2.jpeg',
        'https://picsum.photos/400/300',
        'https://picsum.photos/800/600'
      ],
      description:
        'Especie de ave falconiforme de la familia Falconidae, el más septentrional de los halcones'
    },
    {
      id: '3',
      title: 'Ursus Americanus Emmonsii',
      prices: {
        Baby: 564.82,
        'Grown Up': 2548.76
      },
      photos: [
        'https://api.slingacademy.com/public/sample-products/3.png',
        'https://api.slingacademy.com/public/sample-photos/3.jpeg',
        'https://picsum.photos/400/300',
        'https://picsum.photos/800/600'
      ],
      description: 'Subespecie de mamíferos carnívoros de la familia Ursidae',
      offerDiscount: 15
    },
    {
      id: '4',
      title: 'Casa Rusa',
      prices: {
        'Sin Amueblar': 1000000,
        Amueblada: 1300000
      },
      photos: [
        'https://api.slingacademy.com/public/sample-products/4.png',
        'https://api.slingacademy.com/public/sample-photos/4.jpeg',
        'https://picsum.photos/400/300',
        'https://picsum.photos/800/600'
      ],
      description: '274 Sretensky Boulevard'
    },
    {
      id: '5',
      title: 'Fratercula Arctica',
      prices: {
        Baby: 675.45,
        'Grown Up': 3674.86
      },
      photos: [
        'https://api.slingacademy.com/public/sample-products/5.png',
        'https://api.slingacademy.com/public/sample-photos/5.jpeg',
        'https://picsum.photos/400/300',
        'https://picsum.photos/800/600'
      ],
      description: 'Especie de ave caradriforme de la familia Alcidae',
      offerDiscount: 20
    },
    {
      id: '6',
      title: 'Edificio Abandonado',
      prices: {
        'Sin Restaurar': 7549874.65,
        Restaurado: 12759376.87
      },
      photos: [
        'https://api.slingacademy.com/public/sample-products/6.png',
        'https://api.slingacademy.com/public/sample-photos/6.jpeg',
        'https://picsum.photos/400/300',
        'https://picsum.photos/800/600'
      ],
      description:
        'Antiguo edificio abandonado con entrada en forma de arco con columnas y porche'
    },
    {
      id: '7',
      title: 'Bubo Scandiacus',
      prices: {
        Baby: 656.87,
        'Grown Up': 1652.87
      },
      photos: [
        'https://api.slingacademy.com/public/sample-products/7.png',
        'https://api.slingacademy.com/public/sample-photos/7.jpeg',
        'https://picsum.photos/400/300',
        'https://picsum.photos/800/600'
      ],
      description: 'Especie de ave estrigiforme de la familia Strigidae',
      offerDiscount: 25
    },
    {
      id: '8',
      title: 'Chelonia Mydas',
      prices: {
        Baby: 245.76,
        'Grown Up': 657.98
      },
      photos: [
        'https://api.slingacademy.com/public/sample-products/8.png',
        'https://api.slingacademy.com/public/sample-photos/8.jpeg',
        'https://picsum.photos/400/300',
        'https://picsum.photos/800/600'
      ],
      description: 'Especie de tortuga marina de la familia Cheloniidae'
    },
    {
      id: '9',
      title: 'Panthera Leo Female',
      prices: {
        Baby: 2347.54,
        'Grown Up': 8587.28
      },
      photos: [
        'https://api.slingacademy.com/public/sample-products/9.png',
        'https://api.slingacademy.com/public/sample-photos/9.jpeg',
        'https://picsum.photos/400/300',
        'https://picsum.photos/800/600'
      ],
      description:
        'Mamífero carnívoro de la familia de los félidos y una de las cinco especies del género Panthera',
      offerDiscount: 30
    },
    {
      id: '10',
      title: 'Cereza',
      prices: {
        Kg: 10.1,
        Pound: 22.26
      },
      photos: [
        'https://api.slingacademy.com/public/sample-products/10.png',
        'https://api.slingacademy.com/public/sample-photos/10.jpeg',
        'https://picsum.photos/400/300',
        'https://picsum.photos/800/600'
      ],
      description: 'Fruto de varios árboles del género Prunus'
    },
    {
      id: '11',
      title: 'Betta splendens',
      prices: {
        Baby: 20.76,
        'Grown Up': 100.54
      },
      photos: [
        'https://api.slingacademy.com/public/sample-products/11.png',
        'https://api.slingacademy.com/public/sample-photos/11.jpeg',
        'https://picsum.photos/400/300',
        'https://picsum.photos/800/600'
      ],
      description:
        'Comúnmente conocido como betta,  es un pez de agua dulce originario del sudeste asiático',
      offerDiscount: 35
    },
    {
      id: '12',
      title: 'Tranvia',
      prices: {
        Chico: 50.5,
        Mediano: 101,
        Grande: 151.5
      },
      photos: [
        'https://api.slingacademy.com/public/sample-products/12.png',
        'https://api.slingacademy.com/public/sample-photos/12.jpeg',
        'https://picsum.photos/400/300',
        'https://picsum.photos/800/600'
      ],
      description: 'Sistema de transporte ferroviario'
    },
    {
      id: '13',
      title: 'Dracaena Draco',
      prices: {
        Seed: 150.54,
        Tree: 1474.76
      },
      photos: [
        'https://api.slingacademy.com/public/sample-products/13.png',
        'https://api.slingacademy.com/public/sample-photos/13.jpeg',
        'https://picsum.photos/400/300',
        'https://picsum.photos/800/600'
      ],
      description:
        'Especie de planta perenne de porte arbóreo de la familia Asparagaceae',
      offerDiscount: 40
    },
    {
      id: '14',
      title: 'Ananas Comosus',
      prices: {
        Kg: 20.5,
        Pound: 45.19
      },
      photos: [
        'https://api.slingacademy.com/public/sample-products/14.png',
        'https://api.slingacademy.com/public/sample-photos/.14jpeg',
        '400/300',
        '800/600'
      ],
      description:
        'Especie de la familia de las bromeliáceas, nativa de América del Sur'
    },
    {
      id: '15',
      title: 'Phalaenopsis',
      prices: {
        Seed: 76.97,
        Flower: 306.54
      },
      photos: [
        'https://api.slingacademy.com/public/sample-products/15.png',
        'https://api.slingacademy.com/public/sample-photos/15.jpeg',
        'https://picsum.photos/400/300',
        'https://picsum.photos/800/600'
      ],
      description: 'Especie de orquídeas de la familia Orchidaceae',
      offerDiscount: 45
    },
    {
      id: '16',
      title: 'Arbol',
      prices: {
        Seed: 26.87,
        Tree: 562.98
      },
      photos: [
        'https://api.slingacademy.com/public/sample-products/16.png',
        'https://api.slingacademy.com/public/sample-photos/16.jpeg',
        'https://picsum.photos/400/300',
        'https://picsum.photos/800/600'
      ],
      description: 'Producto Aleatorio'
    },
    {
      id: '17',
      title: 'Burro Majorero',
      prices: {
        Baby: 456.86,
        'Grown Up': 6354.72
      },
      photos: [
        'https://api.slingacademy.com/public/sample-products/17.png',
        'https://api.slingacademy.com/public/sample-photos/17.jpeg',
        'https://picsum.photos/400/300',
        'https://picsum.photos/800/600'
      ],
      description:
        'Raza de burro español, propio de la isla canaria de Fuerteventura',
      offerDiscount: 50
    },
    {
      id: '18',
      title: 'Samoyedo',
      prices: {
        Baby: 265.76,
        'Grown Up': 4527.65
      },
      photos: [
        'https://api.slingacademy.com/public/sample-products/18.png',
        'https://api.slingacademy.com/public/sample-photos/18.jpeg',
        'https://picsum.photos/400/300',
        'https://picsum.photos/800/600'
      ],
      description: 'Raza de perro originaria de Rusia'
    },
    {
      id: '19',
      title: 'Mceta',
      prices: {
        '16lt': 256.76,
        '24lt': 476.25
      },
      photos: [
        'https://api.slingacademy.com/public/sample-products/19.png',
        'https://api.slingacademy.com/public/sample-photos/22.jpeg',
        'https://picsum.photos/400/300',
        'https://picsum.photos/800/600'
      ],
      description: 'Maceta de Ceramica',
      offerDiscount: 5
    },
    {
      id: '20',
      title: 'Automovil Renovado',
      prices: {
        'Sin Cambios': 128836.76,
        'Pintura Nueva': 153725.98
      },
      photos: [
        'https://api.slingacademy.com/public/sample-products/20.png',
        'https://api.slingacademy.com/public/sample-photos/24.jpeg',
        'https://picsum.photos/400/300',
        'https://picsum.photos/800/600'
      ],
      description: 'Automovil Recien Renovado'
    }
  ];
}
