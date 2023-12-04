class TeamSource{
    static async listTeam(){
        try{
            const response = await fetch('./data/team-data.json')
            if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              const responseJson = await response.json();
              return responseJson.team;
            } catch (error) {
              console.error('Error while fetching data:', error);
            }
          }
        }
export default TeamSource;