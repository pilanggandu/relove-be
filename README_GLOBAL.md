# 📱 Mobile Auth & Session App

## 🧰 Tech Stack
- Backend: NestJS + MongoDB
- Frontend: React Native (TypeScript)
- State Management: React Context
- API: Native Fetch

---

# 🚀 Installation Guide

## 📦 1. Clone Repository

```bash
git clone <your-repo-url>
cd <your-project>
```

---

# 🔧 BACKEND SETUP (NestJS)

## 1. Install dependencies

```bash
cd backend
npm install
```

---

## 2. Setup MongoDB

Pastikan MongoDB berjalan di local:

```
mongodb://localhost:27017/nest-auth
```

---

## 3. Run backend

```bash
npm run start:dev
```

Server berjalan di:

```
http://localhost:3000
```

---

# 📱 FRONTEND SETUP (React Native)

## 1. Install dependencies

```bash
cd mobile
npm install
```

---

## 2. Jalankan Android Emulator

Buka Android Studio → Start Emulator

---

## 3. Jalankan app

```bash
npx react-native run-android
```

---

## ⚠️ Important (Android Emulator)

Gunakan base URL berikut di frontend:

```ts
http://10.0.2.2:3000
```

---

# 🧪 TEST FLOW

## 1. Register

```
POST /auth/register
```

```json
{
  "email": "test@gmail.com",
  "password": "123456"
}
```

---

## 2. Login

```
POST /auth/login
```

---

## 3. View Sessions

```
GET /sessions
Authorization: Bearer <token>
```

---

## 4. Logout per device

```
POST /sessions/:id/logout
```

---

# 📝 Notes

- Token disimpan di memory menggunakan Context API
- Tidak menggunakan AsyncStorage untuk menyederhanakan setup
- Menggunakan native fetch (tanpa axios)

---

# ⚠️ Common Issues

## Backend tidak connect ke MongoDB
- Pastikan MongoDB running
- Cek URI di AppModule

---

## Android tidak bisa connect ke backend

Gunakan:

```
http://10.0.2.2:3000
```

bukan:

```
http://localhost:3000
```

---

## Build error React Native

Coba:

```bash
cd android
gradlew clean
cd ..
npx react-native run-android
```

---

# ✅ Summary

Langkah menjalankan project:

1. Jalankan MongoDB
2. Jalankan backend (NestJS)
3. Jalankan React Native app

Semua fitur bisa langsung diuji melalui aplikasi.
