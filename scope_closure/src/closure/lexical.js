const buildCount = (i) =>{
    let count = i;
    const displayCount = () =>{
        console.log(count++);
    };
    return displayCount;
};

const myCount = buildCount(5);
myCount();
myCount();
myCount();

const myOtherCount = buildCount(10);
myOtherCount();
myOtherCount();