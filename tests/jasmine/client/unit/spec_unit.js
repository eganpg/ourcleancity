describe('Client integration testing', function(){
	var city = 'Los Angeles';
	var photos = 'object';
	it('should work', function (){
		expect(true).toBe(true)
	});
	it('photos should not be empty', function(){
		expect(photos).not.toBe(null)
	});
	it('city should be los angeles', function(){
		expect(city).toBe('Los Angeles')
	});





});