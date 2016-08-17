export default function list( $scope ) {
    $scope.books = [
        { title: 'dune', author: 'frank' },
        { title: 'voyager', author: 'diana' }
    ];

    function resetNewBook() {
        $scope.newBook = {
            title: '',
            author: ''
        };
    }

    resetNewBook();

    $scope.addBook = () => {
        $scope.books.push( $scope.newBook );
        resetNewBook();
    };

    $scope.removeBook = book => {
        const index = $scope.books.indexOf( book );
        if ( index > -1 ) $scope.books.splice( index, 1 );
    };
}