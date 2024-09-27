// auth.d.ts
declare module '#auth-utils' {
  interface User {
    id: string
    email: string
    name: string
    authToken?: string
  }

  interface SecureSessionData {
    authToken: string
  }
}

export {}
