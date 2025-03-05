hljs.registerLanguage('lox', (hljs) => {
    const KEYWORDS = {
        keyword: 'class fun var for if else print return while super this or and',
        literal: 'true false nil',
        operator: 'and or',
        built_in: 'print clock',
    };

    const VARIABLE = {
        scope: 'variable',
        match: /\b(?!(?:class|fun|var|for|if|else|print|return|while|super|this|or|and|true|false|nil|clock)\b)[a-zA-Z_]\w*\b/
    };

    const OPERATORS = {
        scope: 'operator',
        match: /[=+\-*/!&|<>^%~?,.:]|==|!=|<=|>=|\|\||&&/
    };

    const FUNCTION_DECLARATION = {
        beginKeywords: 'fun',
        end: /[{;]/,
        excludeEnd: true,
        contains: [
            hljs.inherit(hljs.UNDERSCORE_TITLE_MODE, {
                scope: 'title.function'
            }),
            {
                begin: /\(/,
                end: /\)/,
                contains: [VARIABLE]
            }
        ]
    };

    const INHERITANCE = {
        begin: /</,
        end: /[{;]/,
        excludeEnd: true,
        contains: [hljs.UNDERSCORE_TITLE_MODE]
    };

    const CLASS_DECLARATION = {
        beginKeywords: 'class',
        end: /[{;]/,
        excludeEnd: true,
        contains: [
            hljs.UNDERSCORE_TITLE_MODE,
            INHERITANCE
        ]
    };

    const PROPERTY_ACCESS = {
        begin: /\./,
        scope: 'operator',
        starts: {
            scope: 'property',
            match: hljs.UNDERSCORE_IDENT_RE
        }
    };

    return {
        name: 'lox',
        case_insensitive: false,
        keywords: KEYWORDS,
        contains: [
            hljs.QUOTE_STRING_MODE,
            hljs.NUMBER_MODE,
            hljs.C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE,
            FUNCTION_DECLARATION,
            CLASS_DECLARATION,
            PROPERTY_ACCESS,
            OPERATORS,
            VARIABLE,
        ]
    };
});
