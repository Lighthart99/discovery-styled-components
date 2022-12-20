// exports.handler = async () => {
//     console.log('userdata')

//     const data = {name: 'Robert', age: '69', job: 'chappie'}

//     return {
//         status: 200,
//         body: JSON.stringify(data)
//     }
// }

import { Handler } from '@netlify/functions'

export const handler: Handler = async (event, context) => {
  const { name = 'stranger' } = event.queryStringParameters

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, ${name}!`,
    }),
  }
}
