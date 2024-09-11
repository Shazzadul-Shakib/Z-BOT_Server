import bcrypt from "bcrypt";

const saltRounds=6;

export const hashPassword=async(plainPassword:string):Promise<String>=>{
    const hashedPassword= await bcrypt.hash(plainPassword,saltRounds);
    return hashedPassword;
}