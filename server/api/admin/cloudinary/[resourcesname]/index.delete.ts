import {deleteResourceFromCloudinary} from '~/server/utils/cloudinary'



export default defineEventHandler(async (event)  => {
    await requireUserSession(event);

    const session = await getUserSession(event)

    if(session.user && session.user.role === 'ADMIN'){

        const resourcesName = getRouterParam(event, 'resourcesName')

        if(resourcesName){
            await deleteResourceFromCloudinary(resourcesName);
        }

    }
        else{
            throw createError({
                statusCode: 401,
                statusMessage: "Unauthorized. You don't have admin access"
            })
        }
   
})