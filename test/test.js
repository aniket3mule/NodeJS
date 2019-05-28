const { describe, it } = require('mocha')
var expect  = require('chai').assert
var leapYear = require('../FunctionalPrograms/utility').leapYear
var harmonicFuc = require('../FunctionalPrograms/utility').harmonicFuc
var replaceString = require('../FunctionalPrograms/utility').replaceString


/**
 * @param {function()}
 */
describe('Testing for Javascipt function', () => {

    it('Leap year testing', done => {
        var year = 1600
        var a = year.toString()
        
                expect.equal(leapYear(a), 'year is leap year')
                done();
            });

            it('Harmonic Series testing', done => {
                var year = 10
                var a = year.toString()
                
                        expect.equal(harmonicFuc(a), "Series successfully")
                        done();
                    });

                    it('Replace String', done => {
                        var Name = "Aniket"

                                expect.equal(replaceString(Name), "name changes Successfully")
                                done();
                            });

                            it('Replace String', done => {
                                var Name = "Aniket"
        
                                        expect.equal(replaceString(Name), "name changes Successfully")
                                        done();
                                    });
        
    });