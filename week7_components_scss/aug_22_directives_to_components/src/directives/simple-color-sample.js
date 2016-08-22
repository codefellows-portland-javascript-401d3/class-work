export default function simpleColor() {
    return {
        restrict: 'A',
        scope: false,
        link($scope, element, attr){

            const model = attr.simpleColor;
            
            $scope.$watch(model, color => {
                element.css({ color });
            });
        }
    };
}