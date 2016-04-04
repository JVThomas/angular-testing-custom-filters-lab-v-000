describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

  it('should remove all vowels in a given string', function(){
    var mockedString = "this is a test";
    var results = $filter('removeAllVowels')(mockedString);
    expect(results).toEqual("ths s  tst");
  });

});
