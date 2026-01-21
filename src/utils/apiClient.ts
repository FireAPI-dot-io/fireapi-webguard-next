export async function checkSiteStatus(token: string) {
  // Use the WebGuard Backend API
  const API_URL = (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_WEBGUARD_API_URL) || 'https://webguard-api.fireapi.io';
  const response = await fetch(`${API_URL}/api/tokens/check-status/${token}`)

  if (!response.ok) {
    throw new Error(`Failed to fetch site status: ${response.statusText}`)
  }
  return response.json()
}
