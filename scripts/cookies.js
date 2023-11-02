function createCookie() {
    let timeNow = new Date();

    timeNow.setTime(timeNow.getTime() + 5 * 24 * 60 * 60 * 1000)

    let atTime = timeNow.toUTCString();

    let value = generateString(36);
    
    document.cookie = `sessionToken=${value};expires=${atTime};path=/`

    let cookie = document.cookie;

    let splitedCookie = cookie.split('; ');
    
    let desiredCookie = splitedCookie.filter(cookie => cookie.includes("sessionToken"));

    desiredCookie = desiredCookie[0];

    desiredCookie = desiredCookie.slice(desiredCookie.indexOf("=")+1);

    console.log(desiredCookie)
}