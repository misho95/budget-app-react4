import create from 'zustand';
import { persist } from 'zustand/middleware';

const Store = (set) => ({
    userDataBase: [],
    addUser: (userDataBase) => set((state) => ({ userDataBase : [...state.userDataBase, userDataBase]})),
    ID: null,
});


const local = persist(Store, { name: 'userDataBase' });

const GlobalStore = create(local);

export default GlobalStore;