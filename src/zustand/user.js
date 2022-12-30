import create from "zustand";
// use persisit middleware
import { persist } from "zustand/middleware";

const useStore = create(
  persist((set) => ({
    users: [],
    setUsers: (users) => set({ users }),
    addUser: (user) => set((state) => ({ users: [...state.users, user] })),
    removeUser: (id) =>
      set((state) => ({ users: state.users.filter((user) => user.id !== id) })),
    updateUser: (id, email, name, phone, website) =>
      set((state) => ({
        users: state.users.map((user) =>
          user.id === id ? { ...user, email, name, phone, website } : user
        ),
      })),
   
  }))
);

export default useStore;
