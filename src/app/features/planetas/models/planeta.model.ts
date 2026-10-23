// Forma de un planeta tal como la devuelve https://dragonball-api.com/api/planets
export interface Planeta {
  id: number;
  name: string;
  isDestroyed: boolean;
  description: string;
  image: string;
}
