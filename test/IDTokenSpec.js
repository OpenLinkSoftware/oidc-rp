/**
 * Test dependencies
 */
const chai = require('chai')

/**
 * Assertions
 */
chai.should()
const expect = chai.expect

/**
 * Code under test
 */
const IDToken = require('../src/IDToken')

/**
 * Tests
 */
describe('IDToken', () => {
  describe('constructor', () => {
    it('should exist', () => {
      const token = new IDToken()
      expect(token).to.be.ok
    })
  })
})
