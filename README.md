# Introduction 
# API Test Framework

Framework de automatización para pruebas de APIs usando **Vitest + TypeScript**, con enfoque en:

- Diseño limpio por dominio
- Separación de responsabilidades
- Contract-Based Testing
- Configuración por ambientes (.env)

---

## 📌 Stack

- TypeScript
- Vitest
- Node.js
- Axios
- Dotenv

---

# 📂 Estructura del Proyecto
# API Test Framework

Framework de automatización para pruebas de APIs usando **Vitest + TypeScript**, con enfoque en:

- Diseño limpio por dominio
- Separación de responsabilidades
- Contract-Based Testing
- Configuración por ambientes (.env)

---

## 📌 Stack

- TypeScript
- Vitest
- Node.js
- Axios
- Dotenv

---

# 📂 Estructura del Proyecto
API-TEST-FRAMEWORK
│
├── src
│   ├── core            → Cliente HTTP y configuración base
│   ├── config          → Configuración de clients
│   ├── domains         → Dominios funcionales (users, auth, etc.)
│   └── tests           → Setup global
│
├── reports             → Reportes de ejecución
├── scripts             → Scripts auxiliares
│
├── .env.qa
├── .env.stg
├── .env.fakestore
│
├── vitest.config.ts
├── package.json
└── tsconfig.json


---

# 🧠 Arquitectura

Cada dominio sigue esta estructura:
domains/
 └── users/
     ├── models/        → Tipos request/response
     ├── services/      → Llamadas HTTP
     ├── contracts/     → Validación de contrato
     └── tests/         → Casos de prueba