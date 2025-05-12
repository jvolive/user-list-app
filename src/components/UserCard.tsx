"use client";

import { useState } from "react";
import { User } from "@/lib/types";
import { fetchUserById } from "@/api/api";

type Props = {
  user: User;
};

export function UserCard({ user }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [details, setDetails] = useState<User | null>(null);

  const toggleExpand = async () => {
    if (!expanded && !details) {
      try {
        const data = await fetchUserById(String(user.id));
        setDetails(data);
      } catch (err) {
        console.error("Erro ao buscar detalhes:", err);
      }
    }

    setExpanded(!expanded);
  };

  return (
    <div
      className="border border-slate-300 rounded-lg shadow-sm p-4 cursor-pointer transition-all duration-200 hover:bg-slate-100"
      onClick={toggleExpand}
    >
      <p className="text-lg font-semibold text-slate-800">{user.name}</p>

      <p className="text-sm text-slate-500">{user.email}</p>
      <p className="text-sm text-slate-600">{user.phone}</p>
      {!expanded && (
        <p className="text-sm text-slate-800 underline mt-1">
          Mostrar mais informações
        </p>
      )}

      {expanded && details && (
        <div className="mt-4 text-sm space-y-1 border-t pt-2 text-slate-900">
          <p>
            <span className="font-medium">Usuário:</span> {details.username}
          </p>
          <p>
            <span className="font-medium">Website:</span> {details.website}
          </p>
          <p>
            <span className="font-medium">Empresa:</span> {details.company.name}
          </p>
          <p>
            <span className="font-medium">Endereço:</span>{" "}
            {details.address.street}, {details.address.city}
          </p>
        </div>
      )}
    </div>
  );
}
