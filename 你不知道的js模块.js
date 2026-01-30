var MyModules = (
  function Manager() {
  var modules = {};
  function define(name, deps, impl) {
    for (var i = 0; i < deps.length; i++) {
      deps[i] = modules[deps[i]]; // 把依赖项替换为实际的模块
    }
    console.log('函数', impl, JSON.stringify(impl));
    modules[name] = impl.apply(impl, deps);
  }

  function get(name) {
    return modules[name];
  }

  return {
    define: define,
    get: get
  };
})()

MyModules.define("bar", [], function() {
  function hello(who) {
    return "Let me introduce: " + who;
  }
  return {
    hello: hello
  };
});
var bar = MyModules.get("bar");
console.log(bar.hello("Nicholas"));


console.log('------------------');

MyModules.define("foo", ["bar"], function(bar) {
  var hungry = "hippo";
  function awesome() {
    console.log("bar", bar, typeof bar, this);
    console.log(bar.hello(hungry).toUpperCase());
  }
  return {
    awesome: awesome
  };
});
var foo = MyModules.get("foo");
foo.awesome();
console.log('foo', foo);

