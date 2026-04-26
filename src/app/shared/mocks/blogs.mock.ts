import { Blog } from '../models/blog/blog.entity';
import { BlogTags } from '../models/blog/tags.entity';

const TAGS_LIBRARY = {
  diseño: { id: 'tag1', name: 'Diseño', color: '#FFFFFF', bgColor: '#178C94' },
  iluminación: { id: 'tag2', name: 'Iluminación', color: '#FFFFFF', bgColor: '#FF6B35' },
  ahorro: { id: 'tag3', name: 'Ahorro Energético', color: '#FFFFFF', bgColor: '#4CAF50' },
  inteligente: { id: 'tag4', name: 'Inteligente', color: '#FFFFFF', bgColor: '#9C27B0' },
  minimalista: { id: 'tag5', name: 'Minimalista', color: '#FFFFFF', bgColor: '#607D8B' },
  tendencias: { id: 'tag6', name: 'Tendencias', color: '#FFFFFF', bgColor: '#FF9800' },
  led: { id: 'tag7', name: 'LED', color: '#FFFFFF', bgColor: '#00BCD4' },
  hogar: { id: 'tag8', name: 'Hogar', color: '#FFFFFF', bgColor: '#E91E63' },
  oficina: { id: 'tag9', name: 'Oficina', color: '#FFFFFF', bgColor: '#2196F3' },
};

