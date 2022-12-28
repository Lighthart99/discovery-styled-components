exports.handler = async () => {
    console.log('function ran')

    const data = {name: 'Robert', age: '69', job: 'chappie'}

    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
}
