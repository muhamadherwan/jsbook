const user = {email: 'me@gmail.com'};
// try catch
try {
    // myFunction();
    // null.myFunction();
    if(!user.name){
        throw new SyntaxError('user nas no name');
    }
    
} catch(e) {
    console.log(`user error: ${e.message}`);
    // console.log(`${e.name}: ITS A NULL!`);
    // console.log(e);
    // console.log(e.message);
    // console.log(e.name);
    // console.log(e instanceof TypeError);
} finally {
    console.log('run no matter the function result');
}
console.log("Program continues...");