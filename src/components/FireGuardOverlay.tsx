"use client";
import { useEffect, useState } from "react";
import { checkSiteStatus } from "../utils/apiClient";

interface FireGuardOverlayProps {
  token: string;
  refreshInterval?: number; // ms, default: 30000
}

export function FireGuardOverlay({ token, refreshInterval = 30000 }: FireGuardOverlayProps) {
  const [isDown, setIsDown] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function fetchStatus() {
      try {
        const response = await checkSiteStatus(token);
        console.log("[FireGuard] API response:", response);

        if (response.success && response.data?.status === "down") {
          setIsDown(true);
          setMessage(response.data.message || "Site temporarily unavailable.");
        } else {
          setIsDown(false);
          setMessage("");
        }
      } catch (err) {
        console.error("[FireGuard] Error checking site status:", err);
        setIsDown(false);
      }
    }

    fetchStatus();
    const interval = setInterval(fetchStatus, refreshInterval);
    return () => clearInterval(interval);
  }, [token, refreshInterval]);

  if (!isDown) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.9)",
        color: "white",
        zIndex: 99999,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "2rem"
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>⚠️ Payment Pending</h1>
      <p style={{ maxWidth: "600px", lineHeight: 1.6 }}>{message}</p>
    </div>
  );
}
