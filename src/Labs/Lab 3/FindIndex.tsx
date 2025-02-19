export default function findIndex() {
    let numberArray1 = [1, 2, 4, 5, 6];
    let stringArray1 = ['string1', 'string3'];

    const fourIndex = numberArray1.findIndex(a => a === 4);
    const string3Index = stringArray1.findIndex(a => a === 'string3');

    return (
        <div>
            <h3>Find Index Example</h3>
            <p>Index of 4: {fourIndex}</p>
            <p>Index of 'string3': {string3Index}</p>
        </div>
    );
}



