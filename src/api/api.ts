import { User } from "../lib/types";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function fetchUsers(): Promise<User[]> {
  const res = await fetch(`${BASE_URL}/users`);
  if (!res.ok) throw new Error("Erro ao buscar usuários");
  return res.json();
}

export async function fetchUserById(id: string): Promise<User> {
  const res = await fetch(`${BASE_URL}/users/${id}`);
  if (!res.ok) throw new Error("Erro ao buscar usuário");
  return res.json();
}
