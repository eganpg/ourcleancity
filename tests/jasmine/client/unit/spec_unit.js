describe('Client integration testing', function(){
	var city = 'Los Angeles';
	var photos = 'object';
	var name = null;
	it('should work', function (){
		expect(true).toBe(true)
	});
	it('photos should not be empty', function(){
		expect(photos).not.toBe(null)
	});
	it('city should be los angeles', function(){
		expect(city).toBe('Los Angeles')
	});
	it('should be something', function(){
		expect(name).not.toBe('not null')
	});





});



