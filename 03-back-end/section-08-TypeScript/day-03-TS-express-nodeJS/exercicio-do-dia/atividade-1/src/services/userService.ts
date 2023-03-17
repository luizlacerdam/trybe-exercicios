import * as userModel from '../models/userModel';

export async function getAll() {
    const data = await userModel.getAll();
    return { status: 200, data };
}