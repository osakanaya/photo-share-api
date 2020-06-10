const { GraphQLScalarType } = require('graphql')

module.exports = {
    Photo: {
        id: parent => parent.id || parent._id,
        url: parent => `/img/photos/${parent._id}.jpg`
    },
    
    DateTime: new GraphQLScalarType({
        name: `DateTime`,
        scription: `A valid date time value`,
        parseValue: value => new Date(value),
        serialize: value => new Date(value).toISOString(),
        parseLiteral: ast => ast.value
    })    
}
