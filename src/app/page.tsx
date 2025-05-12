"use client";

import { useEffect, useState } from "react";
import { fetchUsers } from "@/api/api";
import { User } from "@/lib/types";
import { UserCard } from "@/components/UserCard";
import SearchInput from "@/components/SearchInput";

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchUsers().then(setUsers).catch(console.error);
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Usuários</h1>

      <SearchInput value={search} onChange={setSearch} />

      <p className="mb-6 text-sm text-gray-600">
        Exibindo {filteredUsers.length} de {users.length} usuários
      </p>

      <div className="space-y-4">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
