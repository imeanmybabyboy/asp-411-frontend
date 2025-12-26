export default interface IUser {
    id: string,
    name: string,
    email: string,
    phone?: string,
    birthdate: Date,
    login: string,
    registerAt: Date,
    role: Role
}

interface Role {
    description: string,
    canCreate: number,
    canRead: number,
    canUpdate: number,
    canDelete: number,
}