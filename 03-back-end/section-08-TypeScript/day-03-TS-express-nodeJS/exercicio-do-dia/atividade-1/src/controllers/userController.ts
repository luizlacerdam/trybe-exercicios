import { Request, Response } from 'express';

import * as userService from '../services/userService';

export async function getAll(req: Request, res: Response) {
    const { status, data } = await userService.getAll();
    res.status(status).json(data);
}