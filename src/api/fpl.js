const baseUrl = "https://fantasy.premierleague.com/api";
const resourcesUrl = "https://resources.premierleague.com/premierleague";



// General Player Info
export const getBootstrapStatic = async () => {
    const response = await fetch(`${baseUrl}/bootstrap-static/`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin':'*'
        }
      }
    );

    if (response.status === 200) {
        const result = await response.json();

        return {
            status: response.status,
            result
        }
    }

    throw new Error('Network response was not ok');
}

export const getPlayerHeadshot = async ( playerId ) => {
    const response = await fetch(`${resourcesUrl}/photos/players/250x250/${playerId}`);

    if (response.status === 200) {
        const result = await response.json()

        return {
            status: response.status,
            result
        }
    }

    throw new Error('Network response was not ok');
}

export const getFixtures = async () => {
    const response = await fetch(`${baseUrl}/fixtures/`);

    if (response.status === 200) {
        const result = await response.json();

        return {
            status: response.status,
            result
        }
    }

    throw new Error('Network response was not ok');
}

export const getPlayerInfo = async (playerId) => {
    const response = await fetch(`${baseUrl}/element-summary/${playerId}`);

    if (response.status === 200) {
        const result = await response.json();

        return {
            status: response.status,
            result
        }
    }

    throw new Error('Network response was not ok')
}