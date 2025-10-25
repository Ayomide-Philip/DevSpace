import bcrypt from 'bcrypt';
export async function HashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}