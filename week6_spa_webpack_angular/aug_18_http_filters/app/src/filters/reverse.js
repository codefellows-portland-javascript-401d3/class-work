
export default function() {
    return function( item ) {
        return item.split('').reverse().join('');
    };
}