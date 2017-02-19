var cleanSentence = require('./');

console.log(
    cleanSentence(
        '*(#*@$33(   clean this sentence by triming white spaces, capitalize first letter, adding a trailing dot, removing white space doublets, removing URLs https://example.org and removing smileys :smile: ',
        {
            do_not_add_trailing_dot: false,
            do_not_uppercase_first_letter: false,
            do_not_remove_unexpected_leading_chars: false,
            do_not_remove_trailing_spaces: false,
            do_not_remove_space_duplicates: false,
            remove_emojis: true,
            remove_urls: true
        }
    )
);
