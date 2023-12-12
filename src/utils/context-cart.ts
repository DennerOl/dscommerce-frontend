import { createContext } from 'react';


// defini o tipo do contexto
export type ContextCartCountType = {
  contextCartCount: number;
  setContextCartCount: (ContextCartCountType: number) => void;
}

// contexto com a função creatContext
export const ContextCartCount = createContext<ContextCartCountType>({
  contextCartCount: 0,
  setContextCartCount: () => { }
})
