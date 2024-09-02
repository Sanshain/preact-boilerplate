/**
 * Transforms the input into a className.
 * The multiplication constant 101 is selected to be a prime,
 * as is the initial value of 11.
 * The intermediate and final results are truncated into 32-bit
 * unsigned integers.
 * @param {String} str
 * @returns {String}
 */
let toHash = (str) => {
    let i = 0,
        out = 11;
    while (i < str.length) out = (101 * out + str.charCodeAt(i++)) >>> 0;
    return 'go' + out;
};

let GOOBER_ID = '_goober';
let ssr = {
    data: ''
};

/**
 * Returns the _commit_ target
 * @param {Object} [target]
 * @returns {HTMLStyleElement|{data: ''}}
 */
let getSheet = (target) => {
    if (typeof window === 'object') {
        // Querying the existing target for a previously defined <style> tag
        // We're doing a querySelector because the <head> element doesn't implemented the getElementById api
        return (
            (target ? target.querySelector('#' + GOOBER_ID) : window[GOOBER_ID]) ||
            Object.assign((target || document.head).appendChild(document.createElement('style')), {
                innerHTML: ' ',
                id: GOOBER_ID
            })
        ).firstChild;
    }

    return target || ssr;
};

/**
 * Extracts and wipes the cache
 * @returns {String}
 */
let extractCss = (target) => {
    let sheet = getSheet(target);
    let out = sheet.data;
    sheet.data = '';
    return out;
};

/**
 * Updates the target and keeps a local cache
 * @param {String} css
 * @param {Object} sheet
 * @param {Boolean} append
 * @param {?String} cssToReplace
 */
let update = (css, sheet, append, cssToReplace) => {
    cssToReplace
        ? (sheet.data = sheet.data.replace(cssToReplace, css))
        : sheet.data.indexOf(css) === -1 &&
          (sheet.data = append ? css + sheet.data : sheet.data + css);
};

let newRule = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g;
let ruleClean = /\/\*[^]*?\*\/|  +/g;
let ruleNewline = /\n+/g;
let empty = ' ';

/**
 * Convert a css style string into a object
 * @param {String} val
 * @returns {Object}
 */
let astish = (val) => {
    let tree = [{}];
    let block, left;

    while ((block = newRule.exec(val.replace(ruleClean, '')))) {
        // Remove the current entry
        if (block[4]) {
            tree.shift();
        } else if (block[3]) {
            left = block[3].replace(ruleNewline, empty).trim();
            tree.unshift((tree[0][left] = tree[0][left] || {}));
        } else {
            tree[0][block[1]] = block[2].replace(ruleNewline, empty).trim();
        }
    }

    return tree[0];
};

/**
 * Parses the object into css, scoped, blocks
 * @param {Object} obj
 * @param {String} selector
 * @param {String} wrapper
 */
let parse = (obj, selector) => {
    let outer = '';
    let blocks = '';
    let current = '';

    for (let key in obj) {
        let val = obj[key];

        if (key[0] == '@') {
            // If these are the `@` rule
            if (key[1] == 'i') {
                // Handling the `@import`
                outer = key + ' ' + val + ';';
            } else if (key[1] == 'f') {
                // Handling the `@font-face` where the
                // block doesn't need the brackets wrapped
                blocks += parse(val, key);
            } else {
                // Regular at rule block
                blocks += key + '{' + parse(val, key[1] == 'k' ? '' : selector) + '}';
            }
        } else if (typeof val == 'object') {
            // Call the parse for this block
            blocks += parse(
                val,
                selector
                    ? // Go over the selector and replace the matching multiple selectors if any
                      selector.replace(/([^,])+/g, (sel) => {
                          // Return the current selector with the key matching multiple selectors if any
                          return key.replace(/(^:.*)|([^,])+/g, (k) => {
                              // If the current `k`(key) has a nested selector replace it
                              if (/&/.test(k)) return k.replace(/&/g, sel);

                              // If there's a current selector concat it
                              return sel ? sel + ' ' + k : k;
                          });
                      })
                    : key
            );
        } else if (val != undefined) {
            // Convert all but CSS variables
            key = /^--/.test(key) ? key : key.replace(/[A-Z]/g, '-$&').toLowerCase();
            // Push the line for this property
            current += parse.p
                ? // We have a prefixer and we need to run this through that
                  parse.p(key, val)
                : // Nope no prefixer just append it
                  key + ':' + val + ';';
        }
    }

    // If we have properties apply standard rule composition
    return outer + (selector && current ? selector + '{' + current + '}' : current) + blocks;
};

/**
 * In-memory cache.
 */
let cache = {};

/**
 * Stringifies a object structure
 * @param {Object} data
 * @returns {String}
 */
let stringify = (data) => {
    if (typeof data == 'object') {
        let out = '';
        for (let p in data) out += p + stringify(data[p]);
        return out;
    } else {
        return data;
    }
};

/**
 * Generates the needed className
 * @param {String|Object} compiled
 * @param {Object} sheet StyleSheet target
 * @param {Object} global Global flag
 * @param {Boolean} append Append or not
 * @param {Boolean} keyframes Keyframes mode. The input is the keyframes body that needs to be wrapped.
 * @returns {String}
 */
