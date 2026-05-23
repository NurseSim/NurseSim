/**
 * Shared API base URL and fetch helper for backend (web/backend Flask app).
 * Use credentials: "include" so session cookie is sent.
 */
const API_URL = import.meta.env.VITE_API_URL;

type ApiOptions = Omit<RequestInit, "body"> & {
  body?: unknown;
};

export async function apiFetch<T>(
  path: string,
  options: ApiOptions = {}
): Promise<{ data: T; ok: boolean; status: number }> {
  const res = await fetch(`${API_URL}${path}`, {
    method: options.method || "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    body: options.body !== undefined ? JSON.stringify(options.body) : undefined,
  });
  const data = (await res.json().catch(() => ({}))) as T;
  return { data, ok: res.ok, status: res.status };
}

export type MeUser = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  teacher: boolean;
};

export type MeResponse = { ok: boolean; user: MeUser | null };

export async function getMe(): Promise<MeResponse> {
  const { data } = await apiFetch<MeResponse>("/api/me");
  return data;
}
