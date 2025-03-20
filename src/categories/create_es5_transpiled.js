'use strict';

function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
var async = require('async');
var _ = require('lodash');
var db = require('../database');
var plugins = require('../plugins');
var privileges = require('../privileges');
var utils = require('../utils');
var slugify = require('../slugify');
var cache = require('../cache');
module.exports = function (Categories) {
  Categories.create = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
      var parentCid, _yield$Promise$all, _yield$Promise$all2, cid, firstChild, slug, smallestOrder, order, colours, category, defaultPrivileges, modPrivileges, guestPrivileges, result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            parentCid = data.parentCid ? data.parentCid : 0;
            _context.next = 3;
            return Promise.all([db.incrObjectField('global', 'nextCid'), db.getSortedSetRangeWithScores("cid:".concat(parentCid, ":children"), 0, 0)]);
          case 3:
            _yield$Promise$all = _context.sent;
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
            cid = _yield$Promise$all2[0];
            firstChild = _yield$Promise$all2[1];
            data.name = String(data.name || "Category ".concat(cid));
            slug = "".concat(cid, "/").concat(slugify(data.name));
            smallestOrder = firstChild.length ? firstChild[0].score - 1 : 1;
            order = data.order || smallestOrder; // If no order provided, place it at the top
            colours = Categories.assignColours();
            category = {
              cid: cid,
              name: data.name,
              description: data.description ? data.description : '',
              descriptionParsed: data.descriptionParsed ? data.descriptionParsed : '',
              icon: data.icon ? data.icon : '',
              bgColor: data.bgColor || colours[0],
              color: data.color || colours[1],
              slug: slug,
              parentCid: parentCid,
              topic_count: 0,
              post_count: 0,
              disabled: data.disabled ? 1 : 0,
              order: order,
              link: data.link || '',
              numRecentReplies: 1,
              "class": data["class"] ? data["class"] : 'col-md-3 col-6',
              imageClass: 'cover',
              isSection: 0,
              subCategoriesPerPage: 10
            };
            if (data.backgroundImage) {
              category.backgroundImage = data.backgroundImage;
            }
            defaultPrivileges = ['groups:find', 'groups:read', 'groups:topics:read', 'groups:topics:create', 'groups:topics:reply', 'groups:topics:tag', 'groups:posts:edit', 'groups:posts:history', 'groups:posts:delete', 'groups:posts:upvote', 'groups:posts:downvote', 'groups:topics:delete'];
            modPrivileges = defaultPrivileges.concat(['groups:topics:schedule', 'groups:posts:view_deleted', 'groups:purge']);
            guestPrivileges = ['groups:find', 'groups:read', 'groups:topics:read'];
            _context.next = 19;
            return plugins.hooks.fire('filter:category.create', {
              category: category,
              data: data,
              defaultPrivileges: defaultPrivileges,
              modPrivileges: modPrivileges,
              guestPrivileges: guestPrivileges
            });
          case 19:
            result = _context.sent;
            category = result.category;
            _context.next = 23;
            return db.setObject("category:".concat(category.cid), category);
          case 23:
            if (category.descriptionParsed) {
              _context.next = 26;
              break;
            }
            _context.next = 26;
            return Categories.parseDescription(category.cid, category.description);
          case 26:
            _context.next = 28;
            return db.sortedSetAddBulk([['categories:cid', category.order, category.cid], ["cid:".concat(parentCid, ":children"), category.order, category.cid], ['categories:name', 0, "".concat(data.name.slice(0, 200).toLowerCase(), ":").concat(category.cid)]]);
          case 28:
            _context.next = 30;
            return privileges.categories.give(result.defaultPrivileges, category.cid, 'registered-users');
          case 30:
            _context.next = 32;
            return privileges.categories.give(result.modPrivileges, category.cid, ['administrators', 'Global Moderators']);
          case 32:
            _context.next = 34;
            return privileges.categories.give(result.guestPrivileges, category.cid, ['guests', 'spiders']);
          case 34:
            cache.del('categories:cid');
            _context.next = 37;
            return clearParentCategoryCache(parentCid);
          case 37:
            if (!(data.cloneFromCid && parseInt(data.cloneFromCid, 10))) {
              _context.next = 41;
              break;
            }
            _context.next = 40;
            return Categories.copySettingsFrom(data.cloneFromCid, category.cid, !data.parentCid);
          case 40:
            category = _context.sent;
          case 41:
            if (!data.cloneChildren) {
              _context.next = 44;
              break;
            }
            _context.next = 44;
            return duplicateCategoriesChildren(category.cid, data.cloneFromCid, data.uid);
          case 44:
            plugins.hooks.fire('action:category.create', {
              category: category
            });
            return _context.abrupt("return", category);
          case 46:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
  function clearParentCategoryCache(_x2) {
    return _clearParentCategoryCache.apply(this, arguments);
  }
  function _clearParentCategoryCache() {
    _clearParentCategoryCache = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(parentCid) {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if (!(parseInt(parentCid, 10) >= 0)) {
              _context4.next = 9;
              break;
            }
            cache.del(["cid:".concat(parentCid, ":children"), "cid:".concat(parentCid, ":children:all")]);
            if (!(parseInt(parentCid, 10) === 0)) {
              _context4.next = 4;
              break;
            }
            return _context4.abrupt("return");
          case 4:
            _context4.next = 6;
            return Categories.getCategoryField(parentCid, 'parentCid');
          case 6:
            parentCid = _context4.sent;
            _context4.next = 0;
            break;
          case 9:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return _clearParentCategoryCache.apply(this, arguments);
  }
  function duplicateCategoriesChildren(_x3, _x4, _x5) {
    return _duplicateCategoriesChildren.apply(this, arguments);
  }
  function _duplicateCategoriesChildren() {
    _duplicateCategoriesChildren = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(parentCid, cid, uid) {
      var children;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return Categories.getChildren([cid], uid);
          case 2:
            children = _context5.sent;
            if (children.length) {
              _context5.next = 5;
              break;
            }
            return _context5.abrupt("return");
          case 5:
            children = children[0];
            children.forEach(function (child) {
              child.parentCid = parentCid;
              child.cloneFromCid = child.cid;
              child.cloneChildren = true;
              child.name = utils.decodeHTMLEntities(child.name);
              child.description = utils.decodeHTMLEntities(child.description);
              child.uid = uid;
            });
            _context5.next = 9;
            return async.each(children, Categories.create);
          case 9:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return _duplicateCategoriesChildren.apply(this, arguments);
  }
  Categories.assignColours = function () {
    var backgrounds = ['#AB4642', '#DC9656', '#F7CA88', '#A1B56C', '#86C1B9', '#7CAFC2', '#BA8BAF', '#A16946'];
    var text = ['#ffffff', '#ffffff', '#333333', '#ffffff', '#333333', '#ffffff', '#ffffff', '#ffffff'];
    var index = Math.floor(Math.random() * backgrounds.length);
    return [backgrounds[index], text[index]];
  };
  Categories.copySettingsFrom = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(fromCid, toCid, copyParent) {
      var _yield$Promise$all3, _yield$Promise$all4, source, destination, oldParent, newParent;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Promise.all([db.getObject("category:".concat(fromCid)), db.getObject("category:".concat(toCid))]);
          case 2:
            _yield$Promise$all3 = _context2.sent;
            _yield$Promise$all4 = _slicedToArray(_yield$Promise$all3, 2);
            source = _yield$Promise$all4[0];
            destination = _yield$Promise$all4[1];
            if (source) {
              _context2.next = 8;
              break;
            }
            throw new Error('[[error:invalid-cid]]');
          case 8:
            oldParent = parseInt(destination.parentCid, 10) || 0;
            newParent = parseInt(source.parentCid, 10) || 0;
            if (!(copyParent && newParent !== parseInt(toCid, 10))) {
              _context2.next = 16;
              break;
            }
            _context2.next = 13;
            return db.sortedSetRemove("cid:".concat(oldParent, ":children"), toCid);
          case 13:
            _context2.next = 15;
            return db.sortedSetAdd("cid:".concat(newParent, ":children"), source.order, toCid);
          case 15:
            cache.del(["cid:".concat(oldParent, ":children"), "cid:".concat(oldParent, ":children:all"), "cid:".concat(newParent, ":children"), "cid:".concat(newParent, ":children:all")]);
          case 16:
            destination.description = source.description;
            destination.descriptionParsed = source.descriptionParsed;
            destination.icon = source.icon;
            destination.bgColor = source.bgColor;
            destination.color = source.color;
            destination.link = source.link;
            destination.numRecentReplies = source.numRecentReplies;
            destination["class"] = source["class"];
            destination.image = source.image;
            destination.imageClass = source.imageClass;
            destination.minTags = source.minTags;
            destination.maxTags = source.maxTags;
            if (copyParent) {
              destination.parentCid = source.parentCid || 0;
            }
            _context2.next = 31;
            return plugins.hooks.fire('filter:categories.copySettingsFrom', {
              source: source,
              destination: destination,
              copyParent: copyParent
            });
          case 31:
            _context2.next = 33;
            return db.setObject("category:".concat(toCid), destination);
          case 33:
            _context2.next = 35;
            return copyTagWhitelist(fromCid, toCid);
          case 35:
            _context2.next = 37;
            return Categories.copyPrivilegesFrom(fromCid, toCid);
          case 37:
            return _context2.abrupt("return", destination);
          case 38:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function (_x6, _x7, _x8) {
      return _ref2.apply(this, arguments);
    };
  }();
  function copyTagWhitelist(_x9, _x10) {
    return _copyTagWhitelist.apply(this, arguments);
  }
  function _copyTagWhitelist() {
    _copyTagWhitelist = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(fromCid, toCid) {
      var data;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return db.getSortedSetRangeWithScores("cid:".concat(fromCid, ":tag:whitelist"), 0, -1);
          case 2:
            data = _context6.sent;
            _context6.next = 5;
            return db["delete"]("cid:".concat(toCid, ":tag:whitelist"));
          case 5:
            _context6.next = 7;
            return db.sortedSetAdd("cid:".concat(toCid, ":tag:whitelist"), data.map(function (item) {
              return item.score;
            }), data.map(function (item) {
              return item.value;
            }));
          case 7:
            cache.del("cid:".concat(toCid, ":tag:whitelist"));
          case 8:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }));
    return _copyTagWhitelist.apply(this, arguments);
  }
  Categories.copyPrivilegesFrom = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(fromCid, toCid, group, filter) {
      var privsToCopy, data;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            group = group || '';
            privsToCopy = privileges.categories.getPrivilegesByFilter(filter);
            if (group) {
              privsToCopy = privsToCopy.map(function (priv) {
                return "groups:".concat(priv);
              });
            } else {
              privsToCopy = privsToCopy.concat(privsToCopy.map(function (priv) {
                return "groups:".concat(priv);
              }));
            }
            _context3.next = 5;
            return plugins.hooks.fire('filter:categories.copyPrivilegesFrom', {
              privileges: privsToCopy,
              fromCid: fromCid,
              toCid: toCid,
              group: group
            });
          case 5:
            data = _context3.sent;
            if (!group) {
              _context3.next = 11;
              break;
            }
            _context3.next = 9;
            return copyPrivilegesByGroup(data.privileges, data.fromCid, data.toCid, group);
          case 9:
            _context3.next = 13;
            break;
          case 11:
            _context3.next = 13;
            return copyPrivileges(data.privileges, data.fromCid, data.toCid);
          case 13:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function (_x11, _x12, _x13, _x14) {
      return _ref3.apply(this, arguments);
    };
  }();
  function copyPrivileges(_x15, _x16, _x17) {
    return _copyPrivileges.apply(this, arguments);
  }
  function _copyPrivileges() {
    _copyPrivileges = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(privileges, fromCid, toCid) {
      var toGroups, fromGroups, currentMembers, copyGroups;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            toGroups = privileges.map(function (privilege) {
              return "group:cid:".concat(toCid, ":privileges:").concat(privilege, ":members");
            });
            fromGroups = privileges.map(function (privilege) {
              return "group:cid:".concat(fromCid, ":privileges:").concat(privilege, ":members");
            });
            _context8.next = 4;
            return db.getSortedSetsMembers(toGroups.concat(fromGroups));
          case 4:
            currentMembers = _context8.sent;
            copyGroups = _.uniq(_.flatten(currentMembers));
            _context8.next = 8;
            return async.each(copyGroups, /*#__PURE__*/function () {
              var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(group) {
                return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                  while (1) switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return copyPrivilegesByGroup(privileges, fromCid, toCid, group);
                    case 2:
                    case "end":
                      return _context7.stop();
                  }
                }, _callee7);
              }));
              return function (_x22) {
                return _ref4.apply(this, arguments);
              };
            }());
          case 8:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }));
    return _copyPrivileges.apply(this, arguments);
  }
  function copyPrivilegesByGroup(_x18, _x19, _x20, _x21) {
    return _copyPrivilegesByGroup.apply(this, arguments);
  }
  function _copyPrivilegesByGroup() {
    _copyPrivilegesByGroup = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(privilegeList, fromCid, toCid, group) {
      var fromGroups, toGroups, _yield$Promise$all5, _yield$Promise$all6, fromChecks, toChecks, givePrivs, rescindPrivs;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            fromGroups = privilegeList.map(function (privilege) {
              return "group:cid:".concat(fromCid, ":privileges:").concat(privilege, ":members");
            });
            toGroups = privilegeList.map(function (privilege) {
              return "group:cid:".concat(toCid, ":privileges:").concat(privilege, ":members");
            });
            _context9.next = 4;
            return Promise.all([db.isMemberOfSortedSets(fromGroups, group), db.isMemberOfSortedSets(toGroups, group)]);
          case 4:
            _yield$Promise$all5 = _context9.sent;
            _yield$Promise$all6 = _slicedToArray(_yield$Promise$all5, 2);
            fromChecks = _yield$Promise$all6[0];
            toChecks = _yield$Promise$all6[1];
            givePrivs = privilegeList.filter(function (priv, index) {
              return fromChecks[index] && !toChecks[index];
            });
            rescindPrivs = privilegeList.filter(function (priv, index) {
              return !fromChecks[index] && toChecks[index];
            });
            _context9.next = 12;
            return privileges.categories.give(givePrivs, toCid, group);
          case 12:
            _context9.next = 14;
            return privileges.categories.rescind(rescindPrivs, toCid, group);
          case 14:
          case "end":
            return _context9.stop();
        }
      }, _callee9);
    }));
    return _copyPrivilegesByGroup.apply(this, arguments);
  }
};
}
