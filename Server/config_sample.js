module.exports = {
    database: '<database>',
    port: 3030,
    secret: '<database_secret>',
    s3: {
        accessKeyId: '<awsAccessKeyID>', 
        secretAccessKey: '<awsSecretAccessKey>' 
    },
    bucket: '<s3BucketName>',
    algolia: {
        appId: '<algolia_appId>',
        apiKey: '<algolia_apiKey>',
        indexName: '<indexName>'
    },
    stripe: '<stripe_apiKey>'
};