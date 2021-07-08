import axios from 'axios';


class GithubService{
    async getGithub(){
        try {
            const response = await axios.get('https://api.github.com/users/klihsman');
            return response.data;
          } catch (error) {
            console.error(error);
        }
    }
    async getRepositories(){
        try {
            const response = await axios.get('https://api.github.com/users/Klihsman/repos');
            return response.data;
          } catch (error) {
            console.error(error);
        }
    }
} 

export default GithubService;