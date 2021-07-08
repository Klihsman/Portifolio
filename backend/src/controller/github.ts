import {Request, Response} from 'express';
import GitHub from '../services/githubService';

interface IBasicInfo {
    name: string,
    avatar_url: string,
    bio: string,
    location: string,
    email: string,
    html_url: string, 
    repos_url: object,
}


export default { 
    async index(req: Request, res: Response){
        const github = new GitHub;
        
        const data:IBasicInfo = await github.getGithub();
        const repositories = await github.getRepositories();

        const user:IBasicInfo = {
            name: data.name,
            avatar_url: data.avatar_url,
            bio: data.bio,
            location: data.location,
            email: data.email,
            html_url: data.html_url, 
            repos_url: repositories,
        }

        res.json(user);
    },
}