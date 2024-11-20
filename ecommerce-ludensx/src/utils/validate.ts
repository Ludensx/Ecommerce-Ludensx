export function validateUser(user: any): boolean {
    const validUser = user.email !== undefined && user.name !== undefined && user.password !== undefined && user.address !== undefined && user.phone !== undefined;
    return validUser;
}
export function validateProduct(user: any): boolean {
    const validProduct = user.id !== undefined && user.name !== undefined && user.description !== undefined && user.price !== undefined && user.stock !== undefined && user.imgURL !== undefined;
    return validProduct;
}