let hash = (compiled, sheet, global, append, keyframes) => {
    // Get a string representation of the object or the value that is called 'compiled'
    let stringifiedCompiled = stringify(compiled);

    // Retrieve the className from cache or hash it in place
    let className =
        cache[stringifiedCompiled] || (cache[stringifiedCompiled] = toHash(stringifiedCompiled));

    // If there's no entry for the current className
    if (!cache[className]) {
        // Build the _ast_-ish structure if needed
        let ast = stringifiedCompiled !== compiled ? compiled : astish(compiled);

        // Parse it
        cache[className] = parse(
            // For keyframes
            keyframes ? { ['@keyframes ' + className]: ast } : ast,
            global ? '' : '.' + className
        );
    }

    // If the global flag is set, save the current stringified and compiled CSS to `cache.g`
    // to allow replacing styles in <style /> instead of appending them.
    // This is required for using `createGlobalStyles` with themes
    let cssToReplace = global && cache.g ? cache.g : null;
    if (global) cache.g = cache[className];

    // add or update
    update(cache[className], sheet, append, cssToReplace);

    // return hash
    return className;
};

/**
 * Can parse a compiled string, from a tagged template
 * @param {String} value
 * @param {Object} [props]
 */
let compile = (str, defs, data) => {
    return str.reduce((out, next, i) => {
        let tail = defs[i];

        // If this is a function we need to:
        if (tail && tail.call) {
            // 1. Call it with `data`
            let res = tail(data);

            // 2. Grab the className
            let className = res && res.props && res.props.className;

            // 3. If there's none, see if this is basically a
            // previously styled className by checking the prefix
            let end = className || (/^go/.test(res) && res);

            if (end) {
                // If the `end` is defined means it's a className
                tail = '.' + end;
            } else if (res && typeof res == 'object') {
                // If `res` it's an object, we're either dealing with a vnode
                // or an object returned from a function interpolation
                tail = res.props ? '' : parse(res, '');
            } else {
                // Regular value returned. Can be falsy as well.
                // Here we check if this is strictly a boolean with false value
                // define it as `''` to be picked up as empty, otherwise use
                // res value
                tail = res === false ? '' : res;
            }
        }
        return out + next + (tail == null ? '' : tail);
    }, '');
};

/**
 * css entry
 * @param {String|Object|Function} val
 */
function css(val) {
    let ctx = this || {};
    let _val = val.call ? val(ctx.p) : val;

    return hash(
        _val.unshift
            ? _val.raw
                ? // Tagged templates
                  compile(_val, [].slice.call(arguments, 1), ctx.p)
                : // Regular arrays
                  _val.reduce((o, i) => Object.assign(o, i && i.call ? i(ctx.p) : i), {})
            : _val,
        getSheet(ctx.target),
        ctx.g,
        ctx.o,
        ctx.k
    );
}

/**
 * CSS Global function to declare global styles
 * @type {Function}
 */
let glob = css.bind({ g: 1 });

/**
 * `keyframes` function for defining animations
 * @type {Function}
 */
let keyframes = css.bind({ k: 1 });

let h, useTheme, fwdProp;
function setup(pragma, prefix, theme, forwardProps) {
    // This one needs to stay in here, so we won't have cyclic dependencies
    parse.p = prefix;

    // These are scope to this context
    h = pragma;
    useTheme = theme;
    fwdProp = forwardProps;
}

/**
 * styled function
 * @param {string} tag
 * @param {function} forwardRef
 */
function styled(tag, forwardRef) {
    let _ctx = this || {};

    return function wrapper() {
        let _args = arguments;

        function Styled(props, ref) {
            // Grab a shallow copy of the props
            let _props = Object.assign({}, props);

            // Keep a local reference to the previous className
            let _previousClassName = _props.className || Styled.className;

            // _ctx.p: is the props sent to the context
            _ctx.p = Object.assign({ theme: useTheme && useTheme() }, _props);

            // Set a flag if the current components had a previous className
            // similar to goober. This is the append/prepend flag
            // The _empty_ space compresses better than `\s`
            _ctx.o = / *go\d+/.test(_previousClassName);

            _props.className =
                // Define the new className
                css.apply(_ctx, _args) + (_previousClassName ? ' ' + _previousClassName : '');

            // If the forwardRef fun is defined we have the ref
            if (forwardRef) {
                _props.ref = ref;
            }

            // Assign the _as with the provided `tag` value
            let _as = tag;

            // If this is a string -- checking that is has a first valid char
            if (tag[0]) {
                // Try to assign the _as with the given _as value if any
                _as = _props.as || tag;
                // And remove it
                delete _props.as;
            }

            // Handle the forward props filter if defined and _as is a string
            if (fwdProp && _as[0]) {
                fwdProp(_props);
            }

            return h(_as, _props);
        }

        return forwardRef ? forwardRef(Styled) : Styled;
    };
}

export { css, extractCss, glob, keyframes, setup, styled };
