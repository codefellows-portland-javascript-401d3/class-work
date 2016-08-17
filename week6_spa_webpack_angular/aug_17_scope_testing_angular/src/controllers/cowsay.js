import animal from 'cowsay-browser';

export default function cowsay( $scope ) {
    animal.list( ( err, types ) => $scope.types = types );
    
    $scope.type = 'default';
    $scope.text = 'hello world';
    $scope.method = 'say';

    $scope.say = function( type, method, text ) {
        return animal[method]({
            text: text || '(I\'m speechless)',
            f: type
        });
    };
}
