module.exports = function(){
  //Date
  Object.defineProperty(Date.prototype, 'format', {
    enumerable: false,
    value: function (format) {
      var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds()
      };
      if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
        (this.getFullYear() + "").substr(4 - RegExp.$1.length));
      for (var k in o)if (new RegExp("(" + k + ")").test(format))
        format = format.replace(RegExp.$1,
            RegExp.$1.length == 1 ? o[k] :
            ("00" + o[k]).substr(("" + o[k]).length));
      return format;
    }
  });
  Object.defineProperty(Date.prototype, 'timeSince', {
    enumerable: false,
    value: function () {
      var seconds = Math.floor((new Date() - this) / 1000);
      var interval = Math.floor(seconds / 31536000);
      if (interval > 1) {
        return interval + " წლის წინ...";
      }
      interval = Math.floor(seconds / 2592000);
      if (interval > 1) {
        return interval + " თვის წინ...";
      }
      interval = Math.floor(seconds / 86400);
      if (interval > 1) {
        return interval + " დღის წინ...";
      }
      interval = Math.floor(seconds / 3600);
      if (interval > 1) {
        return interval + " საათის წინ...";
      }
      interval = Math.floor(seconds / 60);
      if (interval > 1) {
        return interval + " წუთის წინ...";
      }
      return Math.floor(seconds) + " წამის წინ...";
    }
  });
  //String
  Object.defineProperty(String.prototype, 'startsWith', {
    enumerable: false,
    value: function (s) {
      return this.indexOf(s) === 0;
    }
  });
  Object.defineProperty(String.prototype, 'format', {
    enumerable: false,
    value: function () {
      var args = arguments;
      return this.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != 'undefined' ? args[number] : match;
      });
    }
  });
  //Object
  Object.defineProperty(Object.prototype, 'byString', {
    enumerable: false,
    value: function (s) {
      if (s === '')
        return this;
      s = s.replace(/\[(\w+)\]/g, '.$1');
      s = s.replace(/^\./, '');
      var a = s.split('.');
      var o = this;
      while (a.length) {
        var n = a.shift();
        if (n in o) {
          o = o[n];
        } else {
          return null;
        }
      }
      return o;
    }
  });
  Object.defineProperty(Object.prototype, 'toArray', {
    enumerable: false,
    value: function (keyName,valueName) {
      keyName = keyName || 'key';
      valueName = valueName || 'value';
      var arr = [];
      var keys = Object.keys(this);
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var value = this[key];
        var o = {};
        o[keyName] = key;
        o[valueName] = value;
        arr.push(o);
      }
      return arr;
    }
  });
  //Array
  Object.defineProperty(Array.prototype, 'clean', {
    enumerable: false,
    value: function () {
      var temp = [];
      for (var i = 0; i < this.length; i++) {
        var item = this[i];
        if (item && item != null && item != undefined)
          temp.push(item);
      }
      return temp;
    }
  });
  Object.defineProperty(Array.prototype, 'flatten', {
    enumerable: false,
    value: function () {
      return this.reduce(function (memo, val) {
        if (val != null)
          for (var i = 0; i < val.length; i++) {
            memo.push(val[i]);
          }
        return memo;
      }, []);
    }
  });
};
