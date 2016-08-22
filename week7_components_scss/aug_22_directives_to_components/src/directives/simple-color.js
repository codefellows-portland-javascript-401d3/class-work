export default function simpleColor() {
    return {
        restrict: 'A',
        scope: false,
        link($scope, element, attr){
            // What was the model name that
            // was put into our attribute:
            const modelName = attr.simpleColor;

            // $scope.watch takes a string the refers to
            // the scope property to "watch". The first
            // parameter of the function is the value of the 
            // thing being watched
            $scope.$watch( modelName, colorValue => {
                // equivelent to style="color: colorValue;":
                element.css({ 'color': colorValue });
            });
        }
    };
}