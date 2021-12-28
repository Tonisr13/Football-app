import { api } from "./BaseService"

export const getAllAreas = async () => {
    return await api().get('/areas/')
    .then(response => response.data)
}

export const getFromAreas = async (id: number) => {
    return await api().get(`/teams/?areas=${id}`)
    .then(response => response.data)
}

export const getClubProfile = async (id: string) => {
    return await api().get(`/teams/${id}`)
    .then(response => response.data)
}

export const getPlayerDetail = async (id: string) => {
    return await api().get(`/players/${id}`)
    .then(response => response.data)
}
