exports.handler = async () => {
    console.log('userdata')

    const data = {name: 'Robert', age: '69', job: 'chappie'}

    return {
        status: 200,
        body: JSON.stringify(data)
    }
}