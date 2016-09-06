
describe('My Todo App', function() {

    it('should have a title', function() {
        browser.get('/' );
        expect(browser.getTitle()).toEqual( 'My Todos' );
    });
    
    describe('navigation', function() {

        beforeEach(function() {
            browser.get('/' );
        });

        it('default to /home', function() {
            
            expect( browser.getLocationAbsUrl() ).toMatch( '/' );
            
            // const nav = element.all(by.tagName('a'));
            // const a1 = nav.get(0);
            // const a2 = nav.get(1);
            
            // expect( element.all( by.css('[ng-view] p' ) ).first().getText() )
            //     .toMatch(/hello from view 1/);
            
            // expect( element( by.binding('animalTypes') ).getText() )
            //     .toMatch('["cats","dogs","birds"]')
            
            // a2.click();
            // expect( browser.getLocationAbsUrl() ).toMatch("/view2");
            
            // expect( element( by.binding('place') ).getText() )
            //     .toMatch( /hello world/ );
            
            // a1.click();
            // expect( browser.getLocationAbsUrl() ).toMatch("/view1");
        });
    });
});