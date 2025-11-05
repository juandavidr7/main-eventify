# Sistema de Gestión de Eventos Universitarios

Plataforma web para la gestión y visualización de eventos universitarios, construida con React, TypeScript, Vite y TailwindCSS.

## 🚀 Características

- ✅ Gestión completa de eventos universitarios
- 📅 Calendario interactivo de eventos
- 🔍 Búsqueda y filtrado avanzado
- 📊 Dashboard con reportes y estadísticas
- 🎨 Interfaz moderna y responsive con Shadcn UI
- ⚡ Optimizado para producción con lazy loading y code splitting
- 🔐 Sistema de autenticación de usuarios

## 📋 Requisitos Previos

- Node.js 18+ 
- npm o yarn

## 🛠️ Instalación Local

```bash
# Clonar el repositorio
git clone <tu-repositorio>

# Navegar a la carpeta del frontend
cd frontend

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El proyecto estará disponible en `http://localhost:8080`

## 🌐 Despliegue en Vercel (Producción)

### Opción 1: Deploy desde Git (Recomendado)

1. **Conecta tu repositorio a Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Haz clic en "New Project"
   - Importa tu repositorio de GitHub/GitLab/Bitbucket

2. **Configuración del proyecto:**
   - Framework Preset: `Vite`
   - Root Directory: `./` (o deja en blanco)
   - Build Command: `cd frontend && npm run build`
   - Output Directory: `frontend/dist`
   - Install Command: `cd frontend && npm install`

3. **Variables de entorno:**
   Agrega las siguientes variables en Vercel Dashboard → Settings → Environment Variables:
   ```
   VITE_API_URL=https://tu-backend-api.com/api
   VITE_API_TIMEOUT=10000
   VITE_ENV=production
   ```

4. **Deploy:**
   - Haz clic en "Deploy"
   - ¡Listo! Tu aplicación estará en producción en minutos

### Opción 2: Deploy desde CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Navegar al directorio raíz del proyecto
cd main-repository

# Deploy
vercel

# Para producción
vercel --prod
```

### Configuración Automática

El proyecto incluye un archivo `vercel.json` con configuración optimizada:
- ✅ Rewrites para SPA (Single Page Application)
- ✅ Headers de seguridad (X-Frame-Options, CSP, etc.)
- ✅ Cache optimizado para assets estáticos
- ✅ Compresión automática

## 🎯 Optimizaciones de Producción Implementadas

### 1. **Code Splitting Inteligente**
- Separación de vendors (React, UI, Forms, Query)
- Lazy loading de rutas
- Chunks optimizados por funcionalidad

### 2. **Minificación y Compresión**
- Terser para minificar JavaScript
- Eliminación automática de console.logs
- CSS code splitting

### 3. **Cache Strategy**
- Assets con cache inmutable (1 año)
- HTML sin cache para actualizaciones inmediatas
- Hashing de archivos para cache busting

### 4. **Bundle Optimization**
- Assets < 4KB inline automático
- Sourcemaps solo en desarrollo
- Tree shaking automático

### 5. **Performance**
- React.lazy() para carga diferida de rutas
- Suspense con fallback optimizado
- Prefetching de rutas críticas

## 📦 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Build de desarrollo (con sourcemaps)
npm run build:dev

# Preview del build
npm run preview

# Linting
npm run lint
```

## 🔧 Tecnologías Utilizadas

- **Frontend Framework:** React 18.3
- **Build Tool:** Vite 7.1
- **Language:** TypeScript 5.8
- **Styling:** TailwindCSS 3.4
- **UI Components:** Shadcn UI + Radix UI
- **Routing:** React Router 6
- **State Management:** React Query (TanStack Query)
- **Forms:** React Hook Form + Zod
- **Animations:** Anime.js
- **HTTP Client:** Axios

## 📊 Estructura del Proyecto

```
frontend/
├── public/              # Assets estáticos
├── src/
│   ├── api/            # Servicios y llamadas a API
│   ├── assets/         # Imágenes y recursos
│   ├── components/     # Componentes reutilizables
│   │   ├── animations/ # Componentes animados
│   │   ├── events/     # Componentes de eventos
│   │   ├── layout/     # Layout components
│   │   └── ui/         # UI components (Shadcn)
│   ├── constants/      # Constantes y configuraciones
│   ├── data/           # Datos mock
│   ├── hooks/          # Custom hooks
│   ├── lib/            # Utilidades
│   ├── pages/          # Páginas de la aplicación
│   ├── styles/         # Estilos globales
│   └── types/          # Tipos TypeScript
├── vercel.json         # Configuración de Vercel
├── vite.config.ts      # Configuración de Vite
└── package.json        # Dependencias
```

## 🔐 Variables de Entorno

Crea un archivo `.env.local` en la carpeta `frontend/` para desarrollo local:

```env
VITE_API_URL=http://localhost:3000/api
VITE_API_TIMEOUT=10000
VITE_ENV=development
```

**Nota:** Las variables de entorno en Vite deben comenzar con `VITE_` para ser expuestas al cliente.

## 🚨 Seguridad en Producción

El proyecto implementa las siguientes medidas de seguridad:

- ✅ Headers de seguridad (X-Frame-Options, X-Content-Type-Options)
- ✅ CSP (Content Security Policy)
- ✅ XSS Protection
- ✅ Referrer Policy
- ✅ HTTPS forzado en Vercel
- ✅ Variables de entorno seguras

## 📈 Monitoreo y Analytics

Para agregar analytics en producción:

1. **Google Analytics:**
   ```env
   VITE_GA_ID=G-XXXXXXXXXX
   ```

2. **Sentry (monitoreo de errores):**
   ```env
   VITE_SENTRY_DSN=tu-sentry-dsn
   ```

## 🐛 Troubleshooting

### Build falla en Vercel

1. Verifica que las rutas en `vercel.json` sean correctas
2. Asegúrate de que todas las dependencias estén en `package.json`
3. Revisa los logs de build en Vercel Dashboard

### Rutas no funcionan después del deploy

- Verifica que el archivo `vercel.json` tenga la configuración de rewrites
- Las SPAs necesitan redirigir todas las rutas a `index.html`

### Variables de entorno no se aplican

- Asegúrate de que comiencen con `VITE_`
- Reconstruye el proyecto después de agregar variables
- En Vercel, verifica que estén en Settings → Environment Variables

## 📄 Licencia

Este proyecto es privado y confidencial.

## 👥 Contribución

Para contribuir al proyecto:

1. Crea un branch desde `main`
2. Realiza tus cambios
3. Haz commit con mensajes descriptivos
4. Crea un Pull Request

## 📞 Soporte

Para soporte técnico, contacta al equipo de desarrollo.

---

**Nota:** Este README asume que tienes configurado tu backend API. Asegúrate de actualizar la variable `VITE_API_URL` con la URL correcta de tu API en producción.
