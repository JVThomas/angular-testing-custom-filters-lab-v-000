describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

  it('should filter out foods based on Favoritefood', function(){
    var mockedList = [
      {
        name:"Test1",
        favoriteFood: "pizza"
      },
      {
        name: "Test2",
        favoriteFood: "ice cream"
      },
      {
        name:"Test3",
        favoriteFood: "cupcakes"
      }
    ];
    var results = $filter('favoriteFood')(mockedList, "pizza");
    expect(results.length).toEqual(1);
    expect(results[0].name).toEqual("Test1");
  });

	
});
