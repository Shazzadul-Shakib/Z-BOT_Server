import bcrypt from "bcrypt";

const saltRounds=6;

export const hashPassword=async(plainPassword:string):Promise<String>=>{
    const hashedPassword= await bcrypt.hash(plainPassword,saltRounds);
    return hashedPassword;
}

export const comparePassword=async(plainPassword:string,hashedPassword:string): Promise<boolean>=>{
    const isMatch=await bcrypt.compare(plainPassword,hashedPassword);
    return isMatch;
}