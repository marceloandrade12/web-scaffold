import React from "react";
import { useAuth } from "../../hooks";

export const Dashboard: React.FC = () => {
  const { auth } = useAuth();

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
      <h1>
        Olá, <b style={{ color: "blue" }}>{auth.user}</b>
      </h1>
      <h2>Dados do User</h2>
      <p style={{ wordBreak: "break-all" }}>
        <b>Token:</b> {auth.apiToken}
      </p>
    </div>
  );
};