export const MOCK_BLOGS: Blog[] = [
  {
    id: '1',
    title: 'Cómo elegir la iluminación perfecta para tu hogar',
    introduction: 'Descubre los secretos para seleccionar las luminarias ideales según el estilo y funcionalidad de cada espacio.',
    createdAt: new Date('2025-01-19'),
    updatedAt: new Date('2025-01-19'),
    images: [
      {
        id: 'img1',
        blogId: '1',
        link: 'https://res.cloudinary.com/dmhadvchw/image/upload/v1775273492/Artboard_1.jpg_wccoph.jpg',
        position: 0
      }
    ],
    blogContent: [],
    BlogView: [],
    tags: [
      {
        blogId: '1',
        tagId: 'tag1',
        tag: TAGS_LIBRARY.diseño
      },
      {
        blogId: '1',
        tagId: 'tag8',
        tag: TAGS_LIBRARY.hogar
      }
    ]
  },
  {
    id: '2',
    title: 'Tendencias en diseño de lámparas 2025',
    introduction: 'Explorar las últimas tendencias en diseño de iluminación que están revolucionando el mercado de luminarias.',
    createdAt: new Date('2025-01-18'),
    updatedAt: new Date('2025-01-18'),
    images: [
      {
        id: 'img2',
        blogId: '2',
        link: 'https://res.cloudinary.com/dmhadvchw/image/upload/v1775273493/Artboard_2.jpg_wt6ieb.jpg',
        position: 0
      }
    ],
    blogContent: [],
    BlogView: [],
    tags: [
      {
        blogId: '2',
        tagId: 'tag6',
        tag: TAGS_LIBRARY.tendencias
      },
      {
        blogId: '2',
        tagId: 'tag1',
        tag: TAGS_LIBRARY.diseño
      }
    ]
  },
  {
    id: '3',
    title: 'Ahorro energético con LED: Guía completa',
    introduction: 'Aprende cómo las lámparas LED pueden reducir tu consumo de energía hasta un 80% sin perder calidad de luz.',
    createdAt: new Date('2025-01-17'),
    updatedAt: new Date('2025-01-17'),
    images: [
      {
        id: 'img3',
        blogId: '3',
        link: 'https://res.cloudinary.com/dmhadvchw/image/upload/v1775273493/Artboard_3.jpg_tmeilp.jpg',
        position: 0
      }
    ],
    blogContent: [],
    BlogView: [],
    tags: [
      {
        blogId: '3',
        tagId: 'tag7',
        tag: TAGS_LIBRARY.led
      },
      {
        blogId: '3',
        tagId: 'tag3',
        tag: TAGS_LIBRARY.ahorro
      }
    ]
  },
  {
    id: '4',
    title: 'Iluminación inteligente para tu espacio de trabajo',
    introduction: 'Crea el ambiente perfecto en tu oficina con sistemas de iluminación inteligente que mejoran la productividad.',
    createdAt: new Date('2025-01-16'),
    updatedAt: new Date('2025-01-16'),
    images: [
      {
        id: 'img4',
        blogId: '4',
        link: 'https://res.cloudinary.com/dmhadvchw/image/upload/v1775273492/Artboard_1.jpg_wccoph.jpg',
        position: 0
      }
    ],
    blogContent: [],
    BlogView: [],
    tags: [
      {
        blogId: '4',
        tagId: 'tag4',
        tag: TAGS_LIBRARY.inteligente
      },
      {
        blogId: '4',
        tagId: 'tag9',
        tag: TAGS_LIBRARY.oficina
      }
    ]
  },
  {
    id: '5',
    title: 'Luminarias de diseño: Conviertiendo espacios en arte',
    introduction: 'Descubre cómo nuestras luminarias de diseño único transforman cualquier ambiente en una obra de arte.',
    createdAt: new Date('2025-01-15'),
    updatedAt: new Date('2025-01-15'),
    images: [
      {
        id: 'img5',
        blogId: '5',
        link: 'https://res.cloudinary.com/dmhadvchw/image/upload/v1775273493/Artboard_2.jpg_wt6ieb.jpg',
        position: 0
      }
    ],
    blogContent: [],
    BlogView: [],
    tags: [
      {
        blogId: '5',
        tagId: 'tag1',
        tag: TAGS_LIBRARY.diseño
      },
      {
        blogId: '5',
        tagId: 'tag2',
        tag: TAGS_LIBRARY.iluminación
      }
    ]
  },
  {
    id: '6',
    title: 'Combinaciones de colores de luz para cada ambiente',
    introduction: 'Entiende cómo los diferentes tonos de luz afectan el estado de ánimo y la percepción de tus espacios.',
    createdAt: new Date('2025-01-14'),
    updatedAt: new Date('2025-01-14'),
    images: [
      {
        id: 'img6',
        blogId: '6',
        link: 'https://res.cloudinary.com/dmhadvchw/image/upload/v1775273493/Artboard_3.jpg_tmeilp.jpg',
        position: 0
      }
    ],
    blogContent: [],
    BlogView: [],
    tags: [
      {
        blogId: '6',
        tagId: 'tag2',
        tag: TAGS_LIBRARY.iluminación
      },
      {
        blogId: '6',
        tagId: 'tag1',
        tag: TAGS_LIBRARY.diseño
      }
    ]
  },
  {
    id: '7',
    title: 'Mantenimiento y durabilidad de luminarias premium',
    introduction: 'Consejos prácticos para mantener tus luminarias en perfecto estado durante años.',
    createdAt: new Date('2025-01-13'),
    updatedAt: new Date('2025-01-13'),
    images: [
      {
        id: 'img7',
        blogId: '7',
        link: 'https://res.cloudinary.com/dmhadvchw/image/upload/v1775273492/Artboard_1.jpg_wccoph.jpg',
        position: 0
      }
    ],
    blogContent: [],
    BlogView: [],
    tags: [
      {
        blogId: '7',
        tagId: 'tag1',
        tag: TAGS_LIBRARY.diseño
      }
    ]
  },
  {
    id: '8',
    title: 'Iluminación minimalista: Menos es más',
    introduction: 'Explora cómo el minimalismo en iluminación crea espacios limpios, modernos y funcionales.',
    createdAt: new Date('2025-01-12'),
    updatedAt: new Date('2025-01-12'),
    images: [
      {
        id: 'img8',
        blogId: '8',
        link: 'https://res.cloudinary.com/dmhadvchw/image/upload/v1775273493/Artboard_2.jpg_wt6ieb.jpg',
        position: 0
      }
    ],
    blogContent: [],
    BlogView: [],
    tags: [
      {
        blogId: '8',
        tagId: 'tag5',
        tag: TAGS_LIBRARY.minimalista
      },
      {
        blogId: '8',
        tagId: 'tag1',
        tag: TAGS_LIBRARY.diseño
      }
    ]
  },
  {
    id: '9',
    title: 'Iluminación para espacios pequeños: Maximiza tu ambiente',
    introduction: 'Trucos y consejos para hacer que espacios pequeños se vean más grandes y luminosos con la iluminación correcta.',
    createdAt: new Date('2025-01-11'),
    updatedAt: new Date('2025-01-11'),
    images: [
      {
        id: 'img9',
        blogId: '9',
        link: 'https://res.cloudinary.com/dmhadvchw/image/upload/v1775273493/Artboard_3.jpg_tmeilp.jpg',
        position: 0
      }
    ],
    blogContent: [],
    BlogView: [],
    tags: [
      {
        blogId: '9',
        tagId: 'tag2',
        tag: TAGS_LIBRARY.iluminación
      },
      {
        blogId: '9',
        tagId: 'tag8',
        tag: TAGS_LIBRARY.hogar
      }
    ]
  }
];
