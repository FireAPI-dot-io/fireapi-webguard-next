# FireAPI WebGuard for Next.js

Protect your Next.js and React applications with **FireAPI WebGuard** — a plug-and-play overlay that locks access when your site is suspended, pending payment, or restricted.

---

## 🚀 Installation

```bash
npm install fireapi-webguard-next
# or
yarn add fireapi-webguard-next
```

---

## 🧩 Usage Example

### Next.js (App Router)

```tsx
"use client"

import { FireGuardOverlay } from "fireapi-webguard-next";

export default function Layout({ children }) {
  return (
    <>
      {/* 
        Place it at the root of your application 
        Replace YOUR_GUARD_KEY with the key from your FireAPI Dashboard
      */}
      <FireGuardOverlay token="YOUR_GUARD_KEY" />
      {children}
    </>
  );
}
```

### React (Vite/CRA)

```tsx
import { FireGuardOverlay } from "fireapi-webguard-next";

function App() {
  return (
    <div className="App">
      <FireGuardOverlay token="YOUR_GUARD_KEY" />
      <h1>My Project</h1>
    </div>
  );
}
```

---

## ⚙️ Props

| Prop                | Type       | Default   | Description                                     |
| ------------------- | ---------- | --------- | ----------------------------------------------- |
| `token`           | `string` | —        | Your FireAPI Guard Identifier (Integration Key) |
| `refreshInterval` | `number` | `30000` | Polling interval in milliseconds (30 seconds)   |

---

## 📦 Features

- ✅ **Real-time Status Polling**: Automatically checks protection status.
- 🔒 **Full-screen Lock**: Prevents site access when status is "Active (Locked)".
- ⚡ **Lightweight**: Zero-config integration with minimal bundle impact.
- 🧠 **Smart Compatibility**: Works with Next.js (App & Pages Router) and React.
- 🎨 **Custom Messaging**: Displays your custom alert message set in the dashboard.

---

## 🛠️ Getting Your Guard Key

1. Log in to your [FireAPI Dashboard](https://fireapi.io/auth "Fire API Dashboard").
2. Go to the **WebGuard** tool.
3. Create a new **Web Guard** for your project.
4. Copy the **Integration Key** and use it as the `token` prop.

---


## 🌍 Links

- 🏠 Homepage: [https://fireapi.io](https://fireapi.io)
- 💾 npm: [https://www.npmjs.com/package/fireapi-webguard-next](https://www.npmjs.com/package/fireapi-webguard-next)
- 🧑‍💻 GitHub: [https://github.com/FireAPI-dot-io/fireapi-webguard-next](https://github.com/FireAPI-dot-io/fireapi-webguard-next)

---

## 🔒 License

MIT © [FireAPI](https://fireapi.io)
