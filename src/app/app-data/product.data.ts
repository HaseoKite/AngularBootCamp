import { ProductT } from './products/product.type';
import { PhotosConstant } from '../../constants/photos-constants';

export class ProductData {
  public static products: Array<ProductT> = [
    {
      id: '1',
      title: 'Athene Cunicularia',
      prices: {
        Baby: 100.25,
        'Grown Up': 300.56
      },
      photos: ['1.png', '1.jpeg'],
      description:
        'Es un búho pequeño y de patas largas que se encuentra en todos los paisajes abiertos de América.'
    },
    {
      id: '2',
      title: 'Falco Rusticolus',
      prices: {
        Baby: 45.76,
        'Grown Up': 125.67
      },
      photos: ['2.png', '2.jpeg'],
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
      photos: ['3.png', '3.jpeg'],
      description: 'Subespecie de mamíferos carnívoros de la familia Ursidae'
    },
    {
      id: '4',
      title: 'Casa Rusa',
      prices: {
        'Sin Amueblar': 1000000,
        Amueblada: 1300000
      },
      photos: ['4.png', '4.jpeg'],
      description: '274 Sretensky Boulevard'
    },
    {
      id: '5',
      title: 'Fratercula Arctica',
      prices: {
        Baby: 675.45,
        'Grown Up': 3674.86
      },
      photos: ['5.png', '5.jpeg'],
      description: 'Especie de ave caradriforme de la familia Alcidae'
    },
    {
      id: '6',
      title: 'Edificio Abandonado',
      prices: {
        'Sin Restaurar': 7549874.65,
        Restaurado: 12759376.87
      },
      photos: ['6.png', '6.jpeg'],
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
      photos: ['7.png', '7.jpeg'],
      description: 'Especie de ave estrigiforme de la familia Strigidae'
    },
    {
      id: '8',
      title: 'Chelonia Mydas',
      prices: {
        Baby: 245.76,
        'Grown Up': 657.98
      },
      photos: ['8.png', '8.jpeg'],
      description: 'Especie de tortuga marina de la familia Cheloniidae'
    },
    {
      id: '9',
      title: 'Panthera Leo Female',
      prices: {
        Baby: 2347.54,
        'Grown Up': 8587.28
      },
      photos: ['9.png', '9.jpeg'],
      description:
        'Mamífero carnívoro de la familia de los félidos y una de las cinco especies del género Panthera'
    },
    {
      id: '10',
      title: 'Cereza',
      prices: {
        Kg: 10.1,
        Pound: 22.26
      },
      photos: ['10.png', '10.jpeg'],
      description: 'Fruto de varios árboles del género Prunus'
    },
    {
      id: '11',
      title: 'Betta splendens',
      prices: {
        Baby: 20.76,
        'Grown Up': 100.54
      },
      photos: ['11.png', '11.jpeg'],
      description:
        'Comúnmente conocido como betta,  es un pez de agua dulce originario del sudeste asiático'
    },
    {
      id: '12',
      title: 'Tranvia',
      prices: {
        Chico: 50.5,
        Mediano: 101,
        Grande: 151.5
      },
      photos: ['12.png', '12.jpeg'],
      description: 'Sistema de transporte ferroviario'
    },
    {
      id: '13',
      title: 'Dracaena Draco',
      prices: {
        Seed: 150.54,
        Tree: 1474.76
      },
      photos: ['13.png', '13.jpeg'],
      description:
        'Especie de planta perenne de porte arbóreo de la familia Asparagaceae'
    },
    {
      id: '14',
      title: 'Ananas Comosus',
      prices: {
        Kg: 20.5,
        Pound: 45.19
      },
      photos: ['14.png', '.14jpeg'],
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
      photos: ['15.png', '15.jpeg'],
      description: 'Especie de orquídeas de la familia Orchidaceae'
    },
    {
      id: '16',
      title: 'Arbol',
      prices: {
        Seed: 26.87,
        Tree: 562.98
      },
      photos: ['16.png', '16.jpeg'],
      description: 'Producto Aleatorio'
    },
    {
      id: '17',
      title: 'Burro Majorero',
      prices: {
        Baby: 456.86,
        'Grown Up': 6354.72
      },
      photos: ['17.png', '17.jpeg'],
      description:
        'Raza de burro español, propio de la isla canaria de Fuerteventura'
    },
    {
      id: '18',
      title: 'Samoyedo',
      prices: {
        Baby: 265.76,
        'Grown Up': 4527.65
      },
      photos: ['18.png', '18.jpeg'],
      description: 'Raza de perro originaria de Rusia'
    },
    {
      id: '19',
      title: 'Mceta',
      prices: {
        '16lt': 256.76,
        '24lt': 476.25
      },
      photos: ['19.png', '22.jpeg'],
      description: 'Maceta de Ceramica'
    },
    {
      id: '20',
      title: 'Automovil Renovado',
      prices: {
        'Sin Cambios': 128836.76,
        'Pintura Nueva': 153725.98
      },
      photos: ['20.png', '24.jpeg'],
      description: 'Automovil Recien Renovado'
    }
  ];
}
