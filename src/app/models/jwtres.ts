export interface Jwtres {
    datosUsuario: {
      id: number,
      usuario: string,
      clave: string,
      accessToken: string,
      expiresIn: string
    }
  }
  