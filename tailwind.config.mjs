// tailwind.config.mjs
import daisyui from 'daisyui';
import aspectRatio from '@tailwindcss/aspect-ratio';

export default {
    // Configuración de Astro / Tailwind
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
    ],

    // Eliminamos 'darkMode: class' o lo dejamos en 'media' (por defecto) si está presente

    plugins: [daisyui, aspectRatio],

    daisyui: {
        // Solo definimos el tema claro
        themes: [
            {
                mytheme: {
                    "primary": "#007BFF",      // Azul: Primario (Tecnológico)
                    "secondary": "#38A169",    // Verde: Secundario (Natural)
                    "accent": "#FFC107",       // Amarillo: Acento (Energía)
                    "base-100": "#F8F9FA",     // Gris Claro: Fondo Base
                    "neutral": "#212529",      // Negro Oscuro: Texto Principal
                    "info": "#3abff8",
                    "success": "#36d399",
                    "warning": "#fbbd23",
                    "error": "#f87272",
                },
            },
            // Eliminamos el tema 'darktheme'
        ],
        // Esto asegura que 'mytheme' sea el tema principal
        darkTheme: "mytheme",
    },
};