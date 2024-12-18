import type { LinkItem } from '@contracts/link.types';

/**
 * Elementos de la barra de navegación
 */
export const navItems: LinkItem[] = [
  { text: 'Inicio', label: 'inicio', url: '/' },
  { text: 'Agenda', label: 'agenda', url: '/agenda' },
  { text: 'Charlistas', label: 'charlistas', url: '/charlistas' },
  { text: 'Sponsors', label: 'sponsors', url: '/sponsors' },
  { text: '¿Por qué?', label: 'por qué', url: '/por-que' },
  { text: 'Ubicación', label: 'ubicación', url: '/ubicacion' },
  { text: 'Voluntarios', label: 'voluntarios', url: '/voluntarios', hide: true },
  { text: 'Código de Conducta', label: 'código de conducta', url: '/codigo-de-conducta' },
  { text: 'Preguntas', label: 'preguntas', url: '/faq', hide: true }
];
