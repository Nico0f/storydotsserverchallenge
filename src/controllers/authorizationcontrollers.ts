import prisma from "../prisma";

export async function checkAdmin(email: string) {
    const user = await prisma.user.findUnique({
        where: {
            email
        }
    })

    if (user.is_admin) {
        return {
            message: 'Success'
        }
    } else {
        return {
            message: 'Not admin'
        }
    }
}