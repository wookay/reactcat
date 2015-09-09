"use strict"

import {expect} from 'chai'
import Cat from '../../src/lib/cat.js'

describe("Cat", function() {
  var cat = new Cat()

  it("should yaong", function() {
    expect(cat.yaong).to.equal("yaong")
  })
})
