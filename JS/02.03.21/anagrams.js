var words = [ "вертикаль", "кильватер", "апельсин", "спаниель",
"австралопитек", "ватерполистка", "кластер", "сталкер", "стрелка"];

//1 Написать функции проверки анаграм

function sortStrChars(str) {
    if (!str) {
        return;
    }
    str = str.split('').sort().join('');
    return str;
}


function getGroupedAnagrams(words){
    const anagrams = {};
    words.forEach((word)=>{
        const sortedWord = sortStrChars(word);
        if (anagrams[sortedWord]) {
            return anagrams[sortedWord].push(word);
        }
        anagrams[sortedWord] = [word];
    });
    return anagrams;
}

const groupedAnagrams = getGroupedAnagrams(words);
for(const sortedWord in groupedAnagrams){
    console.log(groupedAnagrams[sortedWord].toString());
}