import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser, User } from '../interfaces/user.interface';
import connection from './connection';

export async function getAll(): Promise<User[]> {
    const [users] = await connection.execute('SELECT * FROM Users');
    return users as User[];
}