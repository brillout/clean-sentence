var emojiRegex = require('emoji-regex');
var emojiRegex_text = require('emoji-regex/text');

module.exports = function (sentence, options) {
    if( !options ) {
        options = {};
    }

    if( options.remove_emojis ) {
        sentence = remove_emojis(sentence);
    }
    if( options.remove_urls ) {
        sentence = remove_urls(sentence);
    }
    if( ! options.do_not_remove_unexpected_leading_chars ) {
        sentence = remove_unexpected_leading_chars(sentence);
    }
    if( ! options.do_not_remove_trailing_spaces ) {
        sentence = remove_trailing_spaces(sentence);
    }
    if( ! options.do_not_add_trailing_dot ) {
        sentence = add_trailing_dot(sentence);
    }
    if( ! options.do_not_uppercase_first_letter ) {
        sentence = uppercase_first_letter(sentence);
    }
    if( ! options.do_not_remove_space_duplicates ) {
        sentence = remove_space_duplicates(sentence);
    }

    return sentence;
};


function remove_urls(str) {
    str = str.replace(/https?:\/\/[^\s]+/g,'');
    return str;
}

function uppercase_first_letter(str) {
    str = str.slice(0,1).toUpperCase() + str.slice(1);
    return str;
}

function remove_emojis(str) {
    str = str.replace(/\:[a-zA-Z0-9\-_]+\:/g,'');
    str = str.replace(emojiRegex(), '');
    str = str.replace(emojiRegex_text(), '');
    return str;
}

function remove_unexpected_leading_chars(str) {
    str = str.replace(/^[^a-zA-Z\<]+/,'');
    return str;
}

function remove_trailing_spaces(str) {
    str = str.replace(/^[\s]+/,'');
    return str;
}

function remove_space_duplicates(str) {
    str = str.replace(/[\s]+/g,' ');
    return str;
}

function add_trailing_dot(str) {
    var str_ = str.replace(/\s+$/,'');
    if( str_.length === 0) {
        return str;
    }
 // str_ = str_.replace(/[^a-z0-9\)\+\-]+$/i, '');
    str_ = str_.replace(/[\!\:\,\;\(]+$/i, '');
    if( str_.slice(-1) !== '.' ) {
        str_ = str_+'.';
    }
    return str_;
}
