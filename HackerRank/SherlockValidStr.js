function isValid(s) {
    let sFeq = getFeq(s);
    let adjusted = false;
    let keys = Object.values(sFeq);
    let target = null;
    if (keys.length > 2) {
        if (Math.abs(keys[0] - keys[1]) > 1 || Math.abs(keys[1] - keys[2]) > 1 || Math.abs(keys[0] - keys[2]) > 1) {
            return 'NO'
        } else {
            target = keys[0] === keys[1] ? keys[0] : keys[2]
            console.log('target',target)
            if (!(keys[0] === keys[1] && keys[2] === keys[1])) {
                adjusted = true;
            }
        }
    }
    console.log('adjusted',adjusted)
    for (let i = 3; i < keys.length; i++) {
        if (Math.abs(keys[i] - target) > 1) {
            if (keys[i] === 1 && adjusted === false) {
                adjusted = true;
            } else {
                return 'NO'
            }
        } else if (Math.abs(keys[i] - target) === 1) {
            if (adjusted === true) {
                return 'NO'
            } else {
                adjusted = true;
            }
        }
    }

    return 'YES';
}

function getFeq(a) {
    let obj = {};
    for (let i = 0; i < a.length; i++){
        obj.hasOwnProperty(a[i]) ? obj[a[i]]++ : obj[a[i]] = 1;
    }
    return obj;
}

let a="ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd"

console.log(isValid(a));