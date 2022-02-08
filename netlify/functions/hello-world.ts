import { schedule } from '@netlify/functions';



 const handlerFn = async () => {
    return {
        statusCode: 200,
        body: 'howdy',
    }
}



export const handler = schedule('* * * * *', handlerFn);