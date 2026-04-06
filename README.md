# 🔐 Desafío Técnico — Login & Seguridad

Proyecto desarrollado como parte del módulo **Full Stack II** del **ISPC (Instituto Superior Politécnico Córdoba)**, correspondiente a la Tecnicatura Superior en Desarrollo de Software.

---

## 📌 Descripción

Implementación de un sistema de autenticación completo con frontend en **Angular** y backend en **Django REST Framework**. El proyecto cubre flujos de seguridad reales: login con JWT, recuperación de cuenta mediante OTP y validaciones en tiempo real.

---

## ✅ Funcionalidades implementadas

- Login con usuario y contraseña
- Autenticación con tokens **JWT**
- Opción **"Recordarme"** (localStorage vs sessionStorage)
- Validaciones en tiempo real (campos requeridos, mínimo 8 caracteres)
- Mensajes de error con feedback visual
- Recuperación de contraseña mediante **OTP** (impreso en consola del servidor)
- Logout con eliminación del token
- Diseño profesional con efecto **glassmorphism**

---

## 🛠️ Tecnologías utilizadas

| Capa | Tecnología |
|---|---|
| Frontend | Angular 21 |
| Backend | Django 6 + Django REST Framework |
| Autenticación | JWT (SimpleJWT) |
| Base de datos | SQLite |
| Estilos | CSS puro (Glassmorphism) |

---

## ⚙️ Requisitos previos

| Herramienta | Versión mínima | Verificar con |
|---|---|---|
| Python | 3.10+ | `python --version` |
| Node.js | 18+ | `node --version` |
| npm | 10+ | `npm --version` |

---

## 🚀 Instalación y puesta en marcha

### Backend (Django)

```bash
# 1. Entrar a la carpeta del backend
cd ISPC-ProgIII

# 2. Crear el entorno virtual
python -m venv .venv

# 3. Activar el entorno virtual
# Windows:
.\.venv\Scripts\Activate.ps1
# Linux/Mac:
source .venv/bin/activate

# 4. Instalar dependencias
pip install -r requirements.txt

# 5. Aplicar migraciones
python manage.py makemigrations
python manage.py migrate

# 6. Crear usuario de prueba
python manage.py createsuperuser

# 7. Iniciar el servidor
python manage.py runserver
```

El backend quedará disponible en `http://localhost:8000`

---

### Frontend (Angular)

```bash
# 1. Entrar a la carpeta del frontend
cd ISPC-ProgIII-Front/login-frontend

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor
npm start
```

El frontend quedará disponible en `http://localhost:4200`

> ⚠️ Ambos servidores deben estar corriendo al mismo tiempo.

---

## 📡 Endpoints de la API

| Método | Endpoint | Descripción |
|---|---|---|
| POST | `/api/login/` | Autenticación con usuario y contraseña |
| POST | `/api/register/` | Registro de nuevo usuario |
| POST | `/api/request-otp/` | Solicitar código OTP para recuperar contraseña |
| POST | `/api/verify-otp/` | Verificar OTP y cambiar contraseña |

---

## 🔄 Flujo de recuperación de contraseña

```
1. El usuario hace click en "¿Olvidaste tu contraseña?"
2. Ingresa su username
3. El backend genera un código OTP de 6 dígitos → se imprime en la consola del servidor
4. El usuario ingresa el código OTP y su nueva contraseña
5. Si el código es correcto → la contraseña se actualiza
6. El sistema redirige al login automáticamente
```

---

## 📁 Estructura del proyecto

```
Desafío-Técnico/
├── ISPC-ProgIII/              # Backend Django
│   ├── accounts/              # App de autenticación
│   │   ├── views.py           # Lógica de los endpoints
│   │   ├── urls.py            # Rutas de la API
│   │   └── serializers.py     # Serialización de datos
│   └── backend/
│       └── settings.py        # Configuración del proyecto
│
└── ISPC-ProgIII-Front/        # Frontend Angular
    └── login-frontend/
        └── src/app/
            ├── login/         # Componente de login
            ├── home/          # Componente de bienvenida
            └── forgot-password/ # Componente de recuperación
```

---

## 👤 Autor

**Eric Heredia**
ISPC — Tecnicatura Superior en Desarrollo de Software
Full Stack II — TSDS - 2026