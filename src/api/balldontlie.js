const baseUrl = 'https://www.balldontlie.io/api/v1';

export const getPlayers = async () => {
  const response = await fetch(`${baseUrl}/players`);

  if (response.status === 200) {
    const results = await response.json();
    return results;
  }

  throw new Error("Something went wrong...");
}
