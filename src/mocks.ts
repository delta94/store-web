/* eslint-disable max-len */
import { Game } from 'store-library/src/types';

export const game: Game = {
  id: '1234',
  description: `<p>После <b>Великой катастрофы</b> люди ушли жить в бункеры под землю,
      а на поверхности остались только горы мусора, сухие деревья и кусты. 
      На земле не осталось ничего живого! 
      Сразу после катастрофы люди попытались восстановить экосистему при помощи роботов, 
      но по непонятным причинам операция провалилась, роботы вышли из строя.</p>
      <p>Игра "Проект «Восстановление»" предлагает вам сыграть за робота Спота,
      который очнулся после продолжительного сна и с помощью своих друзей Тимми и Флая 
      пытается разгадать загадку упадка человеческой цивилизации, чтобы возродить ее снова.</p>`,
  requirements: [
    {
      platform: 'windows',
      minimal: {
        cpu: 'Intel / AMD 2x at 2.8 ГГц',
        diskSpace: '15360 ',
        gpu: 'nVidia GeForce 8600/9600GT, ATI/AMD Radeon HD2600/3600',
        os: 'Windows 8',
        ram: '4096 ',
      },
      recommended: {
        cpu: 'Intel Dual Core 2.26 GHz / AMD Athlon',
        diskSpace: '15360 ',
        gpu: 'Nvidia GTX 660, AMD Radeon HD 7870 equivalent DX11 GPU',
        os: 'Windows 10',
        ram: '4096 ',
      },
    },
    {
      platform: 'macos',
      minimal: {
        cpu: 'Intel / AMD 2x at 2.8 ГГц',
        diskSpace: '102400 ',
        gpu: 'Intel / AMD 2x at 2.8 ГГц',
        os: 'MacOS 10.14',
        ram: '4096 ',
      },
      recommended: {
        cpu: 'Intel / AMD 2x at 2.8 ГГц',
        diskSpace: '102400 ',
        gpu: 'Intel / AMD 2x at 2.8 ГГц',
        os: 'MacOS 10.14',
        ram: '16384 ',
      },
    },
  ],
  media: {
    screenshots: [
      {
        url:
          'https://store.rambler.ru/rgames/images/76ca7522bac1656d89fa58a7da22d5dd.jpeg?img-1-resize=width%3A615%2Cheight%3A350&img-2-filter=sharpen',
      },
      {
        url:
          'https://store.rambler.ru/rgames/images/0ee2a46d6b4474abaab745d1d6ec8060.jpeg?img-1-resize=width%3A615%2Cheight%3A350&img-2-filter=sharpen',
      },
      {
        url:
          'https://store.rambler.ru/rgames/images/705c00fb88e5d8d73c3a5ac7e7956165.jpeg?img-1-resize=width%3A615%2Cheight%3A350&img-2-filter=sharpen',
      },
      {
        url:
          'https://store.rambler.ru/rgames/images/7a6922ea6688ca7a63c421a7f16f5af1.jpeg?img-1-resize=width%3A615%2Cheight%3A350&img-2-filter=sharpen',
      },
      {
        url:
          'https://store.rambler.ru/rgames/images/ea446bf6aec7f2f0713d88308ac5ba97.jpeg?img-1-resize=width%3A615%2Cheight%3A350&img-2-filter=sharpen',
      },
      {
        url:
          'https://store.rambler.ru/rgames/images/c33f8de3e21b981114b60e93f2c5d420.jpeg?img-1-resize=width%3A615%2Cheight%3A350&img-2-filter=sharpen',
      },
    ],
    trailers: [
      { url: 'https://www.youtube.com/embed/iNzk6M0Zf8A' },
    ],
  },
  genres: [{ name: 'Action' }, { name: 'Platformer' }, { name: 'Single player' }],
  ranking: '17+',
  tags: [{ name: 'RPG' }, { name: 'Shooter' }],
  title: 'Проект восстановление',
  pricing: {
    price: 99.99,
    currency: 'USD',
    discount: 10,
  },
  slug: 'project-vosstanovlenie',
  platforms: ['MacOS', 'Windows'],
  publishers: [
    { name: 'Developer digital' },
  ],
  developers: [
    { name: 'Reikon games' },
  ],
  languages: [
    {
      language: 'English',
      interface: true,
      audio: true,
      subtitles: false,
    },
    {
      language: 'French',
      interface: true,
      audio: false,
      subtitles: false,
    },
    {
      language: 'German',
      interface: true,
      audio: false,
      subtitles: false,
    },
    {
      language: 'Spanish',
      interface: true,
      audio: false,
      subtitles: false,
    },
    {
      language: 'Japanese',
      interface: true,
      audio: false,
      subtitles: false,
    },
    {
      language: 'Olbanish',
      interface: true,
      audio: false,
      subtitles: false,
    },
    {
      language: 'Russian',
      interface: true,
      audio: false,
      subtitles: false,
    },
    {
      language: 'Klingon',
      interface: true,
      audio: false,
      subtitles: false,
    },
  ],
  reviews: {
    score: 84,
    review: [
      {
        url: 'google.com',
        score: 84,
        quote: '“Ruiner’s world of pure and absolute murder is one teeming with interesting concepts and its stellar combat it a journey well worth taking.”',
        pressName: 'Game informer1',
        author: 'Javy Gwaltney',
      },
      {
        url: 'google.com',
        score: 84,
        quote: '“Ruiner’s world of pure and absolute murder is one teeming with interesting concepts and its stellar combat it a journey well worth taking.”',
        pressName: 'Game informer2',
        author: 'Javy Gwaltney',
      },
      {
        url: 'google.com',
        score: 84,
        quote: '“Ruiner’s world of pure and absolute murder is one teeming with interesting concepts and its stellar combat it a journey well worth taking.”',
        pressName: 'Game informer3',
        author: 'Javy Gwaltney',
      },
    ],
  },
  ratings: [
    {
      agency: 'PEGI', 
      imageUrl: 'https://pegi.info/sites/default/files/styles/medium/public/2017-03/pegi18.png?itok=2iF_eHO6',
    },
  ],
  license: '© 2012-2019 Sony Interactive Entertainment LLC. Journey is a trademark of Sony Interactive Entertainment LLC. Developed by thatgamecompany',
  features: [
    { name: 'Full contoller support', iconId: 'fullContollerSupport' },
    { name: 'Cloud saving', iconId: 'cloudSaving' },
    { name: 'Multiplayer', iconId: 'multiplayer' },
  ],
  releaseDate: '2020-05-26T18:29:37.000Z',
};
