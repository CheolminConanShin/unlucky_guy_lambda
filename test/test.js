import should from 'should'
import test from './mocks/testLambda'

import lambdaFunction from '../functions/index'

describe('Sample lambda handler', () => {
    it('should exist', () => {
        should.exist(lambdaFunction.handler)
    })
})