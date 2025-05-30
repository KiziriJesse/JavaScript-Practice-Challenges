function capitalizeEachWord(Words) {
   return Words
    .split(' ')
    .map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();}
    )
    .join(' ');
}

 console.log(capitalizeEachWord("i love learning javascript"));
 console.log(capitalizeEachWord("this what very tricky and required alot of research"))
 console.log(capitalizeEachWord("this is question one"))