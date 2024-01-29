const sleeperAPI = {
  getOwners: async (baseUrl) => {
    const url = baseUrl + "/users";
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);
    return results;
  },
  getRosters: async (baseUrl) => {
    const url = baseUrl + "/rosters";
    const response = await fetch(url);
    const results = await response.json();
    return results;
  },
};

export default sleeperAPI;
