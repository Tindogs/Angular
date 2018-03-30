/* Interface para recibir las respuestas de la API, 
    que siempre seguirán este patrón inicial        */
export interface ResultApi {
    success: boolean;
    token?: string;
    result: any;
  }