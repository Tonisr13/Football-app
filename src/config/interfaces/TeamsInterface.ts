export interface ITeams {
    address: string;
    area?: ITeamsArea;
    clubColors: string;
    crestUrl?: string;
    email?: string;
    founded: number;
    id: number;
    lastUpdated: string;
    name: string;
    phone?: string;
    shortName: string;
    tla: string;
    venue: string;
    website?: string;
}

export interface ITeamsArea {
    id: number;
    name: string;
}