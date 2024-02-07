const sportsDataAPI = {
  getTeamRosterWithImages: async (baseUrl) => {
    const url = baseUrl;
    const response = await fetch(url);
    const results = await response.json();
    return results;
  },
};

export default sportsDataAPI;
