import { create } from 'zustand';

export interface InitialMenuState {
   isOpen: boolean,
}
export interface InitialMenuAction {
   showMenu(): void,
   hideMenu(): void,
   toggleMenu(): void
}

export const useMenu = create<InitialMenuState & InitialMenuAction>()(set => ({
   isOpen: false,
   showMenu: () => set({ isOpen: true }),
   hideMenu: () => set({ isOpen: false }),
   toggleMenu: () => set(prev => ({ isOpen: !prev.isOpen }))
}))
